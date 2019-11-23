// @flow
import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as wwDetector from '../../utils/get-prediction.worker.js';
import icon from './loading.gif';

const videoConstraints = {
  facingMode: 'environment',
};

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    maxWidth: '100%',
    width: '100%',
  },
  video: {
    // visibility: 'hidden',
    zIndex: -1,
    maxWidth: '100%',
    position: 'absolute',
  },
  canvas: {
    // visibility: 'hidden',
    maxWidth: '100%',
    position: 'absolute',
  },
  toggler: {
    marginBottom: theme.spacing(2),
  },
  noModelMessage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function drawBoxWithLabel(box, ctx) {
  const x = box.bbox[0];
  const y = box.bbox[1];
  const width = box.bbox[2];
  const height = box.bbox[3];
  const font = '16px sans-serif';

  ctx.strokeStyle = 'green';
  ctx.lineWidth = 4;
  ctx.strokeRect(x, y, width, height);

  ctx.font = font;
  ctx.textBaseline = 'top';
  ctx.fillStyle = 'green';
  const textWidth = ctx.measureText(box.class).width;
  const textHeight = parseInt(font, 10); // base 10
  ctx.fillRect(x, y, textWidth + 4, textHeight + 4);

  // Draw the text last to ensure it's on top.
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(box.class, x, y);
}

let detector = null;
if (typeof Worker !== `undefined`) {
  detector = wwDetector();
}

let canvas = null;
if (typeof document !== `undefined`) {
  canvas = document.createElement('canvas');
}

const Detector = () => {
  const classes = useStyles();
  const [hasWebcam, setHasWebcam] = useState(true);
  const [shouldDetect, setShouldDetect] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const predict = async stopDetection => {
    const video = webcamRef.current;
    if (stopDetection || video.videoWidth === 0 || video.videoHeight === 0) {
      return null;
    }

    // Set canvas to be the same height as video input
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const tempCtx = canvas.getContext('2d');
    // get canvas context and draw video onto it
    tempCtx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    // // ctx.scale(224 / width, 224 / width);

    // extract ImageData objct because you cannot send HTMLElements to Web Worker
    const imageData = tempCtx.getImageData(
      0,
      0,
      video.videoWidth,
      video.videoHeight
    );
    const result = await detector.getPrediction(imageData);
    return {
      ...result,
      width: video.videoWidth,
      height: video.videoHeight,
    };
  };

  const toggleDetection = () => {
    setShouldDetect(!shouldDetect);
  };

  useEffect(() => {
    let stopDetection = !shouldDetect;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: videoConstraints,
        })
        .then(stream => {
          window.stream = stream;
          webcamRef.current.srcObject = stream;
          return new Promise(resolve => {
            webcamRef.current.onloadedmetadata = () => {
              resolve();
            };
          });
        })
        .then(async () => {
          while (!stopDetection) {
            // We need await in while loop because we don't want to skip detections
            // eslint-disable-next-line no-await-in-loop
            const predictionResults = await predict(stopDetection);

            // Set width and height for the first render
            if (!canvasRef) {
              return false;
            }
            if (canvasRef.current.width !== predictionResults.width) {
              canvasRef.current.width = predictionResults.width;
            }
            if (canvasRef.current.height !== predictionResults.height) {
              canvasRef.current.height = predictionResults.height;
            }
            const ctx = canvasRef.current.getContext('2d');
            if (
              predictionResults &&
              predictionResults.result != null &&
              predictionResults.result[0]
            ) {
              if (!modelLoaded) {
                setModelLoaded(true);
              }
              // Clear canvas before drawing
              ctx.clearRect(
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height
              );
              predictionResults.result.forEach(box => {
                drawBoxWithLabel(box, ctx);
              });
            }
          }
          return true;
        })
        .catch(e => {
          console.error(e);
        });
    } else {
      setHasWebcam(false);
    }

    return () => {
      stopDetection = true;
    };
  }, [webcamRef, shouldDetect]);

  return (
    <React.Fragment>
      {!modelLoaded && (
        <h2 className={classes.noModelMessage}>
          Give it a moment, model has to be loaded first (~5MB)
          <img src={icon} alt={': ('} />
        </h2>
      )}
      <Button
        className={classes.toggler}
        onClick={toggleDetection}
        margin="normal"
        fullWidth
        variant="contained"
        type="submit"
        color="primary"
      >
        {shouldDetect ? 'Turn OFF' : 'Turn ON'}
      </Button>
      {!hasWebcam && <span>Cannot access webcam :(</span>}
      <div className={classes.container}>
        <video
          className={classes.video}
          autoPlay
          playsInline
          muted
          ref={webcamRef}
        />
        <canvas className={classes.canvas} ref={canvasRef} />
      </div>
    </React.Fragment>
  );
};

export default Detector;

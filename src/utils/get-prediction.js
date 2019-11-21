import * as tf from '@tensorflow/tfjs';
import * as ssd from '@tensorflow-models/coco-ssd';

async function getDetector() {
  const net = await ssd.load();

  const getPrediction = async image => {
    const { height, width } = image;
    const imageContext = image.getContext('2d');
    // imageContext.scale(224 / width, 224 / width);
    const imageData = imageContext.getImageData(
      width / 2,
      height / 2,
      width,
      height
    );
    // const tfImg = tf.browser.fromPixels(imageData);
    // const smalImg = tf.image.resizeBilinear(tfImg, [224, 224]);
    // const resized = tf.cast(smalImg, 'float32');
    // const t4d = tf.tensor4d(Array.from(resized.dataSync()), [1, 224, 224, 3]);
    const result = await net.detect(imageData);
    return result;
  };

  return {
    getPrediction,
  };
}

export default getDetector;

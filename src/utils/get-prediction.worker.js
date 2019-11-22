import '@tensorflow/tfjs';
import * as ssd from '@tensorflow-models/coco-ssd';

let net;

ssd
  .load({
    base: 'lite_mobilenet_v2',
  })
  .then(model => {
    net = model;
  });

export async function getPrediction(image) {
  if (!net) {
    return null;
  }
  // const { height, width } = image;
  // const imageContext = image.getContext('2d');
  // // imageContext.scale(224 / width, 224 / width);
  // const imageData = imageContext.getImageData(
  //   width / 2,
  //   height / 2,
  //   width,
  //   height
  // );
  // const tfImg = tf.browser.fromPixels(imageData);
  // const smalImg = tf.image.resizeBilinear(tfImg, [224, 224]);
  // const resized = tf.cast(smalImg, 'float32');
  // const t4d = tf.tensor4d(Array.from(resized.dataSync()), [1, 224, 224, 3]);
  const result = await net.detect(image);
  const boxes = result.map(boxInfo => [
    boxInfo.bbox[0],
    boxInfo.bbox[1],
    boxInfo.bbox[0] + boxInfo.bbox[2],
    boxInfo.bbox[1] + boxInfo.bbox[3],
  ]);
  const scores = result.map(boxInfo => boxInfo.score);
  const classes = result.map(boxInfo => boxInfo.class);
  return { result, boxes, classes, scores };
}

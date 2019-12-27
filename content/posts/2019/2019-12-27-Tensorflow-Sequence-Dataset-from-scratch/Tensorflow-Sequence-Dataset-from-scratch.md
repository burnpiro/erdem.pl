---
title: Tensorflow 2 Squence Dataset from scratch
date: '2019-12-27'
template: 'post'
draft: false
tags:
  - 'Tensorflow'
  - 'Machine Learning'
  - 'AI'
  - 'Data'
description: 'How to create your own Dataset for Tensorflow model training by extending Sequence class?'
---

<figure class="image">
  <img src="./dataset.png" alt="Dataset Example full">
  <figcaption>Image source: https://swinghu.github.io/assets/face-detection-recognition/From_Facial_Parts_Responses_to_Face_Detection_A_Deep_Learning_Approach_index.png</figcaption>
</figure>

## The problem
Modern Machine Learning solutions require a huge amount of data, that's definitely the case when working with image recognition/object detection. Because of that, we need to create more and more complex datasets to teach our models. At this moment we cannot store the whole thing in the memory (sometimes even hard drive has a problem), quite often a description of that dataset is not directly readable by Tensorflow's __Dataset__. That's why we need to create a modern solution to handle and preprocess an enormous amount of data in easy to understand way using Sequences.

## What is the Sequence?
According to documentation, Sequence is:

> __Base object for fitting to a sequence of data, such as a dataset.__

Sequence object is created using [__Sequence Class__](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L331-L406). The best thing about it is that we can extend it. Every Sequence has to implement 3 methods:
- `__getitem__` - used to extract item from dataset
- `__len__` - returns length of our dataset
- `__init__` - initializing our dataset (this one is not required but we need some kind of initialization)

Sequence allows us to create complex datasets and even modify them at the end of each epoch by implementing `on_epoch_end`. We're going to focuss only on those 3 methods but if you can you can play with `on_epoch_end`.

## Our Test Dataset

In our example we're going to use WIDER FACE dataset

> Instruction how to get dataset is [Here](https://github.com/burnpiro/tiny-face-detection-tensorflow2#dataset)

This dataset contains over 32k images and weights around 2GB so we don't really want to keep it in the memory all the time. This dataset is used to teach object detection models so it contains bounding boxes for every face on the image.

### Data structure

Dataset is already splited into __Train__ and __Validation__ so we don't have to do it again. We have two folders: __WIDER_train__ and __WIDER_val__. Image description is stored in __wider_face_train_bbx_gt.txt__ and __wider_face_val_bbx_gt.txt__. Here is an example of one of the images

<figure class="image">
  <img src="./22_Picnic_Picnic_22_277.jpg" alt="Image Example">
  <figcaption>Image source: WIDER FACE dataset</figcaption>
</figure>

Description for that image in `.txt` file is as follows:

```

22--Picnic/22_Picnic_Picnic_22_277.jpg
3
196 410 74 114 1 0 0 0 0 0 
344 404 62 88 1 0 0 0 0 0 
634 222 58 86 1 0 0 0 0 0 
```

It might seams unclear at first but everything is explained in Dataset's Readme file:

```
File name
Number of bounding box
x1, y1, w, h, blur, expression, illumination, invalid, occlusion, pose
```

So our image contains 3 boxes. First two numbers are X and Y coordinates followed by box width and height. After that we have more information about the face inside box, we're not going to use those one because our goal is just object detection (face detection) but feel free to check Readme file for properties description.

## Model's input and output

Now after we know how our dataset looks like we need to figure out what is an input and output of our __Model__.

For this example we're going to use __MobileNetV2__ (`mobilenet_v2_0.75_224` to be precise), so our model has input size of __224x224x3__ (width x height x RGB). So every example in our sentence has to produce input that size.

Output on the other hand is completely up to us. We're using MobileNet as an feature extractor that gives us output from last Conv layer of __7x7x240__. We want to keep 7x7 grid and our detection requires only 5 values per grid (because we have only one class). At the end our output should look like __7x7x5__.

```
----- Rest of MobileNetV2 ------
__________________________________________________________________________________________________
block_16_project_BN (BatchNorma (None, 7, 7, 240)    960         block_16_project[0][0]           
__________________________________________________________________________________________________
conv2d (Conv2D)                 (None, 7, 7, 240)    518640      block_16_project_BN[0][0]        
__________________________________________________________________________________________________
conv2d_1 (Conv2D)               (None, 7, 7, 240)    518400      conv2d[0][0]                     
__________________________________________________________________________________________________
batch_normalization (BatchNorma (None, 7, 7, 240)    960         conv2d_1[0][0]                   
__________________________________________________________________________________________________
activation (Activation)         (None, 7, 7, 240)    0           batch_normalization[0][0]        
__________________________________________________________________________________________________
conv2d_2 (Conv2D)               (None, 7, 7, 5)      1205        activation[0][0]                 
```

Now it should be clear tha our Dataset should generate examples like:

- Input - __224x224x3__
- Output - __7x7x5__

## Create Sequence Class extension

```python
class DataGenerator(tf.keras.utils.Sequence):

    def __init__(self, file_path, config_path, debug=False):
        # Sequence initialization
        
    def __len__(self):
        # Should return Sequence length

    def __getitem__(self, idx):
        # Returns preprocessed data

```

### Initialization


---
title: Understanding RoI Pooling (Region of Interest)
date: '2019-12-28'
template: 'post'
draft: false
tags:
  - 'RCNN'
  - 'Machine Learning'
  - 'AI'
  - 'Neural Networks'
description: 'Quickt and easy explanation what is RoI Pooling and how it works? Why do we event using it in Fast R-CNNs? Can we use sth better instead?'
---

<figure class="image">
  <img src="./dataset.png" alt="Dataset Example">
  <figcaption>Image source: https://swinghu.github.io/assets/face-detection-recognition/From_Facial_Parts_Responses_to_Face_Detection_A_Deep_Learning_Approach_index.png</figcaption>
</figure>

## The problem

> __TLDR__:
>
> Here is a code: [https://gist.github.com/burnpiro/c3835a1f914545f2034f4190b1e83153](https://gist.github.com/burnpiro/c3835a1f914545f2034f4190b1e83153)
>
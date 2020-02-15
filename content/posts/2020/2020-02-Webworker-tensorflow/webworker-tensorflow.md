---
title: Making TensorflowJS work faster with WebWorkers.
date: '2020-02-09'
template: 'post'
draft: false
tags:
  - 'JavaScript'
  - 'TensorflowJS'
  - 'MachineLearning'
  - 'Performance'
description: 'Improving performance of running Tensorflow models in web applications.'
---

## The issue

If you've ever worked with TensorflowJS you probably know that running data through models (especially image processing) takes a long time. Because JavaScript is single-threaded, that poses a huge problem for a site responsivenes. Everytime sth is blocking the main thread, user cannot interact with your website. What can you do to fix that? The answer is simple, use WebWorker to run your model.

## 
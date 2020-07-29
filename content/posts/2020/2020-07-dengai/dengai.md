---
title: DengAI - How to aproach Data Science competitions?
date: '2020-07-26'
template: 'post'
draft: false
tags:
  - 'Data Science'
  - 'MachineLearning'
  - 'Data Analysis'
description: ''
---

<figure class="image">
  <img src="./main.jpg" alt="ELM-AE">
  <figcaption>Mosquito. Source: <a href="https://www.flickr.com/photos/sanofi-pasteur/5284040324/in/photolist-93W66w-arV2fF-3p8QNh-cnF7KE-cnF7Mj-cnF8a7-3p8RvU-cnF88u-cnF7Nu-arXFfy-cnF7J7-arXFto-arXDno-cnF7Hb-rwLX9d-cnF7UC-yM76y7-cnF7Ps-cnF85Q-cnF84G-cnF7TE-9wSDw-e4U78V-qRQpJa-e8GxDY-d4YEBA-d4YEwu-e8AVyt-e8GoTN-cnF873-4Gq9Y9-cnFty3-cnF7SQ-c3urbq-cnF7RY-qRJm2d-cnF7VL-62BwyV-qRJj2S-r9i7QB-r99a5k-62Bwt8-c3urhL-c3urd5-5xe7XE-pNRXZp-qRSbMx-pocK57-5xe13J-cnF7XY" target="_blank">flickr user sanofi-pasteur</a></figcaption>
</figure>

## Problem description

If you've ever worked with data analysis it's highly likely that you know about the idea of [data correlation](https://en.wikipedia.org/wiki/Correlation_and_dependence). There are many ways of calculating correlation within your data, and most of them are already implemented in popular data science toolkits. What I want to show you today is how to figure out a correlation between different length of time series vectors and target result (or any other value).

This might come handy when trying to design models that rely on time series data. Let me give you an example. Imagine you're dealing with weather data. Your goal is to predict the population at some point in the future. That population is not dependent on current weather conditions but rather on the past.

## Conclusion

The extended version of PPS is a powerful tool to select a set of features while building your model. Sometimes it might leed to a deeper understanding of the data event without expert knowledge on the subject. Even if it might take a while to calculate all PPS for different lengths of input vectors it is a time well spent. EDA ([Exploratory Data Analysis](https://en.wikipedia.org/wiki/Exploratory_data_analysis)) is still one of the most important parts of every Data Science/Machine Learning project, and you shouldn't skip it or just limit yourself to the default set of tools.
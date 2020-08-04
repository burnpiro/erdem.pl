---
title: DengAI - Data preprocessing
date: '2020-08-03'
template: 'post'
draft: false
tags:
  - 'Data Science'
  - 'MachineLearning'
  - 'Data Analysis'
description: 'Step by step explanation on how to deal with Kaggle like competitions. What are the things we should focus on and what should be ignored?'
---

<figure class="image">
  <img src="./main.jpg" alt="ELM-AE">
  <figcaption>Mosquito CC BY-NC-ND 2.0. Source: <a href="https://www.flickr.com/photos/sanofi-pasteur/5284040324/in/photolist-93W66w-arV2fF-3p8QNh-cnF7KE-cnF7Mj-cnF8a7-3p8RvU-cnF88u-cnF7Nu-arXFfy-cnF7J7-arXFto-arXDno-cnF7Hb-rwLX9d-cnF7UC-yM76y7-cnF7Ps-cnF85Q-cnF84G-cnF7TE-9wSDw-e4U78V-qRQpJa-e8GxDY-d4YEBA-d4YEwu-e8AVyt-e8GoTN-cnF873-4Gq9Y9-cnFty3-cnF7SQ-c3urbq-cnF7RY-qRJm2d-cnF7VL-62BwyV-qRJj2S-r9i7QB-r99a5k-62Bwt8-c3urhL-c3urd5-5xe7XE-pNRXZp-qRSbMx-pocK57-5xe13J-cnF7XY" target="_blank">flickr user Sanofi Pasteur</a></figcaption>
</figure>


> This article is based on my entry into [DengAI competition on the DrivenData platform](https://www.drivendata.org/competitions/44/dengai-predicting-disease-spread/). I've managed to score within 0.2% (14/9069 as on 02 Jun 2020).

In this article I assume that you're already familiar with [DengAI - EDA](https://erdem.pl/2020/07/deng-ai-how-to-approach-data-science-competitions-eda). You don't have to read it to understand everything here, but it would be a lot easier if you do.

## Why do we have to preprocess data?

When designing ML models we have to remember that some of them are based on gradient method. Problem with the gradient is that it performs better on normalized/scaled data. Let me show an example:

<figure class="image">
  <img src="./feature-scaling.png" alt="gradient descent">
  <figcaption>Gradient descent examples. Source: <a href="https://www.machinelearningman.com/post/best-explanation-batch-gradient-descent-mini-batch-gradient-descent-stochastic-gradient-descent" target="_blank">Machine Learning Man</a></figcaption>
</figure>

On the left side we have dataset that consists of two features and one of them has larger scale than the other. In both cases gradient method works, but it takes a lot less steps to reach optimum when features lies on similar scales (right image).

## What is a Normalization and what is Scalling?

#### [Normalization](https://en.wikipedia.org/wiki/Normalization_(statistics))
In the standard sence, normalization refers to the process of adjusting value distribution range to fit into **<-1, 1>** (id doesn't have to be exact -1 to 1 but within the same order of magnitude so the range ). Standard normalization is done by **subtracting mean value from each value in the set and dividing result by the standard diviation**.

$$
{\frac {x-\mu }{\sigma }}
$$

#### [Scalling](https://en.wikipedia.org/wiki/Feature_scaling#Rescaling_(min-max_normalization))
You can see it called "min-max normalization" but scalling is another value adjustment to fit in range, but this time range is **<0, 1>**.

$$
{\frac  {x-{\text{min}}(x)}{{\text{max}}(x)-{\text{min}}(x)}}
$$

## Normalization or Scaling?

There are two types of operation you can perform on the feature. You can either normalize or scale its values. Which one you choose depends on the feature itself. If you consider features which have some positive and negative values and that values are important, you should perform normalization. On the feature where negative values make no sense, you should apply scalling.

It's not always that black and white. Let's consider feature like temperature. Depends on which scale you choose (Kelvin or Celsius/Fahrenheit) there might be different interpretations what that temperature could be. Kelvin scale is an **absolute thermodynamic temperature scale** (starte with absolute zero and cannot go below that). On the other hand we have scales used IRL where negative numbers are meaningful for us. When the temperature drops below 0 Celsius, water frezes. The same goes for Fahrenheit scale, its 0 degrees describe freazing point of the [brine](https://en.wikipedia.org/wiki/Brine) (concentrated solution of salt in water). Stright forward choice would be to scale Kelvins and normalize Celsius and Fahrenheit. That that's not always work. We can show it on DengAI's dataset:

<div class="center-all">

|       | reanalysis\_air\_temp\_k | reanalysis\_avg\_temp\_k | reanalysis\_dew\_point\_temp\_k | reanalysis\_tdtr\_k | station\_avg\_temp\_c | station\_diur\_temp\_rng\_c | station\_max\_temp\_c | station\_min\_temp\_c |
|-------|-----------------------|-----------------------|-----------------------------|-------------------|--------------------|-------------------------|--------------------|--------------------|
| count | 1446.00               | 1446.00               | 1446.00                     | 1446.00           | 1413.00            | 1413.00                 | 1436.00            | 1442.00            |
| mean  | 298.70                | 299.23                | 295.25                      | 4.90              | 27.19              | 8.06                    | 32.45              | 22.10              |
| std   | 1.36                  | 1.26                  | 1.53                        | 3.55              | 1.29               | 2.13                    | 1.96               | 1.57               |
| min   | 294.64                | 294.89                | 289.64                      | 1.36              | 21.40              | 4.53                    | 26.70              | 14.70              |
| 25%   | 297.66                | 298.26                | 294.12                      | 2.33              | 26.30              | 6.51                    | 31.10              | 21.10              |
| 50%   | 298.65                | 299.29                | 295.64                      | 2.86              | 27.41              | 7.30                    | 32.80              | 22.20              |
| 75%   | 299.83                | 300.21                | 296.46                      | 7.62              | 28.16              | 9.57                    | 33.90              | 23.30              |
| max   | 302.20                | 302.93                | 298.45                      | 16.03             | 30.80              | 15.80                   | 42.20              | 25.60              |

</div>

Some of the temperatures are in Kelvin scale, and some in Celsius scale. That's not what is important here. If you look closely you should be able to group those temperatures by type:
- temperature with absolute minimum value
- temperature without absolute minimum value (can be negative)

An example of the first one is **station\_diur\_temp\_rng\_c**. This is something called [Diurnal temperature variation](https://en.wikipedia.org/wiki/Diurnal_temperature_variation) and defines a variation between minimum and maximum temperature withing some period of time. That value cannot have negative values (because difference between minimum and maximum cannot be lower than 0). That's where we should use scalling instead of normalization.

Another example is **reanalysis\_air\_temp\_k**. It is an air temperature and important feature. We cannot define a minimum value that temperature could get. If we really want there is a arbitrary minimum temperature for each city that we should never get below but that's not what we want to do. Things like temperature in problems like our might have another meaing when training models. There could be some positive and negative impact of the temperature value. In this case it might be that temperatures below 298K positively affecting number of cases (fewer mosquitos). That's why we should use normalization for this one.

After checking an entire dataset we can come up with the list of features to normalize, scale and copy from [our list of features](https://erdem.pl/2020/07/deng-ai-how-to-approach-data-science-competitions-eda#dataset):

#### Normalized features

```
'reanalysis_air_temp_k'
'reanalysis_avg_temp_k'
'reanalysis_dew_point_temp_k'
'reanalysis_max_air_temp_k'
'reanalysis_min_air_temp_k'
'station_avg_temp_c'
'station_max_temp_c'
'station_min_temp_c'
```

#### Scaled features
```
'station_diur_temp_rng_c'
'reanalysis_tdtr_k'
'precipitation_amt_mm'
'reanalysis_precip_amt_kg_per_m2'
'reanalysis_relative_humidity_percent'
'reanalysis_sat_precip_amt_mm'
'reanalysis_specific_humidity_g_per_kg'
'station_precip_mm'
'year'
'weekofyear'
```

#### Copied features
```
'ndvi_ne'
'ndvi_nw'
'ndvi_se'
'ndvi_sw'
```

## Why Copy?

If we look at the definition of NDVI index, we can decide there is no reason for scalling or normalizing those values. NDVI values are already in **<-1, 1>** range. Sometimes we might want to copy values directly like that. Especially when original values are within the same order of magnitude as our normalized features. It might be <0,2> or <1,4>, but it shouldn't cause a problem for the model.

## The code

Now we have to write some code to preprocess our data. We're going to use [StandardScaler](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html) and [MinMaxScaler](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MinMaxScaler.html) from [sklearn](https://scikit-learn.org/stable/) library.

```python
import pandas as pd
from sklearn.preprocessing import StandardScaler, MinMaxScaler
from data_info import cols_to_norm, cols_to_scale

def preproc_data(data, norm_cols=cols_to_norm, scale_cols=cols_to_scale, train_scale=None):
    """
    :param data: Dataframe
    :param norm_cols: List<string>
    :param scale_cols: List<string>
    :param train_scale: Dataframe
    :return: Tuple(Dataframe, Dataframe)
    """
    # Make a copy, not to modify original data
    new_data = data.copy()
    if train_scale is None:
        train_scale = data
    if norm_cols:
        # Normalize temp and percipation
        new_data[norm_cols] = StandardScaler().fit(train_scale[norm_cols]).transform(new_data[norm_cols])

    if scale_cols:
        # Scale year and week no but within (0,1)
        new_data[scale_cols] = MinMaxScaler(feature_range=(0, 1)).fit(train_scale[scale_cols]).transform(
            new_data[scale_cols])

    return new_data, train_scale
```

As an input to our function we expect to send 3 or 4 variables. When dealing with the training set we're sending 3 variables:
- training dataset (as pandas Dataframe)
- list of columns to normalize
- list of columns to scale

When we're processing training data we have to define dataset for scaling/normalization process. This dataset is used to get values like **mean** or **standard diviation**. Because at the point of processing training dataset we don't have any external datasets, we're using training dataset. At line 17 we're normalizing selected columns using `StandardScaler()`:

```python
if norm_cols:
    # Normalize temp and percipation
    new_data[norm_cols] = StandardScaler().fit(train_scale[norm_cols]).transform(new_data[norm_cols])
```

StandardScaler doesn't require any parameters when initializing, but it require scale dataset to fit to. We could just past the `new_data` twice and it would work but then we need to create another preprocessing for test dataset.

Next we're doing the same thing but with `MinMaxScaler()`.

```python
if scale_cols:
    # Scale year and week no but within (0,1)
    new_data[scale_cols] = MinMaxScaler(feature_range=(0, 1)).fit(train_scale[scale_cols]).transform(
        new_data[scale_cols])
```

This time we're passing one parameter called `feature_range` to be sure that our scale is in range <0,1>. As in the previous example we're passing scaling dataset to fit to and transform selected columns.

At the end, we're returning transformed `new_data` and additionally `train_scale` for further preprocessing. But wait the second! What further preprocessing? Remember that we're dealing not only with training dataset but also with test dataset. We have to apply the same data processing for both of them to have the same input for the model. If we would simply use `preproc_data()` in the same way for the test dataset we would apply completely different normalization and scaling. Reason why is because normalization and scaling is done by `.fit()` method and this method uses some given dataset to calculate **mean** and other required values. If you use test dataset which might have a different range of values (there was a hot summer because of global warming etc.) your value of 28C in test dataset will be normalized with a different parameters. Let me show you an example:

Training Dataset:
$$
[22,23,23,24,25,26,24]
$$
$$
\mu = 23.86
$$
$$
\sigma = 1.25
$$

Testing Dataset:
$$
[24,24,25,26,25,24,26]
$$
$$
\mu = 24.86
$$
$$
\sigma = 0.83
$$

Normalizing Testing Dataset using mean and SD from Training Dataset gives us:

$$
[0.11, 0.11, 0.91, 1.71, 0.91, 0.11, 1.71]
$$

But if you use mean and SD from Testing dataset you'll end up with:

$$
[-1.04, -1.04, 0.17, 1.37, 0.17, -1.04, 1.37]
$$

You might think that second one is better describing the datset but that's only true when dealing with **only** testing dataset. 

## Conclusion



## References:
- DengAI: Predicting Disease Spread [https://www.drivendata.org/competitions/44/dengai-predicting-disease-spread/](https://www.drivendata.org/competitions/44/dengai-predicting-disease-spread/)

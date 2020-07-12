---
title: Evolution of Extreme Learning Machines
date: '2020-07-13'
template: 'post'
draft: false
tags:
  - 'AI'
  - 'Neural Networks'
  - 'MachineLearning'
description: 'Not so quick introduction about what is ELM. Is it really an innovation or just an iteration?'
---

> Note! This is just a major overview of the evoltion of ELMs. It doens't include all possible versions and tweaks done to ELMs throught the years.

## What is ELM?

ELM (Extreme Learning Machines) are feedforward neural networks. "Invented" in 2006 by _G. Huang_ and it's based on the idea of inverse matrix aproximation.

As said in the original [paper][elm]:
> this algorithm tends to provide good generalization performance at extremely fast learning speed

Hence, the phrase "Extreme" in **E**LM.

> If you're not familiar with ELMs please check out my article ["Introduction to Extreme Learning Machines"](https://erdem.pl/2020/05/introduction-to-extreme-learning-machines) first. 

## When evolution started?

### I-ELM

After the original publication in 2006, Huang and his associates published another paper on a different type of ELMs called [I-ELM][i-elm] (Incremental ELM). As the name says, I-ELM is an incremental version of the standard ELM network. 

## Conclusion

ELMs are not as accurate as traditional neural networks, but they can be used when dealing with problems which require real-time retraining of the network. I'm going to write another article describing evolution and usage of ELMs soon. For now, it's up to you to create an opinion about those networks.

### References:
- Guang-Bin Huang, Qin-Yu Zhu, Chee-Kheong Siew. Extreme learning machine: Theory and applications, 2006 [https://www.ntu.edu.sg/home/egbhuang/pdf/ELM-NC-2006.pdf][elm]

[elm]: https://www.ntu.edu.sg/home/egbhuang/pdf/ELM-NC-2006.pdf
[i-elm]: https://www.researchgate.net/profile/Chee_Siew/publication/6928613_Universal_Approximation_Using_Incremental_Constructive_Feedforward_Networks_With_Random_Hidden_Nodes/links/00b4952f8672bc0621000000.pdf
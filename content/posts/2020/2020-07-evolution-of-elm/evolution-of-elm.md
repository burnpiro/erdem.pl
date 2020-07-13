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

If you're not familiar with ELMs please check out my article ["Introduction to Extreme Learning Machines"](https://erdem.pl/2020/05/introduction-to-extreme-learning-machines) first. 

## When evolution started?

### [I-ELM (2006)][i-elm]

<figure class="image">
  <img src="./i-elm.png" alt="I-ELM">
  <figcaption>I-ELM structure. Source: <a href="https://www.researchgate.net/publication/341365884_An_improved_algorithm_for_incremental_extreme_learning_machine" target="_blank">An improved algorithm for incremental extremelearning machine</a></figcaption>
</figure>

After the original publication in 2006, Huang and his associates published another paper on a different type of ELMs called [I-ELM][i-elm] (Incremental ELM). As the name says, I-ELM is an incremental version of the standard ELM network. Idea of I-ELM is quite simple:

Define max number of hidden nodes **L** and expected training accuracy $\epsilon$
Starting from $l=0$ (l is a number of current hidden nodes):
- Increment $l_t = l_{t-1} + 1$
- Initialize weights $w_l$ and bias $b_l$ of the newly added hidden nauron randomly (do not reinitialize already existing neurons)
- Calculate output vector $H$
- Calculate weight vector $\hat\beta$
- Calculate error after adding node
- Check if $E < \epsilon$
- If not then increate number of hidden nodes and repeat the process.

There is a chance that $l > L$ at some point of the process and $E > \epsilon$. At this point we should repeat whole process of training and initialization.

Idea of incrementing size of the network is not new and usually produces better results that setting network size "by hand". There is one dissadventage which is especially important in terms of ELMs... computation time. If your network happens to be large (let's say 1000 hidden nodes), in worse case we have to make 1000 matrix invertions.

If you're interested in I-ELM, you should know there are many variations of it:
 - II-ELM (improved I-ELM)
 - CI-ELM (convex I-ELM)
 - EI-ELM (enhance I-ELM)
 
 I'm not going to explain every one of them because this article should be just a quick summary and a place to start instead of whole book about all variations of ELMs. Besides that probably every person reading this is here not by a mistake and know how to find more information about interesting topic if he/she knows what to look for :P

### [P-ELM (2008)][p-elm]

After introducing incremental version of ELM another improvement was to use pruning to achieve optimal structure of the network. P-ELM (pruned ELM) was introduced in 2008 by Hai-Jun Rong. Algorithm starts with a very large network and removes nodes which are not relevant to predictions. By "not relevant" we mean that node is not taking part in predicting output value (i.e. output value is close to 0). This idea was able to produce smaller clasifiers and is mostly suitable for pattern classification.

### [EM-ELM (2009)][em-elm]

This version of ELM is not a standalone version but an improvement of I-ELM. EM stands for Error-Minimized and allows to add group of nodes instead of only one. Those nodes are inserted randomly into the network until error is not below $\epsilon$.

### V-ELM (2012)



## Conclusion

ELMs are not as accurate as traditional neural networks, but they can be used when dealing with problems which require real-time retraining of the network. I'm going to write another article describing evolution and usage of ELMs soon. For now, it's up to you to create an opinion about those networks.

### References:
- Guang-Bin Huang, Qin-Yu Zhu, Chee-Kheong Siew. "Extreme learning machine: Theory and applications", 2006 [Publication][elm]
- Guang-Bin Huang, Lei Chen, Chee-Kheong Siew. "Universal Approximation Using Incremental Constructive Feedforward Networks With Random Hidden Nodes", 2006 [Publication][i-elm]
- Rong, Hai-Jun & Ong, Yew & Tan, Ah-Hwee & Zhu, Zexuan. (2008). A fast pruned-extreme learning machine for classification problem. Neurocomputing. [Publication][p-elm]
- Feng, Guorui & Huang, Guang-Bin & Lin, Qingping & Gay, Robert. (2009). Error Minimized Extreme Learning Machine With Growth of Hidden Nodes and Incremental Learning. [Publication][em-elm]

[elm]: https://www.ntu.edu.sg/home/egbhuang/pdf/ELM-NC-2006.pdf
[i-elm]: https://www.researchgate.net/profile/Chee_Siew/publication/6928613_Universal_Approximation_Using_Incremental_Constructive_Feedforward_Networks_With_Random_Hidden_Nodes/links/00b4952f8672bc0621000000.pdf
[p-elm]: https://www.researchgate.net/publication/222429523_A_fast_pruned-extreme_learning_machine_for_classification_problem
[em-elm]: https://www.researchgate.net/publication/26665344_Error_Minimized_Extreme_Learning_Machine_With_Growth_of_Hidden_Nodes_and_Incremental_Learning
---
title: Introduction to Extreme Learning Machines
date: '2020-05-13'
template: 'post'
draft: false
tags:
  - 'AI'
  - 'Neural Networks'
  - 'MachineLearning'
description: 'Not so quick introduction about what is ELM. Is it really an innovation or just an iteration?'
---

## What is ELM?

ELM (Extreme Learning Machines) are feedforward neural networks. "Invented" in 2006 by _G. Huang_.

As said in the original [paper][1]:
> this algorithm tends to provide good generalization performance at extremely fast learning speed

Hence the phrase "Extreme" in **E**LM.

## Why ELM is different from standard Neural Network

ELM doesn't require gradient based backpropagation to work. It uses [Moore-Penrose generalized inverse](https://en.wikipedia.org/wiki/Moore%E2%80%93Penrose_inverse) to set its weights.

First, we look at standard SLFN (Single hidden Layer Feedforward Neural network):

<figure class="image">
  <img src="./shfn.svg" alt="SLFN">
  <figcaption>Single hidden Layer Feedforward Neural network, Source: Shifei Ding under CC BY 3.0</figcaption>
</figure>

It's pretty straightforward:
1. multiply inputs by weights
2. add bias
3. apply the activation function
4. repeat steps 1-3 number of layers times
5. calculate output
6. backpropagate
7. repeat everything

ELM removes step 4 (because it's always SLFN), replaces step 6 with matrix inverse, and does it only once, so step 7 goes away as well.

## More details

Before going into details we need to look how ELM output is calculated:

$$
f_L(x) = \sum_{i=1}^{L}\beta_ig_i(x) = \sum_{i=1}^{L}\beta_ig(w_i * x_j + b_i), j = 1,...,N
$$

Where:
- L is a numbe of hidden units
- N is a number of training samples
- $\beta_i$ is weight vector between $i$th hidden layer and output
- w is a weight vector between input and hidden layer
- g is an activation function
- b is a vias vector
- x in an input vector

It is quite similar to what's going one in standard NN with backpropagation but if you look closely you can see that we're naming weight between hidden layer and output as $\beta$. This $\beta$ matrix is a special matrix because that is our pseudo-inverse. We can shorten the equation and write it as:

$$
T = H\beta
$$

Where:

$$
H = \begin{bmatrix}
g(w_1 * x_1 + b_1) & ... & g(w_L*x_1+b_L) \\
\vdots & ... & \vdots \\
g(w_1 * x_N + b_1) & ... & g(w_L * x_N + b_L)
\end{bmatrix}_{N \times L}
$$
$$
\beta = \begin{bmatrix}
\beta_1^T \\
\vdots \\
\beta_L^T
\end{bmatrix}_{L \times m}
T = \begin{bmatrix}
t_1^T \\
\vdots \\
t_N^T
\end{bmatrix}_{N \times m}
$$

Where:
- m is a number of outputs
- **H** is called **Hidden Layer Output Matrix**
- T is a training data target matrix


## The theory behind the learning (You can skip this section if you want)
Now we have to dig dipper into theories behind the network to decide what to do next.

> **First theorem:**
>
>Given a standard SLFN with N hidden nodes and activation function 
>
>$g:R \rightarrow R$ which is infinitely differentiable in any interval, for N arbitrary distinct samples $(x_i,t_i)$, where $x_i \in R^n$ and $t_i \in R^m$, for any $w_i$ and $b_i$ randomly chosen from any intervals of $R^n$ and $R$, respectively, according to any continuous probability distribution, then with probability one, the hidden layer output matrix $H$ of the SLFN is invertible and 
>
>$|| H\beta - T || = 0$

Function is _infinitely differentiable_ if it's a [smooth function](https://en.wikipedia.org/wiki/Smoothness)

> **Second theorem:**
>
> Given any small positive value $\epsilon > 0$ and activation function $g:R \rightarrow R$ which is infinitely differentiable in any interval, there exists $L \leq N$ such that for $N$ arbitrary distinct samples $(x_i, t_i)$, where $x_i \in R^n$ and $t_i \in R^m$, for any $w_i$ and $b_i$ randomly chosen from any intervals of $R^n$ and $R$, respectively, according to any continuous probability distribution, then with probability one, 
>
>$|| H_{N \times L}\beta_{L \times m} - T_{N \times m} || < \epsilon$


> **Third theorem:**
>
>(Serre, Rao, and Mitra in __Generalized Inverse of Matrices and its Applications__). A matrix **G** of order $n \times m$ is a Moore-Penrose generalized inverse of matrix **A** of order $m \times n$, if:
>
> $ AGA = A, GAG = G, (AG)^T = AG, (GA)^T = GA $
>

I'm not going to prove those theorems but if you're interested please refer [Page 3, ELM-NC-2006][1] for further explanation.

Now what we have to do is to define our cost function. Bassing our assumptions on _Capabilities of a four-layered feedforward neural network: four layers versus three_ we can see that SLFN is a lineary system if the input weights and the hidden layer biases can be chosen randomly.

Because our ELM is a linear system then we can create optimization objective:

$$
|| H\hat\beta - T || = \min_{\beta}|| H\beta - T ||
$$

To aproximate the solution we need to use Rao's and Mitra's work again:
> _p. 51 of Rao and Mitra **Generalized Inverse of Matrices and its Applications**_
>
>Let there exist a matrix $G$ such that $Gy$ is a minimum norm least-squares solution of a linear system $Ax = y$. Then it is necessary and sufficient that $G = A^{\dagger}$, the Moore–Penrose generalized inverse of matrix $A$.

Now we can figure out that because H is invertable we can calculate $\hat\beta$ as:

$$
\hat\beta = H^{\dagger}T
$$

## Learning algorithm

After going through some difficult math we can define learning algorith now. Algorithm itself is relatively easy:

1. Randomly assign weight $w_i$ and bias $b_i$, $i = 1,...L$
2. Calculate hidden layer output **H**
3. Calculate output weight matrix $\hat\beta = H^\dagger T$
4. Use $\hat\beta$ to make a prediction on new data $T = H\hat\beta$

If you're interested in seening python implementation please check this repository:

[https://github.com/burnpiro/elm-pure](https://github.com/burnpiro/elm-pure)

And here is a preview of how the model works on MNIST dataset:

[https://github.com/burnpiro/elm-pure/blob/master/ELM%20example.ipynb](https://github.com/burnpiro/elm-pure/blob/master/ELM%20example.ipynb)

As you can see, simple version of ELM achieves **>91% accuracy** on MNIST dataset and it takes around **3s** to train the network on _**intel i7 7820X**_ CPU.

## Performance comparison

I'm going to use metrics from the original paper in this section and it might surprise you how long some training is done in compare with previous MNIST example, but remember that original paper was published in 2006 and networks were trained on _**Pentium 4 1.9GHz**_ CPU.

#### Datasets

$$
\small
\begin{array} {|r|r|}\hline \text{Problems samples} & \text{Training samples} & \text{Testing} &
\text{Attributes} & \text{Classes} \\ \hline \text{Satellite image} & 4400 & 2000 & 36 & 7 \\
\hline \text{Image segmentation} & 1500 & 810 & 18 & 7 \\
\hline \text{Shuttle} & 43500 & 14500 & 9 & 7 \\
\hline \text{Banana} & 5200 & 490000 & 2 & 2 \\ \hline 
\end{array}
$$

### Results

$$
\footnotesize
\begin{array} {|r|r|}\hline \text{Problems} & \text{Algorithms} & \text{Training s} &
\text{Testing s} & \text{Acc Train} & \text{Acc Test} & \text{Nodes} \\
\hline \text{Satellite image} & \text{ELM} & 14.92 & 0.34 & 93.52 &  89.04 & 500 \\
& \text{BP} & 12561 & 0.08 & 95.26 & 82.34 & 100 \\
\hline & & & & & & & & \\
\hline \text{Image segment} & \text{ELM} & 1.40 & 0.07 & 97.35 & 95.01 & 200 \\
& \text{BP} & 4745.7 & 0.04 & 96.92 & 86.27 & 100 \\
\hline & & & & & & & & \\
\hline \text{Shuttle} & ELM & 5.740 & 0.23 & 99.65 & 99.40 & 50 \\
& BP & 6132.2 & 0.22 & 99.77 & 99.27 & 50 \\
\hline & & & & & & & & \\
\hline\text{Banana} & ELM & 2.19 & 20.06 & 92.36 & 91.57 & 100 \\
& BP & 6132.2 & 21.10 & 90.26 & 88.09 & 100 \\
\hline \end{array}
$$

We can ignore training time for now because it's obvous that gradient descent takes longer than matrix invert. The most important information form this result table is **Accuracy** and **Nodes**. In the first two datasets, you can see that author used different size of BP to achieve the same results as ELM. Size of BP network in first case was **5x** smaller and **2x** smaller in second case. That affects testing times (it's faster to run 100 nodes NN than 500 nodes NN). That tells us how accurate is our method in aproximating dataset.

It is hard to find any tests of ELM networks on popular datasets but i've manage to do so. Here is a benchmark on **CIFAR-10** and **MNIST**

$$
\begin{array} {|rr|}
\hline \text{Dataset} & \text{Algorithms} & \text{Acc Test} \\
\hline \text{CIFAR-10} & \text{ELM 1000 (1x)} & 10.64 \\
& \text{ELM 3000 (20x)} & 71.40 \\
& \text{ELM 3500 (30x)} & 87.55 \\
& \text{ReNet (2015)} & 87.65 \\
& \text{EfficientNet (2019)} & 98.90 \\
\hline & & & & & & & & \\
\hline \text{MNIST} & \text{ELM 512} & 92.15 \\
& \text{DELM 15000} & 99.43 \\
& \text{RNN} & 99.55 \\
& \text{BP 6-layer 5700} & 99.65 \\
\hline \end{array}
$$

Where:
- **DELM** is a deep ELM
- **ReNet** is described in [this paper][2]
- **RNN** is a Recurrent Neural Network
- **EfficientNet** is described in [this paper][3]

I didn't find training times for ELMs so there was no way to compare them with results from other networks but all those multiplaiers (**20x**, **30x**) are relative differences in training time based on training of **ELM 1000 on CIFAR-10**. If there is a 30x time increase between **ELM 1000** and **ELM 3500** then you can imagine how long it would take to train DELM which has 15000 neurons.

## Conclussion

ELMs are not as accurate as traditional neural networks, but they can be used when dealing with problems which require real-time retraining of the network. I'm going to write another article describing evolution and usage of ELMs soon. For now, it's up to you to create an opinion about those networks.

There was a lot of controvesies behind ELMs and I'm not the best person to juge. I'm just going to forward you to [wikipedia page](https://en.wikipedia.org/wiki/Extreme_learning_machine#Controversy) with the description.

### References:
- Guang-Bin Huang, Qin-Yu Zhu, Chee-Kheong Siew. Extreme learning machine: Theory and applications, 2006 [https://www.ntu.edu.sg/home/egbhuang/pdf/ELM-NC-2006.pdf](https://www.ntu.edu.sg/home/egbhuang/pdf/ELM-NC-2006.pdf)
- C.R. Rao, S.K. Mitra, Generalized Inverse of Matrices and its Applications, Wiley, New York, 1971.
-  D. Serre, Matrices: Theory and Applications, Springer, New York, 2002.
- S. Tamura, M. Tateishi, Capabilities of a four-layered feedforward neural network: four layers versus three, IEEE Trans. Neural Networks 8 (2) (1997) 251–255.

[1]: https://www.ntu.edu.sg/home/egbhuang/pdf/ELM-NC-2006.pdf
[2]: https://arxiv.org/pdf/1505.00393.pdf
[3]: https://arxiv.org/pdf/1905.11946.pdf
---
title: Step by Step visual introduction to Diffusion Models.
date: '2023-10-09'
template: 'post'
draft: false
popular: 5
tags:
- 'Machine Learning'
- 'Diffusion Models'
description: "How the diffusion models works under the hood? From standard DDPM to Stable Diffusion."
---

## What is a diffusion model?

The idea of the diffusion model is not that old. In the 2015 paper called __"Deep Unsupervised Learning using Nonequilibrium Thermodynamics"__ [[1]][diffusionModels2015], the Authors described it like that:

> The essential idea, inspired by non-equilibrium
statistical physics, is to systematically and __slowly
destroy structure in a data distribution__ through
an __iterative forward diffusion process__. We then
learn a __reverse diffusion process__ that __restores
structure in data__, yielding a highly flexible and
tractable generative model of the data.

In here **_diffusion process_** is split into **_forward_** and **_reverse_** diffusion process. The forward diffusion process is a process of turning an image into the noise and the reverse diffusion process suppose to turn that noise into the image again.

## Forward diffusion process

If the previous definition doesn't explain much, don't worry, we can explain why and how it works. First you need to know how to destroy structure in a data distribution. 

<div style="display: flex; flex-direction: column;" class="wide-container">
<div class="flex-container">
    <figure id="figure-1" class="full-fig-width" style="transform: translateX(0)">
        <img src="noise_process/noise0.jpg" alt="Original Image"/>
        <figcaption>(a) Original Image.</figcaption>
    </figure>
    <figure id="figure-2" class="full-fig-width" style="transform: translateX(0)">
        <img src="noise_process/noise10.jpg" alt="Pure noise"/>
        <figcaption>(b) Pure noise.</figcaption>
    </figure></div>
<div>
    <span style="font-size: 0.875rem; font-style: italic;">Figure 1: Input and output of the forward diffusion process</span>
</div>
</div>

If we take any image (Fig. 1a) it has some none-random distribution. We don't know the distribution but our goal is to destroy it so we can do it by adding a noise to it. At the end of that process we should end up with noise similar to pure noise.  

<figure>
    <div class="center-all" id="forward-diffusion-diagram">
        <diffusion-diagram src="diffusion/forward_diffusion"></diffusion-diagram>
    </div>
    <figcaption>Figure 2: Forward diffusion process using only 10 steps,</figcaption>
</figure>

Each step of the forward diffusion process is defined as $$q(x_{t}|x_{t-1}) = \mathcal{N}(x_{t}, \sqrt{1 - \beta_t}x_{t-1}, \beta_tI )$$. Where __q__ is our forward process, $$x_t$$ is the output of the forward process at step __t__ (naturally $$x_{t-1}$$ is an input at step __t__). __N__ is a _normal distribution_, $$\sqrt{1 - \beta_t}x_{t-1}$$ is our _mean_ and finally $$\beta_tI$$ defines a _variance_. 

#### Schedule 

$$\beta_t$$ refers to something called __schedule__ and values can range from 0 to 1. The values are usually kept low to prevent variance exploding. The 2020 paper[[2]][ddpm2020] uses __linear schedule__ so the output looks like that:

<figure id="figure-3">
    <img src="noise_process/linear_noise.jpeg" alt="Forward Diffusion process"/>
    <figcaption>Figure 3: Entire forward diffusion process using <b>linear schedule</b> with 1000 time steps.</figcaption>
</figure>

In this case $$\beta_t$$ ranges from __0.0001__ to __0.02__ for the mean and variance behaves like in the Fig. 4.

<figure id="figure-4">
    <img src="noise_process/lin_schedule_beta.png" alt="variance and mean changes"/>
    <figcaption>Figure 4: Change in <i>mean</i> and <i>variance</i> for a given timestep</figcaption>
</figure>

Researchers from OpenAI in their 2021 paper[[3]][iddpm2021] decided that using linear schedule is not that efficient. Like you've seen before, most of the information from the original image is lost after around half of the total steps. They designed their own schedule and called it the __cosine schedule__ (Fig. 5). The improvement in schedule allowed them to reduce number of steps to __50__.

<figure id="figure-5">
    <img src="noise_process/cos_noise.jpg" alt="cosine schedule"/>
    <figcaption>Figure 5: Forward diffusion process using <b>cosine schedule</b>.</figcaption>
</figure>

#### Real noising process (only last equation is important)

As you can imagine, adding noise to the image using forward diffusion process ig going to be slow. __Training process doesn't use examples in line with the forward process but rather it uses samples from arbitrary timestep t__. This means at each training step we would need to iterate through t steps to generate 1 training sample. But 2020 paper has the solution but first we have to define the entire noise to be added at _T_ as:

$$$
q(x_{1:T}|x_0) := \prod_{t=1}^{T}q(x_t|x_{t-1})
$$$

The paper describes whole transition very poorly (maybe because authors are just doing that kind of math in their head). We're going to do it manually. First we need to apply reparameterization trick ( $$\mathcal{N}(\mu, \sigma^2) = \mu + \sigma *\epsilon$$ ) on single forward step definition.

$$$
q(x_{t}|x_{t-1}) = \mathcal{N}(x_{t}, \sqrt{1 - \beta_t}x_{t-1}, \beta_tI ) \\ 
= \sqrt{1 - \beta_t}x_{t-1} + \sqrt{\beta_t}\epsilon
$$$

- $$\epsilon$$ is from $$\mathcal{N}(0,1)$$

Now authors introduced some notation:
- $$\alpha_t = 1 - \beta_t$$
- $$\hat\alpha_t := \prod_{s=1}^{t} a_s$$

This notation is only for the ease of transformation. Now our function looks like that:

$$$
q(x_{t}|x_{t-1}) = \sqrt{\alpha_t}x_{t-1} + \sqrt{1- \alpha_t}\epsilon
$$$

And we can extend it to previous timesteps:

$$$
q(x_{t}|x_{t-1}) = \sqrt{\alpha_t}x_{t-1} + \sqrt{1- \alpha_t}\epsilon \\
= \sqrt{\alpha_t\alpha_{t-1}}x_{t-2} + \sqrt{1- \alpha_t\alpha_{t-1}}\epsilon \\
= \sqrt{\alpha_t\alpha_{t-1}\alpha_{t-2}}x_{t-3} + \sqrt{1- \alpha_t\alpha_{t-1}\alpha_{t-2}}\epsilon \\
= \sqrt{\alpha_t\alpha_{t-1}\alpha_{t-2}\alpha_{t-3}}x_{t-4} + \sqrt{1- \alpha_t\alpha_{t-1}\alpha_{t-2}\alpha_{t-3}}\epsilon \\
$$$

At the end we can make use of second extra notation and compress all the $$\alpha$$'s to one definition starting at $$x_0$$:

$$$
q(x_{t}|x_{0}) = \sqrt{\hat\alpha_t}x_{0} + \sqrt{1- \hat\alpha_t}\epsilon = \mathcal{N}(x_{t}, \sqrt{\hat\alpha_t}x_{0}, (1 - \hat\alpha_t)I )
$$$

With that equation we can calculate noise at any arbitrary step __t__ ($$\hat\alpha_t$$ is known because $$\beta_t$$ is known) without going through the process.


## Reverse diffusion process

As you probably figure it out, the goal of the reverse diffusion process is to convert pure noise into an image. To do that we're going to use some neural network (ignore architecture for now, we'll get into it soon). If you're familiar with GANs (Generative Adversarial Networks) (Fig. 6) we're trying to train something similar to the _generator network_. The only difference is that our network will have an easier job because it doesn't have to do all the work in one step.

<figure id="figure-6">
    <img src="noise_process/gan_diagram_generator.svg" alt="GAN"/>
    <figcaption>Figure 6: GAN architecture. (source: <a href="https://developers.google.com/machine-learning/gan/generator">Google for Developers</a>)</figcaption>
</figure>

Ok, so why not just use GANs? It took some very smart people a long time to figure out how to achieve decent results with that architecture. It is just extremely difficult to train a network to convert some random noise into meaningful image. The authors of the 2015 paper [[1]][diffusionModels2015] figure out that switching to multistep framework and removing some noise at the time is just more efficient and easy to train. 

> Learning in this framework involves estimating small perturbations to a diffusion process. __Estimating small perturbations is more tractable__ than explicitly describing the full distribution with a single, non-analytically-normalizable, potential function. Furthermore, since a diffusion process exists for any smooth target distribution, this method can capture data distributions of arbitrary form.

### Reverse diffusion misconception

You've probably head that _"Diffusion probabilistic model is a parameterized Markov Chain"_. That is true but for some reason people have wrong idea about that the __neural network__ does in the diffusion model. In 2020 paper [[2]][ddpm2020] authors are using this graph to describe the process.

<figure id="figure-7">
    <img src="noise_process/graphical_diffusion_model.png" alt="diffusion process graph"/>
    <figcaption>Figure 7: The directed graphical model. (source: <a href="https://developers.google.com/machine-learning/gan/generator">Deep Unsupervised Learning using Nonequilibrium Thermodynamics, arXiv:1503.03585, 2015.</a>)</figcaption>
</figure>

And usually the neural network is visualized like that:

<figure id="figure-8">
    <img src="noise_process/one_diffusion_step.png" alt="one step from the diffusion process"/>
    <figcaption>Figure 8: High level visualization of one step from the reverse diffusion process.</figcaption>
</figure>

Because of that, a lot people think that neural network (called _diffusion model_ for even more confusion) is removing noise from an input image or predicting the noise to be removed from an input. Both are incorrect. __Diffusion model predicts the entire noise to be removed in a given timestep__. This means that if we have timestep __t=600__ then our Diffusion model tries to predict the entire noise on which removal we should get to __t=0__ not __t=599__. I'll explain everything in a second but first just look at the step by step reverse diffusion process. 

Please notice that i've scaled the number of steps from 1000 to 10. This is because it wouldn't be very distinguishable for human to compare results between step 785 and 784.

<figure>
    <div class="center-all" id="reverse-diffusion-diagram">
        <diffusion-diagram src="diffusion/reverse_diffusion"></diffusion-diagram>
    </div>
    <figcaption>Figure 9:: Reverse diffusion process</figcaption>
</figure>

### Some math (you can skip but probably worth reading)
The process looks very simple but you probably have some questions like _"where did you get that equation from?"_. First we need to copy the equation for the reverse process from the 2020 paper[[2]][ddpm2020]:

$$$
p_\theta(x_{0:T}) := p(x_T)\prod_{t=1}^{T}p_\theta(x_{t-1}|x_t)
$$$

where:

$$$
p_\theta(x_{t-1}|x_{t}) = \mathcal{N}(x_{t-1}, \mu_\theta(x_t,t), \sum_{\theta}(x_t,t))
$$$

This might seam complicated but is basically says that $$p_\theta(x_{0:T})$$ (diffusion process) is __chain of gaussian transitions__ starting at $$p(x_T)$$ and __iterating T times__ using equation for one diffusion process step $$p_\theta(x_{t-1}|x_{t})$$.

Now it's time to explain how the single step works and how to get something to implement. $$\mathcal{N}(x_{t-1}, \mu_\theta(x_t,t), \sum_{\theta}(x_t,t))$$ has 2 parts:

- $$\mu_\theta(x_t,t)$$ (mean)
- $$\sum_{\theta}(x_t,t)$$ which equals $$\sigma_t^2I$$ (variance)

Authors of the 2020 paper decided to set the second part to be __time dependant but not trainable__. It's not set to be constant but rather set to equal $$\beta_TI$$. This is the same beta from the schedule before. Now the only thing that is left is the first part (mean). 


[Full diffusion process (gDrive)](https://drive.google.com/file/d/13UCkMZCs_AktbkEAAmJ_jeumuZlGFC0e/view?usp=sharing)


### References:

1. Jascha Sohl-Dickstein, Eric A. Weiss, Niru Maheswaranathan, Surya Ganguli. [Deep Unsupervised Learning using Nonequilibrium Thermodynamics][diffusionModels2015], arXiv:1503.03585, 2015.
2. Jonathan Ho, Ajay Jain, Pieter Abbeel. [Denoising Diffusion Probabilistic Models][ddpm2020], arXiv:2006.11239, 2020.
3. Alex Nichol, Prafulla Dhariwal [Improved Denoising Diffusion Probabilistic Models][iddpm2021], arXiv:2102.09672, 2021.
4. Prafulla Dhariwal, Alex Nichol [Diffusion Models Beat GANs on Image Synthesis][ddpmBeatGANs2021], arXiv:2105.05233, 2021.
5. Jonathan Ho, Tim Salimans [Classifier-Free Diffusion Guidance][cfg2022], arXiv:2207.12598, 2022.

[diffusionModels2015]: https://arxiv.org/abs/1503.03585
[ddpm2020]: https://arxiv.org/abs/2006.11239
[iddpm2021]: https://arxiv.org/abs/2102.09672
[ddpmBeatGANs2021]: https://arxiv.org/abs/2105.05233
[cfg2022]: https://arxiv.org/abs/2207.12598
---
title: V8 function optimization
date: '2019-08-01'
template: 'post'
draft: false
tags:
  - 'Engines'
  - 'Javascript'
  - 'Performance'
  - 'Internals'
description: 'JS engines are complicated piece of software. I want to quickly explain one of the optimization techniques V8 is using to speed up your code execution.'
---

## Setup (optional)

> If you don't want to run it on your computer please skip this section

First we need to install V8 to be able to run it without whole package (node or web browser). I've created gist with whole process for Linux users.

[https://gist.github.com/burnpiro/d85d836200df93af892877c2cf37f12c](https://gist.github.com/burnpiro/d85d836200df93af892877c2cf37f12c)

If you're a Mac user it should apply to you too. If you have any problem with installation process please refer to [Official Docs](https://v8.dev/docs/build)

After installing you should be able to run code like
```javascript
// index.js

console.log('it works');
```

by calling
```bash
d8 index.js
```

## What are we trying to optimize?

Our test function looks like that:
```javascript
function test(obj: { a: number, b: number }): number {
  let result = 0;
  for (let i = 0; i < N; i++) {
  	result += obj.a + obj.b
  }
  return result;
}
```

Let's assume this function is called thousands of times during our script execution and it's important it run quickly. Before I explain how that is optimized in V8 we need to know what are Shapes in V8 and how Inline Cache (IC) works.

## Shapes


---
title: JSF*ck - Does code weirdness affect execution performance?
date: '2019-11-07'
template: 'post'
draft: false
tags:
  - 'Javascript'
  - 'Performance'
  - 'Internals'
description: 'Checking if how we write JS can change the performance of its execution even if it is the same code?'
---

> This post is created base on Martin Kleppe's ([@aemkei](https://twitter.com/aemkei)) work about converting JS to only six basic characters and still keeping it executable. It is a response to comment from [Jonathan Means](https://www.youtube.com/watch?v=sRWE5tnaxlI&lc=Ugw8lYvWtPQReYaahmZ4AaABAg).

For those who are reading this out of the context, I'm going to spend a while explaining the problem before jumping to tests.

### What is JSF*ck?

Except for being NSFW, it's a programming style that only using six characters to write and execute code in JS. We can do that because of sth called **Type Coercion**. JS coercion comes up once in a while on JS conferences (and mostly to make some funny video out of it), it's purpose is to allow users to operate on a different type of types without explicitly casting them into one.

```javascript
const a = "1" + 5 // "15"
``` 

The idea is great but sometimes (or more likely quite often) people don't understand how it actually works under the hood. For those who are interested in the idea here is a link to the specification [http://www.ecma-international.org/ecma-262/#sec-type-conversion](http://www.ecma-international.org/ecma-262/#sec-type-conversion).

Most of those talks are picking some of the non-intuitive examples like
```javascript
const a = [] + [] // ""
```
or one of the most famous one (`+ +"a"` returns **"NaN"**)
```javascript
const yellowFruit = ("b" + "a" + +"a" + "a").toLocaleLowerCase() // "banana"
```

### What can we do with that?

Because of coercion we should be able to create any valid sentence in JavaScript (including evaluation). If we could do that, then we should be able to convert our code into sth like:

```javascript
// 5+4
[!+[]+!+[]+!+[]+!+[]+!+[]]+(+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]])+[])[!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]]
```

Achieving this is not that straightforward as you might think.

To get a number as a string you could use
```javascript
+[] // "0"
+!+[] // "1"
[+!+[]]+[+[]] // "10
```

Getting strings is even more difficult
```javascript
[][[]][!+[]+!+[]] // "d" or "undefined"[2]
```
It is using the fact that strings could be accessed as an array of chars and you can generate **"undefined"** string quite easily by calling `[][[]]`.

I'm not going to explain every single one of them in detail. There is a great video released by LowLevelJS [https://www.youtube.com/watch?v=sRWE5tnaxlI](https://www.youtube.com/watch?v=sRWE5tnaxlI) that covers the topic. If you want to play with it please go to [http://www.jsfuck.com/](http://www.jsfuck.com/) and try your code in there.

### Implications on performance

As you might notice writing down the whole bunch of code this way is quite space expensive. I've managed to parse some of the test code into JSF convention and code which looks like
```javascript
const startT1 = Date.now();

const N = 10000;

let f = { tmp: 3, tmp2: 3, tmp3: 3, tmp4: 3, tmp5: 3, a: 'Gandalf', b: 'The Grey' };
let f2 = { tmp: 3, tmp2: 3, tmp3: 3, tmp4: 3, tmp5: 3, a: 'Jack', b: 'Sparrow' };
let f3 = { tmp: 3, tmp2: 3, tmp3: 3, tmp4: 3, tmp5: 3, a: 'Charles', b: 'Xavier' };
let f4 = { tmp: 3, tmp2: 3, tmp3: 3, tmp4: 3, tmp5: 3, a: 'Frodo', b: 'Baggins' };
let f5 = { tmp: 3, tmp2: 3, tmp3: 3, tmp4: 3, tmp5: 3, a: 'Legolas', b: 'Thranduilion' };
let f6 = { tmp: 3, tmp2: 3, tmp3: 3, tmp4: 3, tmp5: 3, a: 'Indiana', b: 'Jones' };

function test(obj) {
  let result = '';
  for (let i = 0; i < N; i += 1) {
    result += obj.a + obj.b;
  }
  return result;
}

for(let i = 0; i < N; i += 1) {
	test(f);
	test(f2);
	test(f3);
	test(f4);
	test(f5);
	test(f6);
}
console.log("test with one shape:", Date.now() - startT1, "ms.");
```
Parses into 847192 lines long string. So instead of having >1KB file, we have 828KB now. You can get that code [Here](https://gist.github.com/burnpiro/5a177d8bb307005c4d8f5672fe9ff0a3) and execute it just by calling `node index.js`.

#### It's time to start testing our code!!!

Test Env:
```
Ubuntu 18.04
Node 12.13.0
Intel i7-7820X
```
Test examples:
- standard call - [https://gist.github.com/burnpiro/56be270ac032924faf48824e08995687](https://gist.github.com/burnpiro/56be270ac032924faf48824e08995687)
- string eval - [https://gist.github.com/burnpiro/ffaa8edac33370e1aa5126c83fb728bb](https://gist.github.com/burnpiro/ffaa8edac33370e1aa5126c83fb728bb)
- JSF eval - [https://gist.github.com/burnpiro/5a177d8bb307005c4d8f5672fe9ff0a3](https://gist.github.com/burnpiro/5a177d8bb307005c4d8f5672fe9ff0a3)

I'm testing standard function twice be able to spot the difference in `eval` execution.


##### Test Results:
standard call (50 samples)
```
AVG: 3274ms
Std. Dev: 7ms
Heap: 8.06MB
```

string eval (50 samples)
```
AVG: 3272ms
Std. Dev: 6ms
Heap: 8.08MB
```

JSF eval (50 samples):
```
AVG: 3241ms
Std. Dev: 8ms
Heap: 18.88MB
```

> NOTE! Values on your machine might be different because you're using different version of nodeJS or different processor. 

### Conclusions

There is no difference in execution performance between different versions of the same code in V8 (node). It was an expected but important thing to see here is the amount of memory used by V8. There is almost no difference between evaluation and standard function call, but parsing your code to JSF takes a lot more memory than the original one.

It's not that surprising if you look at it. Storing and parsing almost 1MB file in JS Engine should take a lot more memory than a 1KB file.

Even if JSF code is not practical people might get a better understanding of how JS works just by reading some of it. Type coercion is not some magic as many people on twitter things. I know that **_"Any sufficiently advanced technology is indistinguishable from magic"_** (Clarke's First Law) but I like to rephrase that: **_"Any incomprehensible technology is indistinguishable from magic"_**. If you can understand it, it's not magic any more :)
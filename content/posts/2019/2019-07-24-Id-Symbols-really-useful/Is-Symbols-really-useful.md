---
title: Is Symbol really useful?
date: '2019-07-24'
template: 'post'
draft: false
popular: 0
tags:
  - 'Libraries'
  - 'Javascript'
  - 'Internals'
description: 'Symbols, underestimated feature introduced in ES2015. Does it have any other purpose than interview questions?'
---

### Quick recap, what are those "Symbols" anyway?

> primitive value that represents a unique, non-String Object property key

That's Symbol definition from current [spec](http://www.ecma-international.org/ecma-262/#sec-symbol-value). But what does it mean? You probably know other primitive types in JS (`Undefined`, `Null`, `Boolean`, `Number`, `BigInt` or `String`). Symbol is another one. I know that is not much and is sounds like defining recursion:

> To understand recursion, you must first understand recursion

In programming languages all primitive types are just a bunch of bytes stored in memory. It doesn't matter if it's a string or number, from a data perspective it's still just bytes. In case of symbols they are `tokens` that serves as unique IDs.

#### How to use Symbol

```javascript
// string "id" is a Symbol's description
const id = Symbol('id');

// you can also create Symbol without description
const noDescriptionId = Symbol();
```

We've just created `id` which is a Symbol. But important thing is that `id !== Symbol('id')`. Like I've said earlier Symbols are unique.

#### Unless they aren't...

There is another way to create Symbol, and it's called

```javascript
Symbol.for('id');

assert(Symbol.for('id') === Symbol.for('id')); // true
```

OK, what happened here? We've just used `global Symbol registry` to store our Symbol. As the name says it's a `global` registry and global in this case is also cross-realm (in JS that mean Symbol created inside iframe and is the same as in your current execution context).

Aside note: You can check if Symbol is unique or not. For that you can use `Symbol.keyFor(yourSymbol)`. If `yourSymbol` is global, then it returns Symbol's description (`id`) as a string, else it returns `undefined`.

```javascript
assert(Symbol.keyFor(Symbol.for('id')) === 'id');
assert(Symbol.keyFor(Symbol('id')) === undefined);
```

#### Properties you need to know

- Symbol will never conflict with Object key. You can use Symbol as object key `store[Symbol.for('id')] = 42`.
- Keys created using Symbol is not iterable. So when you call `Object.values(store)` you won't get `42` unless there is another key (not Symbol key) with that value. That's really useful property because it won't change library behaviour when you add another property.
- To extract Symbols from object, you can use `Object.getOwnPropertySymbols()`.
- Symbols are copied to other objects. Every enumerable Symbol is copied from obj `a` into obj `b` when `Object.assign(a, b)` is called.

## Symbol's usefulness

Now when you know what a Symbol is, we can discuss why should you consider Symbols useful? Let's suppose you're creating library and want to give your user possibility to extend your library.

Your library is called `stateOfTheArtValidation` (`stav` to make it short). And it exports list of available extensions you can assign to your object.

```javascript
export const extensibleSymbols = {
  VALIDATION: Symbol('validationFun'),
  REQUIRED: Symbol('required'),
};
```

Now we can use any of those Symbols in our objects.

```javascript
const myObj = {
  someProp: 'anyValue',
  [stav.Symbols.VALIDATION]: element => element.hasOwnProperty('someProp'),
};
```

Let me first show you what your library does with that, before we discuss it.

```javascript
// somewhere in our library
validate: (...objectsToValidate) => {
  const validations = [];

  for (const objToValidate of objectsToValidate) {
    if (typeof objToValidate[this.Symbols.VALIDATION] === 'function') {
      validations.push({
        result: objToValidate[this.Symbols.VALIDATION](objToValidate),
      });
    } else {
      validations.push({
        result: this.standardValidation(objToValidate),
      });
    }
  }

  return validations;
};
```

`validate` is a method from your library. But there are some cases when you want to give user option to apply their validation instead of your `standardValidation` method. Instead of defining a list of string properties which user can use to attach their validation method, you've defined Symbol for it. That way there is 0% chance to have a conflict with any of existing keys on that object, so a user cannot accidentally overwrite property you want to use.

Ofc that example is not really useful IRL but you get an idea.

### [Well-Known Symbols](https://tc39.es/ecma262/#sec-well-known-symbols)

> Well-known symbols are built-in Symbol values that are explicitly referenced by algorithms of this specification.

Someone already thought about that by creating built-in Symbols in JS. Those Symbols are useful to overwrite/add functionalities of/to objects. For instance, you can use `Symbol.iterator` to define iterator and enable your object to be iterable in the way you want.

```javascript
const myObj = {
  test: 'test',
};

myObj[Symbol.iterator] = function* myGenerator() {
  yield this.test;
  yield 'See ya!';
};

for (const val of myObj) {
  console.log(val);
}
```

Prints:

```javascript
test
See ya!
```

### Conclusion

Now you understand how powerful and useful Symbols might be. Probably you're going to use built-in Symbols more often than defining your own. But library creators (like you :P ) have another way for users to extend library functionality.

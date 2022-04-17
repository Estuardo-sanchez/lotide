# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @estuardo_sanchez/lotide`

**Require it:**

`const _ = require('@estuardo_sanchez/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: checks if arrays are equal.
* `assertEqual()`: compares primitive types like numbers and strings.
* `assertObjectsEqual()`: tests functions that return objects.
* `eqObjects()`: compares two objects
* `findKeyByValue()`: takes in an object and returns the first key which contains the given value.
* `letterPositions()`: returns all indices in a string where is character is found.
* `countLetters()`: takes in a string and returns a count of each letter in the string.
* `countOnly()`: takes in a collection of items and return counts for the specific subset of those items.
* `map()`: returns new array based on results of a callback function.
* `takeUntil()`: collects items from an array until the callback provided returns a true value.
* `findKey()`: scans object and returns first key for which the callback returns a true value for.
* `head()`: returns the first element in an array.
* `tail()`: returns every element after the first element.
* `middle()`: returns the middle most elements of an array.
* `flatten()`: turns an array with other arrays inside into a single level array.
* `without()`: function that removes elements from an array.
* `eqArrays()`: takes in two arrays and returns true or false if they match.
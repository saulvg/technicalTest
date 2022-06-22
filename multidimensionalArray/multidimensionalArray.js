"use strict"
//Make a tree multidimensional array with value
let num = 0
const ary = new Array(10).fill('')
  .map(() => new Array(10).fill('')
  .map(() => new Array(10).fill('')
  .map(()=>num++)));

console.log(ary);

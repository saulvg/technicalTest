"use strict"
const obj = {
    a: 'Hello word my name is Saul',
    b: 24,
    c: 'uoo',
    d: 32
}

/* const arr = ['hello world my name is saul', 24]
const keysObj = console.log(Object.keys(obj).length)

const modal = document.querySelector('.modal')
const button = () => { 
    modal.classList.remove('hidden')
};

const mainDiv = document.querySelector('.mainDiv')
mainDiv.addEventListener('click', button)

const body = document.querySelector('body')
body.addEventListener('click', ()=> modal.classList.add('hidden')) */


const objectKeys = Object.keys(obj) 
for (let i = 0; i< objectKeys.length; i++){
const iter = objectKeys[i]
console.log('iter1', obj[iter]);
}

for (let iter2 in obj){
    console.log('iter2', obj[iter2]);
}
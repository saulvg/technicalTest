//Does the following expression "'6' + 3 + 3 == 3 + 3 + '6'" evaluate to “true”? 

const n1 = '6' + 3 + 3
const n2 = 3 + 3 + '6'
console.log(n1, '+', n2);
console.log('6' + 3 + 3 == 3 + 3 + '6')

//Would the following code return “true” value?: "Infinity === 1/0" 
console.log(1/0)
console.log(Infinity === 1/0)

//If we execute the following expression, what would be the result? “parseInt(077)” 
const n3 = parseInt(077)
console.log(n3);

//Can you explain briefly the difference between event.stopPropagation and event.preventDefault? 
/* 
    By default, a DOM event will be fired when you click the element, propagating to all its ancestors.
    To stop the propagation, the Event.stopPropagation function of any event of the Event class should be used, since in this way the event will end at that point, avoiding certain unwanted effects.

    Many DOM elements have built-in functions that will be executed by default when you interact with them and fire an event. What the Event.preventDefault method does is prevent these functions from running. 
*/

//Explain briefly what is the main difference between “==” and “===” in javascript. Do you think any of them should be used more than the other? 
/* 
    While == is considered weak or abstract equality, === is known as strict equality or identity. The difference is that with the == before doing the comparison, both data are converted to a common type.
    Strict equality is more commonly used
*/
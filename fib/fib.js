//Given a number displays its fibonacci series
//In the fibonacci series, the next number is the sum of the previews two
/*
    e.g: fib(10)
    - Serie: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.
    - Fibonacci series result: 55
*/

const fib = (num) => {
  let serie = [0, 1];

  for (let i = 2; i <= num; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }
  return { serie, result: serie[serie.length - 1] };
};
console.log(fib(10));


//Another option

const fib1 = (n, a = 0, b = 1) => new Array(n).fill("").reduce((ac)=>{
  const temp = a
  a = b
  b = temp + b
  ac.push(a)
  return ac
}, [0])
console.log(fib1(10));
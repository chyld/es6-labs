function fib(n){
  if(n < 2){
    return n;
  }else{
    return fib(n - 1) + fib(n - 2);
  }
}
console.log("***>fib(3):", fib(3));
console.log("***>fib(9):", fib(9));

function factorial(n){
  if (n<0){
    return "negative not allowed";
  }
  return n===0 ? 1:n*factorial(n-1);
}
console.log(factorial(5)); //output 120

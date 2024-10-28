function findLargest(){
  let a=parseFloat(prompt("Enter first number:"));
  let b=parseFloat(prompt("Enter second number:"));
  let c=parseFloat(prompt("Enter third number:"));
  
  if (a>=b && a>=c){
    alert("a is greatest number.");
  }
  else if (b>=a && b>=c){
    alert("b is greatest number.");
  }
  else{
    alert("c is greatest number.");
  }
}

findLargest();

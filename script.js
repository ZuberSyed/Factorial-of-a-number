function factorialNum(num){
  var factorial = 1;
  if(num<0){
    factorial = "Please enter a positive integer";
  }
  if(num === 0 || num===1){
    factorial = 1;
  }
  for(var i=num; i>=1;i--){
    factorial *= i;
  }
  return factorial;
}
var x = factorialNum(-4);
console.log(x);

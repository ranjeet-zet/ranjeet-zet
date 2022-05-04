// Cheack A number is prime or not...


function isprime(num) {
  if(num<=1) return false;
  for (let i = 2; i < num; i++) {
    if(num%i==0){
      return false;
    }
  }
  return true;
}
 let input =31;
let x=isprime(input);

console.log((x)? "Prime":"Non Prime");



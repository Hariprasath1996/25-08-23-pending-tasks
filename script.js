
// 1.Swap two variables without using a temporary variable.
// Test case
// console.log(swapVariables(5, 10)); // Output: [10, 5]
function swapVariables(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}
console.log(swapVariables(5, 10)); 

// Check if a given number, is a prime number.
// Test cases
// console.log(isPrime(7)); // Output: true
// console.log(isPrime(10)); // Output: false

function isPrime(num) {
  if (num <= 1) {
    return false; // 0 and 1 are not prime numbers
  }
  
  if (num <= 3) {
    return true; // 2 and 3 are prime numbers
  }

  if (num % 2 === 0 || num % 3 === 0) {
    return false; 
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false; 
    }
  }
  return true;
}
console.log(isPrime(7)); 
console.log(isPrime(10)); 


// Check if a given string is a valid email address.
// Test cases
// console.log(isValidEmail(&#39;example@email.com&#39;)); // Output: true
// console.log(isValidEmail(&#39;invalid-email&#39;)); // Output: false
function isValidEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}

console.log(isValidEmail('example@email.com')); 
console.log(isValidEmail('invalid-email')); 

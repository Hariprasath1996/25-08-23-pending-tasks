
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

// 4. Calculate the factorial of a number using a recursive function.
// // Test case
// console.log(factorial(5)); // Output: 120

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

//5. Reverse words in a sentence without reversing the individual words.
// Test case
// console.log(reverseWordsInSentence(&#39;Hello world&#39;)); // Output: &#39;olleH dlrow&#39;

function reverseWordsInSentence(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.reverse();
  return reversedWords.join(' ');
}
console.log(reverseWordsInSentence('Hello world')); 

// Write a sum method which will work properly when invoked using either syntax below.
//Test case
// console.log(sum(2,3)); // Outputs 5
// console.log(sum(2)(3)); // Outputs 5

function sum(x, y) {
  if (y === undefined) {
    return function (z) {
      return x + z;
    };
  } else {
    return x + y;
  }
}
console.log(sum(2, 3));   
console.log(sum(2)(3));   

// 9. Write a function that counts how many times a specific element appears in an array.
// const arr = [1, 2, 2, 3, 4, 2, 5];
// const count = countOccurrences(arr, 2);
// console.log(count); // Expected Output: 3


function countOccurrences(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}
const arr = [1, 2, 2, 3, 4, 2, 5];
const count = countOccurrences(arr, 2);
console.log(count);

// Write a function that detects if a given substring exists in a larger string.
// const largeString = &quot;This is a sample string for testing.&quot;;
// const substring = &quot;sample&quot;;
// console.log(doesSubstringExist(largeString, substring)); // Expected Output: true

function doesSubstringExist(largeString, substring) {
  return largeString.includes(substring);
}
const largeString = "This is a sample string for testing.";
const substring = "sample";
console.log(doesSubstringExist(largeString, substring)); 








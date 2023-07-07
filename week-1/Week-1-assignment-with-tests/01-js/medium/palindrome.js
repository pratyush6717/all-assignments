/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str=str.toUpperCase();
   str = str.replace(/\s/g, '');
  var i=0;
  var length=str.length-1;
  while(length>i){
    if(str.charAt(i)==','||str.charAt(i)=='!'||str.charAt(i)=='?'||str.charAt(i)=='.'){
      i++;
    }
    else if(str.charAt(length)==','||str.charAt(length)=='!'||str.charAt(length)=='?'||str.charAt(length)=='.'){
      length--;
    }
    else if(str.charAt(i)!=str.charAt(length)){
      return false;
    }
    else{
    i++;
    length--;
    }
  }
  return true;
}

module.exports = isPalindrome;

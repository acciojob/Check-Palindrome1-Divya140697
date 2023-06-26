// complete the given function

function palindrome(s){

  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Check if the cleaned string is equal to its reverse
  return cleanedString === cleanedString.split('').reverse().join('');
}

// Test case
// Output: false


module.exports = palindrome

function isPalindrome(word) {
    const reversedWord = word.split("").reverse().join("")
    if (word === reversedWord) {
        return true
    } else {
        return false
    }
  }
  
  const word = 'racecar'
  if (isPalindrome(word)) {
    console.log('It is a palindrome!')
  } else {
    console.log('It is not a palindrome!')
  }
function reverse(word) {
    let reversedWord = ""
    const wordArray = word.split("")
    for (let i = wordArray.length-1 ; i >= 0 ; i--) {
        reversedWord += wordArray[i]
    }
    return reversedWord
}
   
const word = 'hello'
const reversedWord = reverse(word) 
console.log(reversedWord) // 'olleh'
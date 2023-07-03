function convertToVowels(word) {
    const vowels = ["a","e","i","o","u","A","E","I","O","U"]
    let wordArray = word.split("")
    for (let i = wordArray.length - 1; i >= 0; i--) {
        if (!vowels.has(wordArray[i])) {
            wordArray.splice(i,1)
        }
    }
    return wordArray.join("")
  }
  
  const word = 'thisissomeword'
  const wordWithOnlyVowels = convertToVowels(word)
  console.log(wordWithOnlyVowels) // iioeo
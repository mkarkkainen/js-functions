// Write a function that takes a sentence as input and returns the longest word in the sentence.
// Example:
// Input: "The quick brown fox"
// Output: "quick"
//
//
const longestWord = (string) => {
  const words = string.split(" ")
  
  let longestWord = ''
  let maxCharCount = 0
  
  for (const word of words) {
    const cleanedWord = word.replace(/[^a-zA-Z]/g, '')
    
    if (cleanedWord.length > maxCharCount) {
      longestWord = cleanedWord
      maxCharCount = cleanedWord.length
    }
  }
  
  return longestWord
}

const longestReducer = (string) => {
  const words = string.split(" ")
  
  return words.reduce((longestWord, word) => {
    if(word.length > longestWord.length) {
      longestWord = word
    }
    return longestWord
  }, '')
}
console.log(longestReducer("The quick brown fox"))

//console.log(longestWord("The quick brown fox"))

// Given an array of numbers, filter out the even numbers and then double each remaining number.
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 6, 10]

const evenDouble = (array) => {
  return array.reduce((result, currentNumber) => {
    if (currentNumber % 2 === 1) {
      result.push(currentNumber * 2)
    }
    return result
  }, [])
}
//console.log(evenDouble([1, 2, 3, 4, 5, 6]))



// Write a function that takes a nested array and returns a flat array containing all the elements.
// Example:
// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]

const inputArray = [1, [2, 3], [4, [5, 6]]];

const flattenArray = (array) => {
  return array.reduce((flatArray, toFlatten) => {
    return flatArray.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten)
  }, [])
}

//console.log(flattenArray(inputArray))


// Fibo



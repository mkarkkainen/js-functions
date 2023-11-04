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
    if (word.length > longestWord.length) {
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

//Given an array of integers, where all elements but one occur twice, find the unique element.
function lonelyinteger(a) {
  const counts = {};
  for (const num of a) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return Object.keys(counts).find((key) => counts[key] === 1);
}

const inputarray = [1, 2, 3, 4, 3, 2, 1];
//console.log(lonelyinteger(inputarray))

//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const input = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

const diagonalDiff = (arr) => {
  const length = arr.length;
  let diagonal1 = 0,
    diagonal2 = 0;

  for (let i = 0; i < length; i++) {
    diagonal1 += arr[i][i];
    diagonal2 += arr[length - 1 - i][i];
  }

  return Math.abs(diagonal1 - diagonal2);
};

//console.log(diagonalDiff(input))

//Given a list of integers, count and return the number of times each value appears as an array of integers.

function countingSort(arr) {
  // Write your code here
  let x = {};
  for (let i = 0; i < 100; i++) {
    x[i] = 0;
  }

  for (const num of arr) {
    x[num] = x[num] ? x[num] + 1 : 1;
  }

  return Object.values(x);
}

console.log(
  countingSort([
    63,
    25,
    73,
    1,
    98,
    73,
    56,
    84,
    86,
    57,
    16,
    83,
    8,
    25,
    81,
    56,
    9,
    53,
    98,
    67,
    99,
    12,
    83,
    89,
    80,
    91,
    39,
    86,
    76,
    85,
    74,
    39,
    25,
    90,
    59,
    10,
    94,
    32,
    44,
    3,
    89,
    30,
    27,
    79,
    46,
    96,
    27,
    32,
    18,
    21,
    92,
    69,
    81,
    40,
    40,
    34,
    68,
    78,
    24,
    87,
    42,
    69,
    23,
    41,
    78,
    22,
    6,
    90,
    99,
    89,
    50,
    30,
    20,
    1,
    43,
    3,
    70,
    95,
    33,
    46,
    44,
    9,
    69,
    48,
    33,
    60,
    65,
    16,
    82,
    67,
    61,
    32,
    21,
    79,
    75,
    75,
    13,
    87,
    70,
    33
  ])
);

// Given an array of numbers, output the ratio of positive, negative and zero numbers against the length of the array
function plusMinus(arr) {
    // Write your code here
    let positives = arr.filter( num => num > 0),
        zeros = arr.filter(num => num === 0),
        negatives = arr.filter(num => num < 0)
    positives = positives.length / arr.length
    zeros = zeros.length / arr.length
    negatives = negatives.length / arr.length
    console.log(`${positives.toFixed(6)}\n${negatives.toFixed(6)}\n${zeros.toFixed(6)}`)
}

//console.log(plusMinus([ -4, 3, -9, 0, 4, 1 ]))


//Min Max Sum - Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  // Write your code here
  let sorted = arr.sort((a, b) => a > b)
  let min = sorted.slice(0, 4).reduce((acc, curr) => acc + curr, 0)
  let max = sorted.slice(1).reduce((acc, curr) => acc + curr, 0)
  return min, max
}

//console.log(miniMaxSum([1,2,3,4,5]))
console.log(miniMaxSum([7, 69, 2, 221, 8974]))

function generateHashtag (str) {
  if (!str.trim().length) return false
  let result = str.trim().split(" ").filter(entry => entry.length !== 0).map(entry => entry[0].toUpperCase() + entry.slice(1)).join("")
  if(result.length > 139) {
    return false
  } else if (!result.length) {
    return false
  } else {
    return `#${result}`
  }
}
console.log(generateHashtag("a".repeat(140)))

// O(n^2)

function sum_char_codes(n) {
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      sum += n.charCodeAt(i)
    }
  }
  return sum
}

console.log(sum_char_codes(431234))

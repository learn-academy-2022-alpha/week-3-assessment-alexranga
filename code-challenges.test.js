// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// PseudoCode


// Fibonacci sequence - The next number is found by adding up the two numbers before it
// Create a function and name it fiboSeq
// Initialize an array(fiboArr) with the values [1,1]
// The function it takes in must be greater than 2
// We use a for loop to iterate over the array until the number of elements in the array is  - 1 than the passed in argument
//
// After each iteration, push the value of the current number i added onto the previously pushed number i-1
// The return will be the completed fibonacci sequence 


// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


describe("fiboSeq", () => {

    it("takes in takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {

        const example =  6
//      Expected output: [1, 1, 2, 3, 5, 8]

        const exampleTwo = 10
//      Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

        expect(fiboSeq(example)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fiboSeq(exampleTwo)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// Good Failure
// ReferenceError: fiboSeq is not defined

// b) Create the function that makes the test pass.

const fiboSeq = (num) => {
    let fiboArr = [1,1]
    for(var i=1; i < num -1; i++){
        fiboArr.push(fiboArr[i] + fiboArr[i-1])

    }
    return fiboArr
}

// Test passed



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.


// PseudoCode
// Create a function and name it oddsOnly
// The parameter to be passed in is an array so we can use arr as placeholder
// Create a variable and use the higher order function -    .filter
// Use  .filter to  filter out any element whose value is divisible by 2 and is not a number - the modulo operator and typeof can be used for this.
// Return statement will use the .sort method on the oddNumbers array to sort from least to greatest
// A negative result will sort a before b and vice versa.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("oddsOnly", () => {

    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {

        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
//      Expected output: [-9, 7, 9, 199]

        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
//      Expected output: [-823, 7, 23]

        expect(oddsOnly(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddsOnly(fullArr2)).toEqual([-823, 7, 23])
    })
})

// Good Failure
// ReferenceError: oddsOnly is not defined

// b) Create the function that makes the test pass.

const oddsOnly = (arr) => {
    let oddNumbers = arr.filter(n => {
        return n % 2 !== 0 && typeof n === "number"
    })
    return oddNumbers.sort((a,b) => a - b)
}

// Test Passed


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.


// PseudoCode
// Create a function naming it sumOfArray
// The parameter to be passed in is an array so we can use arr as our placeholder
// Create a variable and set it to 0 as our starting point. 
// Use .map to iterate over the passed in array and return an array of the same length
// The return will be the starting value of that iteration added with the next element of the passed in array.


// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

describe("sumOfArray", () => {
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
//      Excpected output: [2, 6, 51, 60]
        const numbersToAdd2 = [0, 7, -8, 12]
//      Expected output: [0, 7, -1, 11]
        const numbersToAdd3 = []
//      Expected output: []
        expect(sumOfArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sumOfArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(sumOfArray(numbersToAdd3)).toEqual([])
    })
})

// Good Failure
// ReferenceError: sumOfArray is not defined

// b) Create the function that makes the test pass.

const sumOfArray = (arr) => {
    let arrAccumulate = 0
    return arr.map(n => {
        return arrAccumulate += n
    })
}

// Test passed
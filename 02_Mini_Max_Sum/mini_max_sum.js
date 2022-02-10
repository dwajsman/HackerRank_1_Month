'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    // reorder items in array
    
    //create Min sum (sum 'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    // reorder items in array
    const sorterdArray = arr.sort(function(a, b) {
        return a - b;
    });
    //initialize variables
    let minSum = 0;
    let maxSum = 0;
    
    //create Min sum (sum first 4 items)
    for (let index = 0; index < (sorterdArray.length-1); index++) {
        const element = sorterdArray[index];
        minSum += element;
    }
    
    //create Max sum (sum 4 last items)
        for (let index = 1; index < sorterdArray.length; index++) {
        const element = sorterdArray[index];
        maxSum += element;
    }
    
    //log result (min max)
    console.log(minSum +" "+ maxSum);
    
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
first 4 items)
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        
    }
    //create Max sum (sum 4 last items)
    
    

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

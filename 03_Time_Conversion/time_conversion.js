'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    // console.log("s: ",s)
    // console.log("AM/PM: ", s.substr(s.length - 2))
    // console.log("hour: ", s.substr(0,2))
    // console.log(":minute:seconds ", s.substr(2,6))
    
    const minuteSeconds = s.substr(2,6)
    const ampm = s.substr(s.length - 2)
    let hour = Number(s.substr(0,2))
    
    if (ampm === "AM"){
        if (hour === 12){
             return ( "00" + minuteSeconds) 
        } else {
            if (hour < 10) {return ("0" + hour + minuteSeconds) }
            return (hour + minuteSeconds) 
        }    
    } else {
        if (hour === 12){
            return ( hour + minuteSeconds) 
        } else {
            return (String(hour+12) + minuteSeconds) 
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

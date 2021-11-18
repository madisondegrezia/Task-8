// function that takes the input string and reverses it
function reverseThisString(string) {
    var splitPhrase = string.split('');
    var reverse = splitPhrase.reverse();
    return reverse.join('');
}
console.log(reverseThisString('Hello'));

// function that takes the input string and switches all uppercase characters to 
// lowercase and lowercase charcaters to uppercase
function swapCase(string) {
    var newLetters = "";
    for (const value of string) {
        if (value == value.toLowerCase()) {
            newLetters += value.toUpperCase();
        } else {
            newLetters += value.toLowerCase();
        }
    }
    return newLetters;
}
console.log(swapCase("Hello World"));

// funtion to convert array of numbers from farenheit to celcius
function toCelsius(array) {
    return array.map(function (temperature) {
        return (temperature - 32) * 5 / 9
    });
}
console.log(toCelsius([23, 32, 41, 50, 59]));

// function that takes an input array and returns an array 
// of booleans (>=75) or fail (<75)
function passOrFail(array) {
    return array.map(score => score >= 75);
}
console.log(passOrFail([20, 30, 50, 80, 90, 100]));

// code that loops through the two variables returns an array 
// ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
function germanNumbers() {
    const cardinalNumbers = [2, 3, 4, 5, 6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];

    var newArray = new Array();

    cardinalNumbers.forEach((num, i) => {
        const german = germanNumbers[i];
        newArray.push(num + ' is ' + german);
    });

    return newArray;
}
console.log(germanNumbers());

// code that returns an array of ONLY prime numbers that are in the array numbers
function returnPrimeNumbers(){

    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    return numbers.filter(num => {
        if (num <= 1) return false;
        let isPrime = true;
        for(let i = 2; i < num; i++){
            if(num % i === 0) isPrime = false;
        }
        return isPrime;
    });
        
}
console.log(returnPrimeNumbers());
  
// function that loops through and console.log's the numbers from 1 to 100, except 
// multiples of three, log (without quotes) "CSC225 RULES" instead of the number, 
// for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers 
// which are multiples of both three and five, log (without quotes) "CSC225 RULES I 
// LOVE JAVASCRIPT" Console log out:

function printMultiples() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("CSC225 RULES I LOVE JAVASCRIPT");
        } else if (i % 3 === 0) {
            console.log("CSC225 RULES");
        } else if (i % 5 === 0) {
            console.log("I LOVE JAVASCRIPT");
        } else {
            console.log(i);
        }
    }
}

printMultiples();


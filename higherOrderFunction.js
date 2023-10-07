function powerOfTwoForLoop(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.pow(2, arr[i]));
    }
    return result;
}

// Example usage:
let inputArray1 = [1, 2, 3];
let outputForLoop = powerOfTwoForLoop(inputArray1);
console.log(outputForLoop);  // Output: [2, 4, 8]



function powerOfTwoForEach(arr) {
    let result = [];
    arr.forEach(function(num) {
        result.push(Math.pow(2, num));
    });
    return result;
}

// Example usage:
let inputArray2 = [1, 2, 3];
let outputForEach = powerOfTwoForEach(inputArray2);
console.log(outputForEach);  // Output: [2, 4, 8]


function powerOfTwoMap(arr) {
    return arr.map(function(num) {
        return Math.pow(2, num);
    });
}

// Example usage:
let inputArray3 = [1, 2, 3];
let outputMap = powerOfTwoMap(inputArray3);
console.log(outputMap);  // Output: [2, 4, 8]




function classifyNumbers(arr) {
    return arr.map(function(element) {
        if (typeof element === 'number' && !isNaN(element)) {
            return element % 2 === 0 ? 'even' : 'odd';
        } else {
            return 'N/A';
        }
    });
}

// Example usage:
let inputArray4 = [1, 2, 3, "Rawan"];
let outputArray = classifyNumbers(inputArray4);
console.log(outputArray);  // Output: ['odd', 'even', 'odd', 'N/A']



function fizzbuzz(numbers) {
    return numbers.map(function(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            return "Fizz Buzz";
        } else if (number % 3 === 0) {
            return "Fizz";
        } else if (number % 5 === 0) {
            return "Buzz";
        } else {
            return number;
        }
    });
}

// Example usage:
let numbers = [1, 2, 3, 4, 5, 15];
let output = fizzbuzz(numbers);
console.log(output);
// Output: [1, 2, "Fizz", 4, "Buzz", "Fizz Buzz"]

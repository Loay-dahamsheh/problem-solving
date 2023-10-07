var userInput = prompt("Please enter an integer:");
var number = parseInt(userInput);
var sum = 0;

// Check if the input is a valid integer
if (!isNaN(number) && Number.isInteger(number) && number >= 0) {
    for (var i = 0; i <= number; i++) {
        sum += i; // Add the current number to the sum
    }
    alert("The sum of integers from 0 to " + number + " is: " + sum);
} else {
    alert("Error: Please enter a valid.");
}

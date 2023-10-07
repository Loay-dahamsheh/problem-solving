var userInput = prompt("Please enter an integer:");
var number = parseInt(userInput);
var sum = 0;

// Check if the input is a valid integer
if (!isNaN(number) && Number.isInteger(number) && number >= 0) {
    // Calculate the sum of integers from 0 to the entered number
    for (var i = 0; i <= number; i++) {
        sum += i; // Add the current number to the sum
    }
    // Calculate the average
    var average = sum / (number + 1);
    alert("The average of integers from 0 to " + number + " is: " + average);
} else {
    alert("Error: Please enter a valid non-negative integer.");
}

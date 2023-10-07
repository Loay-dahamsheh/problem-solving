var number;

do {
    number = prompt("Please enter a number between 0 and 100:"); 

    
    if (parseInt(number) >= 0 && parseInt(number) <= 100) {
        alert("You entered a valid number: " + number); 
        break; 
    } else {
        alert("Error: Please enter a number between 0 and 100."); 
    }
} while (true);

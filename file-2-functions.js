// Ex1 
//(1)
function compareAndReturnBigger(a, b) {
  return(a>b)? a : b
  
}

//(2)
function addOneIfEqual(a, b) {
    return(a===b) ? a+1 : a

}

//(3)

function findSmallerValue(a, b, c, d) {
    const minValue = Math.min(a, b, c, d);
    return (a >= 1 && a <= 5) || (b >= 1 && b <= 5) || (c >= 1 && c <= 5) || (d >= 1 && d <= 5) ? -1 : minValue;
}

//(4)

function checkEvenOrNot(number) {
    return number % 2 === 0 ? "even" : "not even";
}

//(5)

function checkNumberEquality(a, b, c, d) {
    if (a === b && b === c && c === d) return "all equals";
    if (a === b || a === c || a === d || b === c || b === d || c === d) return "only 2 numbers are equals";
    return "all numbers not equals";
}

//(6)

function getDayOfWeek(number) {
    switch (number) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Error";
    }
}

//(7)

function getDaysInMonth(monthNumber) {
    switch (monthNumber) {
        case 1: // January
        case 3: // March
        case 5: // May
        case 7: // July
        case 8: // August
        case 10: // October
        case 12: // December
            return 31;
        case 4: // April
        case 6: // June
        case 9: // September
        case 11: // November
            return 30;
        case 2: // February
            return 28;
        default:
            return -1;
    }
}

//(8)

var globalVariable = "Hello, I'm a global variable!";

function printGlobalVariable() {
    console.log(globalVariable);
}

function updateGlobalVariable(newValue) {
    globalVariable = newValue;
}

printGlobalVariable(); // Output: "Hello, I'm a global variable!"

updateGlobalVariable("Updated global value");
printGlobalVariable(); // Output: "Updated global value"

//(9)

function calculateSum(a, b) {
    var result = a + b;
    console.log("The sum is: " + result);
}



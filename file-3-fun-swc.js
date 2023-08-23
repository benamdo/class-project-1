//Ex1

function checkEvenOdd(number) {
    switch (number % 2) {
        case 0:
            return "Even";
        case 1:
            return "Odd";
        default:
            return "Invalid input";
    }
}


//Ex2

function checkNegativePositive(number) {
    switch (Math.sign(number)) {
        case -1:
            return "Negative";
        case 1:
            return "Positive";
        case 0:
            return "Zero";
        default:
            return "Invalid input";
    }
}



//Ex3

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
            return "Please enter another number";
    }
}

//Ex4

function getMonth(number) {
    switch (number) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "Please enter another number";
    }
}

//Ex5

function checkVowelOrConsonant(letter) {
    switch (letter.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'y':
            return "Vowel";
        default:
            return "Consonant";
    }
}


//EX6

function getGrade(score) {
    switch (true) {
        case (score >= 0 && score <= 20):
            return "D";
        case (score >= 21 && score <= 55):
            return "C";
        case (score >= 56 && score <= 70):
            return "B";
        case (score >= 71 && score <= 90):
            return "A";
        case (score >= 91 && score <= 100):
            return "A+";
        default:
            return "Invalid input";
    }
}


//EX7

function performOperation(a, b, operation) {
    switch (operation) {
        case 1: // Addition
            return a + b;
        case 2: // Subtraction
            return a - b;
        case 3: // Division
            return a / b;
        case 4: // Multiplication
            return a * b;
        default:
            return "Invalid operation";
    }
}





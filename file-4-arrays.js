//EX1


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Days of the week:", daysOfWeek);


const sortedDays = [...daysOfWeek].sort();
console.log("Sorted days:", sortedDays);


function printArray(arr) {
    console.log("Array:", arr);
}

function sortArray(arr) {
    return [...arr].sort();
}



//EX2

function printValueByIndex(array, index) {
    array[v1,v2,v3,v4]
    if (index >= 0 && index < array.length) {
        console.log("Value at index", index, ":", array[index]);
    } else {
        console.log(`Sorry, no value in the array for index number: ${index}`);
    }
}



//EX3

function checkIfAllOdd(array) {
    for (const value of array) {
        if (value % 2 === 0) {
            return "not odds";
        }
    }
    return "odds";
}


//EX4

function addFiveIfIndexSmallerThanTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (i < 10) {
            array[i] += 5;
        }
    }
    console.log(array);
}



//EX5

function findNumberInArray(array, number) {
    if (array.includes(number)) {
        return "found";
    } else {
        return "not found";
    }
}



//EX6

function checkFirstLastEquality(array, firstValue, lastValue) {
    if (array.length > 0 && array[0] === firstValue && array[array.length - 1] === lastValue) {
        return true;
    } else {
        return false;
    }
}



//EX7

function checkValueRange(array) {
    let allSmallerThan50 = true;
    let allBetween51to100 = true;
    let allBetween101to200 = true;
    let allGreaterthan200 = true;

    for (const value of array) {
        if (value >= 50) {
            allSmallerThan50 = false;
        }
        if (value < 51 || value > 100) {
            allBetween51to100 = false;
        }
        if (value < 101 || value > 200) {
            allBetween101to200 = false;
        }
        if (value <= 200) {
            allGreaterthan200 = false;
        }
    }

    if (allSmallerThan50) {
        return "smaller than 50";
    } else if (allBetween51to100) {
        return "between 51 to 100";
    } else if (allBetween101to200) {
        return "between 101 to 200";
    } else if (allGreaterthan200) {
        return "greater than 200";
    } else {
        return "No condition is happening";
    }
}


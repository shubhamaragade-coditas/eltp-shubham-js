// If user is 18 or older , give feedback: 'You are allowed to Marry' but if not 18 console feedback stating to wait for the number of years he needs to turn 18.
const age = 18
if (age >= 18)
    console.log('You are allowed to Marry')
else
    console.log(`Wait for ${18 - age} years`)

// 2. Compare the values of myAge and yourAge. Based on the comparison and log the result to console stating who is older.
// Enter your age: 30
// You are 5 years older than me.
const yourAge = 30
const myAge = 25
if (myAge > yourAge)
    console.log("I am older than you.");
else
    if (myAge > yourAge)
        console.log("You are older than me");
    else
        console.log('We both are of same age');


// 3. If myAge is greater than yourAge return 'yourAge is greater than myAge ' else 'myAge is less than yourAge'. Try to implement it in to ways.

// WAY 1
if (myAge > yourAge)
    return ("I am older than you.")
return "You are older than me"

// WAY 2
myAge > yourAge ? console.log("yourAge is greater than myAge") : console.log("myAge is less than yourAge");


// 4. Check, if a number is even or not.
const todaysDate = 26;
(todaysDate % 2 === 0) ? console.log("Date is even") : console.log("Date is odd")

// 5. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

if (score >= 80 && score <= 100) {
    console.log('A');
} else if (score >= 70) {
    console.log('B');
} else if (score >= 60) {
    console.log('C');
} else if (score >= 50) {
    console.log('D');
} else if (score >= 0) {
    console.log('F');
} else {
    console.log('Invalid score');
}

// 6. Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Rainy.
// December, January or February, the season is Winter.
// March, the season is Spring
//  April, May, June, July or August, the season is Summer
switch (month) {
    case 'September':
    case 'October':
    case 'November':
        console.log('Rainy');
        break;
    case 'December':
    case 'January':
    case 'February':
        console.log('Winter');
        break;
    case 'March':
        console.log('Spring');
        break;
    case 'April':
    case 'May':
    case 'June':
    case 'July':
    case 'August':
        console.log('Summer');
        break;
    default:
        console.log('Invalid input');
}

// 7. Check if a day is weekend day or a working day. Your script will take day as an input.
switch (day.toLowerCase()) {
    case 'monday':
    case 'tuesday':
    case 'wednessday':
    case 'thursday':
    case 'triday': console.log("Working day");
                   break;
    case 'saturday':
    case 's.unday': console.log("Weekend");
                    break;
    default: console.log("Invalid Day");
}


// 8. Write a program which tells the number of days in a month.
if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    console.log("No of days are 31");
}
else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("No of days are 30");
}
else if (month === 2) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log("No of days are 29")
    } else {
        console.log("No of days are 28")
    }
}
else {
    console.log("Invalid month")
}
// 9. Write a program to check whether the year is leap year or not.
(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? console.console.log("It's a leap year") : console.console.log("It's not a leap year")

// 10. Write a JavaScript ternary expression that checks the following conditions:
// If the first condition (condition1) is true, it should check the second condition (condition2). If condition2 is true, set the result to 'A', otherwise set it to 'B'.
// If the first condition (condition1) is false, it should check another condition (condition3). If condition3 is true, set the result to 'C', otherwise set it to 'D'.
condition1 ? condition2 ? result = 'A' : result = 'B' : condition3 ? result = 'C' : result = 'D';

// 11. What will be the result of the following nested ternary expression:
// let result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E';
// console.log(result);
'D'
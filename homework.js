/*
Exercise 1.
Create two variables called width and height .
Each of those variables should hold some number.
Then, create a new variable that holds the area of a rectangle, calculated based on the width and height variables.
Print it to the console.
 */
console.log("--- Exercise 1 ---");
const rectangleWidth = 10;
const rectangleHeight = 11;

const rectangleArea = rectangleWidth * rectangleHeight;
console.log('rectangleArea:', rectangleArea);

/*
Exercise 2.
Create two variables called firstNumber and secondNumber.
Assign each of them with a different number.
Write a program that swaps both values.
 */
console.log("--- Exercise 2 ---");
let firstNumber = 10;
let secondNumber = 11;
const temporaryNumber = firstNumber;

firstNumber = secondNumber;
secondNumber = temporaryNumber;

/*
Exercise 3.
Create variables that hold grades from three different classes:
Physics
Math
English
Calculate the average of the grades.
If the average equals 4 out of 5 or higher, print "Good job!".
Otherwise, print "Try harder!"
 */
console.log("--- Exercise 3 ---");
const physicsGrade = 3;
const mathGrade = 4;
const englishGrade = 4;

const gradeAverage = (physicsGrade * mathGrade + englishGrade) / 3;
if (gradeAverage >= 4 && gradeAverage <= 6) {
    console.log('Good job!')
} else if (gradeAverage < 4 && gradeAverage >= 1) {
    console.log('Try harder!')
} else {
    console.log('Wrong grades!')
}

/*
Exercise 4.
Fix the code.
 */
console.log("--- Exercise 4 ---");
const currentAge = 30;
const retirenmentAgeInPoland = 67;
let yearsLeftToRetirenment = retirenmentAgeInPoland;

yearsLeftToRetirenment = retirenmentAgeInPoland - currentAge;

console.log(yearsLeftToRetirenment);

/*
Exercise 5.
Fix the code (2 mistakes).
COMMENT: 4? VATRateInPoland - variable name and type (wasn't const), taxToPay type (was const), monthlyIncome type (wasn't const)
 */
console.log("--- Exercise 5 ---");
const isPayingVAT = true;
const vatRateInPoland = 0.23;
const incomeTaxRate = 0.12;
const monthlyIncome = 3500;
let taxToPay = 0;

if (isPayingVAT) {
    taxToPay = monthlyIncome * vatRateInPoland;
}

taxToPay = taxToPay + monthlyIncome * incomeTaxRate;

console.log('tax to pay: ' + taxToPay);

/*
Exercise 6.
Declare a variable called isSunny and assign a boolean value to it.
Create an if-else statement that checks if it's sunny.
If it is, print "Don't forget your sunglasses!".
If it's not, print "You might need an umbrella."
 */
console.log("--- Exercise 6 ---");
const isSunny = true;
if (isSunny) {
    console.log("Don't forget your sunglasses!")
} else {
    console.log("You might need an umbrella.")
}

/*
Exercise 7.
Create a variable named currentMonth and assign a number representing the current month.
Use an if statement to check the month and print a message based on the season
(e.g., "It's winter" for December, January, and February).
 */
console.log("--- Exercise 7 ---");
const currentMonth = 13;
if (currentMonth === 12 || currentMonth === 1 || currentMonth === 2) {
    console.log("It's winter");
}
else if (currentMonth >=3 && currentMonth <= 5) {
    console.log("It's spring");
}
else if (currentMonth >=6 && currentMonth <= 8) {
    console.log("It's summer");
}
else if (currentMonth >=9 && currentMonth <= 11) {
    console.log("It's autumn");
}
else {
    console.log("Provided month is wrong. Try 1-12");
}

/*
Exercise 8.
Create two variables personWeight and personHeight and assign some numbers there.
Calculate the BMI (and store it in well-named variable) using the formula BMI = weight / (height * height) .
Print the calculated BMI.
 */
console.log("--- Exercise 8 ---");
const personWeight = 90;
const personHeightInMeters = 1.80;
const bodyMassIndex = personWeight / (personHeightInMeters * personHeightInMeters);
console.log('bodyMassIndex', bodyMassIndex);

/*
Exercise 9.
Write a program that checks if a person is eligible to vote.
Declare a variable called age and assign it a numeric value.
Use an if-else statement to determine if the person can vote (age >= 18) and print (using console.log() ) the result:
a) a citizen can vote  if the age is at least 18
b) a citizen can't vote if the age is less than 18
 */
console.log("--- Exercise 9 ---");
const personAge = 17;
let citizenCanVote = false;
if (personAge >= 18) {
    citizenCanVote = true;
    console.log("Citizen can vote");
} else {
    citizenCanVote = false;
    console.log("Citizen can't vote")
}

/*
Exercise 10.
Write a code that simulates a traffic light.
Declare a variable called currentColor with values "red", "yellow", or "green".
Use an if statement to print a message based on the current color
(e.g., "Stop" for red, "Speed up" for yellow, "Go" for green).
 */
console.log("--- Exercise 10 ---");
const currentColor = 'black';
if (currentColor === 'green'){
    console.log("Go")
} else if (currentColor === 'yellow') {
    console.log("Speed up")
} else if (currentColor === 'red') {
    console.log("Stop")
}
else {
    console.log("wrong color")
}

/*
Exercise 11.
Declare a variable called month with the number of the month.
Use an if statement to print the month's name.
 */
console.log("--- Exercise 11 ---");
const monthNumber = 0;
if (monthNumber === 1){
    console.log("January")
} else if (monthNumber === 2) {
    console.log("February")
} else if (monthNumber === 3) {
    console.log("March")
} else if (monthNumber === 4) {
    console.log("April")
} else if (monthNumber === 5) {
    console.log("May")
} else if (monthNumber === 6) {
    console.log("June")
} else if (monthNumber === 7) {
    console.log("July")
} else if (monthNumber === 8) {
    console.log("August")
} else if (monthNumber === 9) {
    console.log("September")
} else if (monthNumber === 10) {
    console.log("October")
} else if (monthNumber === 11) {
    console.log("November")
} else if (monthNumber === 12) {
    console.log("December")
} else {
    console.log("wrong month number")
}

/*
Exercise 12.
Declare a variable and assign a number to it.
Print "Divisible by 3" if the variable is divisible by 3.
Print "Divisible by 5" if the variable is divisible by 5.
Print "Divisible by 3 and 5" if the variable is divisible both by 3 and by 5.
 */
console.log("--- Exercise 12 ---");
const numberToDivide = 1;
if (numberToDivide !== 0) {
    if (numberToDivide % 3 === 0 && numberToDivide % 5 === 0) {
        console.log("Divisible by 3 and 5")
    } else if (numberToDivide % 5 === 0 && numberToDivide % 3 !== 0) {
        console.log("Divisible by 5")
    } else if (numberToDivide % 3 === 0 && numberToDivide % 5 !== 0) {
        console.log("Divisible by 3")
    } else {
        console.log("Not divisible by 3 or 5")
    }
} else {
    console.log("You cannot divide by 0")
}

/*
Exercise 13.
Create a variable named radius and assign a number to it.
Create a variable named circleArea that stores the area of the circle using the formula area = π * radius^2.
Use MDN to find out how to use the PI number in JS.
 */
console.log("--- Exercise 13 ---");
const radius = 0;
const circleArea = Math.PI * (radius * radius);
console.log('circleArea:', circleArea);

/*
Exercise 14.
Create a variable studentScore  and assign a number representing a student's score (0-100).
Use an if-else statement to determine the grade (A, B, C, D, F) based on the score and print the grade.
For instance, a score greater than or equal to 90 could be an 'A', 80-89 could be a 'B', and so on.
 */
console.log("--- Exercise 14 ---");
const studentScore = 1;
let studentGrade;
if (studentScore < 0 || studentScore > 100) {
    console.log("Wrong student score. Provide value from range 0-100");
} else if (studentScore < 30) {
    studentGrade = 'F';
} else if (studentScore < 45) {
    studentGrade = 'E';
} else if (studentScore < 60) {
    studentGrade = 'D';
} else if (studentScore < 75) {
    studentGrade = 'C';
} else if (studentScore < 90) {
    studentGrade = 'B';
} else if (studentScore > 90) {
    studentGrade = 'A';
}
console.log("Student grade: ", studentGrade);

/*
Exercise 15.
Declare a variable representing a car's speed and assign a number to it.
Declare another variable representing a speed limit and assign a number to it.
Use an if-else statement to print "Speed is fine" if the car's speed is less than or equal to the speed limit,
or "Speeding!" if it's over the limit.
 */
console.log("--- Exercise 15 ---");
const carSpeed = 111;
const speedLimit = 101;
if (carSpeed > speedLimit) {
    console.log("Speeding!")
} else if (carSpeed < speedLimit) {
    console.log("Speed is fine.")
} else if (carSpeed === speedLimit) {
    console.log("Same car speed as limit")
}

/*
Exercise 16.
Delete the else statement and adjust the code to make sure that the output is the same as before.
a) remember that you can give a default value to a variable when declaring it
 */
console.log("--- Exercise 16 ---");
const age = 21;
let isAdult = false;

if (age >= 18) {
    isAdult = true;
}
alert(isAdult)

/*
Exercise 17.
Extend the code so it prints if the user can drive or not.
To determine it, you need to check if the user is an adult and has a driving license.
- Assign true to the isAdult variable if the user has at least 18 years and false  if the opposite.
- Assign true  to canDriveLegally if the user can drive legally or false if not.
- Make sure to print (alert() or console.log() ) the value of the canDriveLegally variable in human-readable form.
 */
console.log("--- Exercise 17 ---");
const ageOfPerson = 21;
const hasDrivingLicense = true;
let isAnAdult, canDriveLegally, drivingLegalCheckInformation, ageVerificationInformation;

if (ageOfPerson >= 18) {
    isAnAdult = true;
    ageVerificationInformation = "OK - an adult &"
}
else if (ageOfPerson < 18) {
    isAnAdult = false;
    ageVerificationInformation = "ILLEGAL - not adult &"
}

if (hasDrivingLicense === true) {
    canDriveLegally = true;
    drivingLegalCheckInformation = " OK - has driving licence."
} else {
    canDriveLegally = false;
    drivingLegalCheckInformation = " ILLEGAL - doesn't have driving licence."
}

if (isAnAdult === true && hasDrivingLicense === true) {
    console.log("EVERYTHING IS OK: " + ageVerificationInformation + drivingLegalCheckInformation)
} else if (isAnAdult === true && hasDrivingLicense === false) {
    alert("STOP RIGHT THERE!! " + ageVerificationInformation + drivingLegalCheckInformation)
} else if (isAnAdult === false && hasDrivingLicense === true) {
    alert("STOP RIGHT THERE!! " + ageVerificationInformation + drivingLegalCheckInformation)
} else if (isAnAdult === false && hasDrivingLicense === false) {
    alert("STOP RIGHT THERE!! " + ageVerificationInformation + drivingLegalCheckInformation)
}

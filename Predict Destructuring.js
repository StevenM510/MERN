// Problem 1 //
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // Print the car 'Tesla'  //
console.log(otherRandomCar) // , will skip the first car then Print 'Mercedes' //


// Problem 2 //
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; // redirects the value of name to held in otherName //
//Predict the output
console.log(name); // Error will say name is not defined //
console.log(otherName); // Print string "Elon"


// Problem 3 //
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;// Password is not in the person object will give undefined //
//Predict the output
console.log(password); // Print '12345' //
console.log(hashedPassword); // Print Undefined //


// Problem 4 //
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;// will skip the first comma //
const [,,,second] = numbers;// will skip the first three commas //
const [,,,,,,,,third] = numbers;// will skip the first eight commas //
//Predict the output
console.log(first == second);// Thought it would print error but Prints false //
console.log(first == third);// Thought it would Print 2 == 2 but Prints True //


// Problem 5 //
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;// will skip the first comma in arry //
//Predict the output
console.log(key);// Print the string "value"
console.log(secondKey);// Print arry [1,5,1,8,3,3] //
console.log(secondKey[0]);// Print the [0] of the arry [1,5,1,8,3,3] which is 1 //
console.log(willThisWork);// Print 5 


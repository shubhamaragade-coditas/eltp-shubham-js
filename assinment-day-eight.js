// Declare an empty array;
const humansWithWins = []

// Declare an array with more than 5 number of elements
const naturalNumber  = [1,2,3,4,5,6]
// Find the length of your array
console.log(naturalNumber.length)

// Get the first item, the middle item and the last item of the array
console.log(`First item of the array is ${naturalNumber[0]}`);
if(naturalNumber.length%2)
    console.log(naturalNumber[Math.floor(naturalNumber.length/2)])
else
    console.log(naturalNumber[(naturalNumber.length)/2], naturalNumber[(naturalNumber.length-2)/2])

console.log(`Last item of the array is ${naturalNumber[naturalNumber.length-1]}`);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1,'Goa', 2.9, true, -672, [2,3,4], null]
console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Coditas','Google','Microsoft','Apple','IBM','Oracle','Amazon','Jio']

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(`Number of companies ${itCompanies.length}`)

// Print the first company, middle and last company
console.log(`First company is ${itCompanies[0]}`);
if(itCompanies.length%2)
    console.log(itCompanies[Math.floor(itCompanies.length/2)])
else
    console.log(itCompanies[(itCompanies.length)/2], itCompanies[(itCompanies.length-2)/2])

console.log(`Last company is ${itCompanies[itCompanies.length-1]}`);


// Print out each company
console.log(itCompanies.toString())

// Change each company name to uppercase one by one and print them out
for(companies of itCompanies)
    console.log(companies.toUpperCase())

// Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString())

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if(itCompanies.includes('Jio'))
    return 'Jio'    
return 'company is not found'

// Filter out companies which have more than one 'o' without the filter method
let filteredCompanies = [];

for (let word = 0; word < companies.length; word++) {
  let count = 0;
  for (let character = 0; character < companies[word].length; character++) {
    if (companies[word][character].toLowerCase() === 'o') {
      count++;
    }
  }
  if (count > 1) {
    filteredCompanies.push(companies[i]);
  }
}

console.log("Filtered companies:", filteredCompanies);

// Sort the array using sort() method
console.log(itCompanies.sort())
// Sort the array by country name length without sort;
// Reverse the array using reverse() method
console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length))
console.log(itCompanies.reverse().slice(0,3))

// Slice out the middle IT company or companies from the array
if(itCompanies.length%2)
    console.log(itCompanies[Math.floor(itCompanies.length/2)])
else
    console.log(itCompanies[(itCompanies.length)/2], itCompanies[(itCompanies.length-2)/2])

// Remove the first IT company from the array
console.log(itCompanies.shift())

// Remove the middle IT company or companies from the array
if(itCompanies.length%2)
    itCompanies.splice(Math.floor(itCompanies.length/2),1)
else
    itCompanies.splice((itCompanies.length-2)/2)

// Remove the last IT company from the array
console.log(itCompanies.pop())

// Remove all IT companies
console.log(itCompanies.splice(0,itCompanies.length))

// 24. First remove all the punctuations and change the string to array and count the number of words in the array, dont use regex
// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango'
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango';
const punctuations = ['.', ',', ';', ':', '!', '?'];

for (let iterator = 0; iterator < punctuations.length; iterator++) {
  text = text.split(punctuations[iterator]).join('');
}

const wordsFromText = text.split(' ');
const wordCount = wordsFromText.length;

// 25. In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
// add Gulabjamun at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(!shoppingCart.includes('Rasmalai'))
    shoppingCart.unshift('Rasmalai');

if(!shoppingCart.includes('Gulabjamun'))
    shoppingCart.push('Gulabjamun');

if(isAllergicOfHoney())
    shoppingCart.splice(shoppingCart.indexOf('Honey'),1)

shoppingCart.splice(shoppingCart.indexOf('Tea'),1,'Green Tea')

// 26. In countries array check if 'India' exists in the array if it exists print 'INDIA'. If it does not exist add to the countries list.
if(countries.includes('India'))
    console.log('India'.toUpperCase())
else
    console.log(countries.unshift('India'))


// 27. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(webTechs.includes('Saas'))
    console.log('Sass is a CSS preprocess')
else
    webTechs.push('SaaS')
console.log(webTechs)

// 28. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd + backEnd
console.log(fullStack)

// 29. The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

let medianAge;
if (ages.length % 2) {
  medianAge = ages[Math.floor(ages.length / 2)];
} else {
  medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
}

const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

const range = maxAge - minAge;

const diffMinAvg = Math.abs(minAge - averageAge);
const diffMaxAvg = Math.abs(maxAge - averageAge);

// 30. Find the middle countries in the countries array.
if(countries.length%2)
    console.log(countries[Math.floor(countries.length/2)])
else
    console.log(countries[(countries.length)/2], countries[(countries.length-2)/2])

// 31. Divide the countries array into two equal arrays if it is even. If countries array is not even , add one more country for the first half
// ARRAYS:
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'India',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'India',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  
  let firstHalf;
  let secondHalf;
  
  if (!countries.length % 2) {
    firstHalf = countries.slice(0, countries.length / 2);
    secondHalf = countries.slice(countries.length / 2);
  } else {
    firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
    secondHalf = countries.slice(Math.ceil(countries.length / 2));
  }
  
  console.log("First half of countries:", firstHalf);
  console.log("Second half of countries:", secondHalf);
  



// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
//]
// Declare a variable and assign a value 'Easy JavaScript Assignments'.
const title = 'Easy JavaScript Assignments';

// Print the length of the string.
console.log(title.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(title.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(title.toLowerCase());

// Slice out the first word of the string using substr() and substring() method
console.log(title.substr(0,4)); 
console.log(title.substring(0,4));

// Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'..
console.log(title.substring(5));

// Check if the string contains a word Script using includes() method
console.log(title.includes('Script'));

// Split the string into an array using split() method
console.log(title.split())

// Split the string 'Easy JavaScript Assignments' at the space using split() method
console.log(title.split(" "))

// 'ELTP, BATCH, THREE' split the string at the comma and change it to an array.
console.log('ELTP, BATCH, THREE'.split(','));

// Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.
console.log('Easy JavaScript Assignments'.replace('JavaScript','Python'));

// What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
console.log(title.charAt(20)); // 'g'

// What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
console.log(title.charCodeAt(0));

// Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
console.log(title.indexOf('a'));

// Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log(title.lastIndexOf('a'));

// Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log('Easy JavaScript Assignments, Easy Easy'.indexOf('Easy'));

// Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log('Easy JavaScript Assignments, Easy Easy'.lastIndexOf('Easy'));

// Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
console.log('Easy JavaScript Assignments, Easy Easy'.search('Easy'));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy             '
console.log('       Easy JavaScript Assignments, Easy Easy             '.trim());

// Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(title.startsWith("Easy"));

// Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(title.endsWith('ments'));

// Use match() method to find all the a’s in 'Easy JavaScript Assignments'
console.log(title.match(/a/g))

// Use concat() and merge 'Easy' and 'JavaScript' to a single string.
console.log('Easy'.concat(' ','Javascript'));

// Use repeat() method to print 'Easy JavaScript' 3 times.
console.log('Easy Javascript'.repeat(3));

// 'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
let sentence1='Javascript is Easy, too Easy, too Easy, Easy to learn';
sentence1 = sentence1.replaceAll(',','');
const array = sentence1.split(" ");
const arrayLength=array.length;
let count=0;
for(let index=0;index<arrayLength;index++){
    if(array[index]==='Easy'){
        count+=1;
    }
}
console.log(count);
// Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn'
console.log('Javascript is Easy, too Easy, too Easy, Easy to learn'.match(/Easy/g).length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %softwa@r%e %e@ngineer, &and& %java@sc@ript% is Ea%s#y';
console.log(sentence.replace(/[^\w\s]/gi,""))

// 28. Calculate the total annual income of the person by extracting the numbers from the following text. 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'
const incomeString = 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading';
const income = incomeString.match(/\d+(\.\d+)?/g)
console.log((parseInt(income[0])*12)+parseInt(income[1])+parseInt(income[2])+parseInt(income[3]));
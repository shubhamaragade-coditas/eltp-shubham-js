// Check if type of '70' is equal to 70
console.log(typeof 70 === typeof '70') // false

// Check if parseInt('8.8') is equal to 9
console.log(parseInt('8.9')===9) // false

// Boolean value is either true or false.
// Write five JavaScript statement which provide falsy value.
const raining = false
const bill = 0
const disease = null
const wife = undefined
const infinity = NaN

// Write five JavaScript statement which provide truthy  value.
const result = true
const age = 22
const name = 'Shubham'
const salary = 29836.46
const skills = ['Python', 'Sql']
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 5 > 4 -> true
// 4 >= 3 -> true
// 4 < 3 -> false
// 4 <= 3 -> false
// 5 == 5 -> true
// 9 === 9 -> true
// 9 == '9' -> true
// 8 === '8' -> false
// 4 != 4 -> false
// 4 !== 4 -> false
// 4 != '4' -> false
// 4 != '4' -> false
// 4 !== '4' -> true
// Find the length of python and jargon and make a falsy comparison statement.
console.log('Python'.length != 'Jargon'.length)

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// 4 > 3 && 10 < 12 -> true
// 4 > 3 && 10 > 12 -> false
// 4 > 3 || 10 < 12 -> true
// 4 > 3 || 10 > 12 -> true
// !(4 > 3) -> false
// !(4 < 3) -> true
// !(false) ->true 
// !(4 > 3 && 10 < 12) -> false
// !(4 > 3 && 10 > 12) -> true 
// !(4 === '4') -> true

// There is no 'on' in both dragon and python
console.log(!(('dragon'.includes('on')) && ('python'.includes('on'))))
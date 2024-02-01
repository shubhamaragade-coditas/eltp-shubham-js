// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
const number10 = 10;
const number10InStringFormat = '10'
console.log(typeof number10); // number
console.log(typeof number10InStringFormat);// string
console.log(typeof number10 === typeof number10InStringFormat) // false

const newNumber = Number(number10InStringFormat);
console.log(typeof number10 === typeof newNumber) // true

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat(9.8)===10) // false
console.log(Math.round(9.8)===10) // true

// Generate a random number between 0 and 100 inclusively.
const randomNumberBetween0and100 = Math.floor(Math.random()*101)


// Generate a random number between 50 and 100 inclusively.
const randomNumberBetween0and50 = Math.floor(Math.random()*51+50)

   
// 5. Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
function printPattern()
{
    for(let row=1; row<=5; row++)
    {
        console.log(row+'\t'+row**0+'\t'+row**1+'\t'+row**2+'\t'+row**3)
    }
}

printPattern();

// 6. Enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

function areaOfTriangle(triangleBreadth, triangleHeight){
    return (0.5*triangleBreadth*triangleHeight);
}


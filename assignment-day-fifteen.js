
// Map
// Map


const myMap = (numbers, square) =>{
    const result = [];
    for(const number of numbers)
        result.push(square(number));

        return result;
}



console.log(myMap([2,4,5,22,34,99], (number) =>number**2));



// Reduce

const myReduce = (numbers, sum) => {
    let result = 0;
    for(const number of numbers)
        result = sum(result,number)

    return result
}


console.log(myReduce([2,4,5,22,34,99], (number1,number2) => number1+number2))



// Filter


const myFilter = (numbers, oddNumber) =>{
    let result = [];

    for(const number of numbers)
        if(oddNumber(number))
            result.push(number)

    return result
}


console.log(myFilter([2,4,5,22,34,99], (number) => number%2))
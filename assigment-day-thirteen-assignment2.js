

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const [fin, est, sw, den, nor] = countries

// Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const { width, height, area, perimeter } = rectangle

// Iterate through the users array and get all the keys of the object using destructuring
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

for (const user of users) {
    const { name, score, skills, age } = user
    console.log(name, scores, skills, age)
}

// Find the persons who have less than two skills
for (const user of users) {
    if (user.skills.length < 2)
        console.log(`${user.name} has less than two skills`)
}
// Destructure the countries array print name, capital, population and languages of all countries
for (const count of countries) {
    const { name, capital, population, languages } = country;
    console.log('Name:', name);
    console.log('Capital:', capital);
    console.log('Population:', population);
    console.log('Languages:', languages);
}
// 7. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, scores] = student;
const [, , jsScore, reactScore] = scores
console.log(name, skills, jsScore, reactScore)

// 8. Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTML', 'CSS', 'JS', 'Node'], [98, 85, 90, 95]],
    ['John', ['HTML', 'CSS', 'JS', 'Node'], [85, 80, 85, 80]]
]

function convertArrayToObject(students) {
    return students.map(([name, skills, scores]) => ({ name, skills, scores }));
}


console.log(convertArrayToObject(students))
//     [
//       {
//         name: 'David',
//         skills: ['HTML','CSS','JS','Node'],
//         scores: [98,85,90,95]
//       },
//       {
//         name: 'John',
//         skills: ['HTML','CSS','JS','Node'],
//         scores: [85, 80,85,80]
//       }
//     ]
// 9. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

  const newStudent = JSON.parse(JSON.stringify(student));

// Add Bootstrap with level 8 to the front end skill sets
newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });

// Add Express with level 9 to the back end skill sets
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });

// Add SQL with level 8 to the data base skill sets
newStudent.skills.backEnd.push({ skill: 'SQL', level: 8 });

// Add SQL without level to the data science skill sets
newStudent.skills.backEnd.push('SQL');
  
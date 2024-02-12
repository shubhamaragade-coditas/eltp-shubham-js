// Create an empty object called cow
const cow = {}

// Print the the cow object on the console
console.log(cow)

// Add name, legs, color, age and sound properties for the cow object. The sound property is a method which return "maaah maaah"
cow.name = 'hema';
cow.color = 'white';
cow.age = 14;
cow.sound = function () {
    return 'maaah maaah';
};

// Get name, legs, color, age and sound value from the cow object
const { name, color, age, sound } = cow;

// Set new properties the cow object: breed, getCowInfo()
cow.breed = 'Indian';
cow.getCowInfo = function() {
    return `Name: ${name}, Breed: ${breed}, Color: ${color}, Age: ${age}`;
};

// Find the person who has many skills in the users object.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


for(const user in users)
{
    if(users[user].skills.length > 1)
        console.log(users[user]);
}

// Count logged in users, count users having greater than equal to 30 points from the following object.
let loggedInUsers = 0;
let usersWith30PointsOrMore = 0;

for (const user in users) {
  if (users[user].isLoggedIn) {
    loggedInUsers++;
  }
  
  if (users[user].points >= 30) {
    usersWith30PointsOrMore++;
  }
}

console.log(loggedInUsers);
console.log(usersWith30PointsOrMore);
// Find people who are MERN stack developer from the users object
for(const user in users)
{
    if(users[user].skills.includes('React','Node','Express','MongoDB'))
      console.log(users[user]);
}
// Set your name in the users object without modifying the original users object
const updatedUsers = { ...users, shubham: { email: 'shubham@shubham.com', skills: ['Python','HTML'], age: 22, isLoggedIn: false, points: 110 } };
// Get all keys or properties of users object
console.log(users.keys)

// Get all the values of users object
console.log(users.keys)

// Use the countries object to print a country name, capital, populations and languages.
const countries = {
    India : {
        capital : 'New Delhi',
        population : 22.33,
        languages : ['Hindi', 'English', 'rajasthani', 'Marathi', 'Gujrati']
    },
    Nepal : {
        capital : 'Kathmandu',
        population : 50,
        languages : ['Nepali']
    }
}

for (const [country, { capital, population, languages }] of Object.entries(countries)) {
    console.log('Country:', country);
    console.log('Capital:', capital);
    console.log('Population:', population);
    console.log('Languages:', languages.join(', '));
  }

// Create an object called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName : 'Nirav',
    lastName : 'Modi',
    incomes : {
        salary : 12000,
        freelancing : 8000,
        mutualFunds : 2500
    },
    expenses : {
        rent : 4000,
        food : 1200,
        travel : 750
    },
    totalIncome : function(){
        let total = 0;
    for (const income of personAccount[incomes]) {
      total += income.amount;
    }
    return total;
    },
    accountInfo : function(){},
    addIncome : function(){},
    addExpense : function(){},
    accountBalance : function(){}
}

// Imagine you are getting the below users array of objects.
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];
// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const user1 = {
    _id : 'kei22k',
    username : 'Ram',
    email : 'ram@ram.com',
    password : '544555',
    createdAt:'08/01/2020 10:00 AM',
    isLoggedIn: false
}
function signUp(user1)
{
    if(!(users.map(user => user._id)).includes(user1._id))
        users.push(user1);
}

// Create a function called signIn which allows user to sign in to the application
function signIn(id)
{
  if(users.find(user => user._id === id))
    users.find(user => user._id === id).isLoggedIn = true  
}

// The products array has three elements and each of them has six properties.
const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]
// Create a function called rateProduct which rates the product
function rateProduct(productId, userId, rate){
    if(products.find(product => product._id === productId))
      products.find(product => product._id === productId).ratings.push({userId : rate})
}
// Create a function called averageRating which calculate the average rating of a product
function averageRating(productId){
    let average;
      const product = products.find(product => product._id === productId);
      if(product){
        let sum = 0;
        const ratings = product.ratings;
        for(const rate of ratings)
        {
          sum += rate.rate
        }
        average = sum/ratings.length
      }
      return average;
  }
  
// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(productId, userId) {
    const product = products.find(product => product._id === productId);
  
    if (product) {
      if (product.likes.includes(userId)) {
        product.likes = product.likes.slice(product.likes.indexOf(userId),1);
        
      } else {
        product.likes.push(userId);
        
      }
    } else {
      console.log('Product not found.');
    }
  }
  
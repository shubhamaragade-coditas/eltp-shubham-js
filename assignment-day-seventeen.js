
const fetchData = new Promise((resolve, reject) => {
    const data = fetch('https://dummyjson.com/users')
        .then((data) => resolve(data.json()))
        .catch((error) => reject(error));
});





fetchData.then((response) => console.log(response)).catch((error) => console.log(error));

const outerPromise = new Promise((resolve, reject) => {
    const promise1 = new Promise((resolve, reject) => {
        return resolve("Promise 1");
    });
    const promise2 = new Promise((resolve, reject) => {
        return reject("Promise 2");
    });
    const promise3 = new Promise((resolve, reject) => {
        return resolve("Promise 3");
    });
    const promise4 = new Promise((resolve, reject) => {
        return resolve("Promise 4");
    });

    const promises = [
        promise1.then(response => ({ response })).catch(error => ({ error })),
        promise2.then(response => ({ response })).catch(error => ({ error })),
        promise3.then(response => ({ response })).catch(error => ({ error })),
        promise4.then(response => ({ response })).catch(error => ({ error }))
    ];

    Promise.all(promises).then((response) => console.log(response))

});


// outerPromise.then().catch((response) => console.log(response));



const countriesAPI = 'https://restcountries.com/v2/all';

const fetchCountries = new Promise((resolve, reject) => {
    fetch(countriesAPI)
        .then(data => resolve(data))
        .catch(error => reject(error));
});

fetchCountries.then(data => {
    data.forEach(({ name, capital, nativeName, population, area }) => {
        console.log(`Country: ${name}, Capital: ${capital}, Native Name: ${nativeName}, Population: ${population}, Area: ${area} square kilometers`);
    });
})
.catch(error => {
    console.log('Failed to fetch countries:', error);
});



const catsAPI = 'https://api.thecatapi.com/v1/breeds';


const cats = new Promise((resolve, reject) => {
    fetch(catsAPI)
    .then(data => resolve(data))
    .catch((error) => reject(error));
});

// Print out all the cat names in to catNames variable.
cats.then((data) => {
    const catNames = data.map(({name}) => name);
    return catNames;
})
.catch(error => {
    console.log('Failed to fetch countries:', error);
});

// Read the cats api and find the average weight of cat in metric unit.
cats.then((data) => {
    let totalWeight = 0;
    let count = 0;

    data.forEach(cat => {
        const weightRange = cat.weight.metric.split(" - ");
        const minWeight = parseInt(weightRange[0], 10);
        const maxWeight = parseInt(weightRange[1], 10);
        const averageWeight = (minWeight + maxWeight) / 2;

        totalWeight += averageWeight;
        count++;
    });

    return totalWeight / count;

});


// Read the countries api and find out the 10 largest countries
fetchCountries.then((data) => {
    data.sort((a,b) => b.area-a.area);
    const largestContries = countries.slice(0, 10);
    const {names} = largestContries;
    return names;
})

// Read the countries api and count total number of languages in the world used as officials.


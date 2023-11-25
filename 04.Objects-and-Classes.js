const obj = {
    fname: "Pepi",
    lname: "Turboto",
    age: 12,
};

//console.log(obj.age);

const objInFunc = (fname, lname, age) => ({
    fname: "Pepi",
    lname: "Turboto",
    age: 12,
});

//console.log(objInFunc());
//console.log(objInFunc().fname);

const funcInObj = {
    fname: "Peter",
    lname: "Pan",
    sayHello: function () {
        console.log("Hellooo!");
    },
};

//funcInObj.sayHello();
//funcInObj.sayBay = () => (console.log("Bay bay"));
//funcInObj.sayBay();

const person = {
    name: "Peter",
    sirname: "Pan",
    age: 12
};

//console.log(Object.entries(person));
//console.log(Object.keys(person));
//console.log(Object.values(person));

function getObjectToData(obj) {
    for (const entry of Object.entries(obj)) {
        const [key, value] = entry; // destruct array
        console.log(`${key} -> ${value}`);
    }
}

// getObjectToData({
//     name: "Sofia",
//     area: 492,
//     population: 1238438,
//     country: "Bulgaria",
//     postCode: "1000",
// });

let personToni = {
    firstName: "Toni",
    lastName: "Tur",
    address: {
        city: "Paris",
    },
};

//console.log(personToni.address.city);

// from JS to JSON
let stringifiedObj = JSON.stringify(personToni);
//console.log(personToni);

let text = `{ "firstName": "Anna", "lastName": "O'Rilly", "address": { "city": "London" } }`;

// from JSON to JS
let personAnna = JSON.parse(text);
//console.log(personAnna);

/*
Write a function, that receives a string in JSON format and
converts it to object
Print the entries of the object
*/

function convertJSONToObject(json) {
    let parseJson = JSON.parse(json);
    let entries = Object.entries(parseJson);
    for (const element of entries) {
        const [key, value] = element;
        console.log(`${key}: ${value}`);
    }

    // shorter sintax
    // for (const [key, value] of Object.entries(parseJson)) {
    //     console.log(`${key}: ${value}`);
    // }
}

/*
convertJSONToObject(`{
     "name": "George",
     "age": 40,
    "town": "Sofia"
}`);
*/

/*
Write a function that receives a first name, last name,
hair color and sets them to an object.
Convert the object to JSON string and print it.
*/

function convertObjectToJSON(firstName, lastName, hairColor) {
    const personInfo = {
        firstName,
        lastName,
        hairColor,
    };
    let stringifyPerson = JSON.stringify(personInfo);
    console.log(stringifyPerson);
}

//convertObjectToJSON("Ana", "O`Reilly", "Ginger");

/*
5. Phone Book

Write a function that stores information about a person’s name and phone number. The input is an array of strings with space-separated name and number. Replace duplicate names. Print the result as shown. 
*/

function phoneBook(array) {

    let phoneBook = {};

    for (const element of array) {
        const [name, phone] = element.split(' ');
        if (!phoneBook.hasOwnProperty(name)) {
            phoneBook[name] = phone;
        }
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

//phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);


/*
6. Meetings

Write a function that manages meeting appointments. The input comes as an array of strings. Each string contains a weekday and person’s name. For each successful meeting, print a message. If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. In the end, print a list of all successful meetings.
*/

function meetings(array) {
    const meeting = {};
    for (const element of array) {
        const [day, name] = element.split(' ');
        if (!meeting.hasOwnProperty(day)) {
            meeting[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    Object.keys(meeting).forEach((day) => {
        console.log(`${day} -> ${meeting[day]}`);
    })
}

//meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);

/*
7. Address Book

Write a function that stores information about a person’s name and his address. The input comes as an array of strings. Each string contains the name and the address separated by a colon. If you receive the same name twice just replace the address. In the end, print the full list, sorted alphabetically by the person’s name.
*/

function getAddresses(input) {
    const addressBook = {}

    for (const person of input) {
        const [name, address] = person.split(':');
        addressBook[name] = address;
    }

    const peopleNames = Object.entries(addressBook);
    const sortedPeople = peopleNames.sort();

    for (const key of sortedPeople) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}

//getAddresses(['Bob:Huxley Rd', 'John:Milwaukee Crossing', 'Peter:Fordem Ave', 'Bob:Redwing Ave', 'George:Mesta Crossing', 'Ted:Gateway Way', 'Bill:Gateway Way', 'John:Grover Rd', 'Peter:Huxley Rd', 'Jeff:Gateway Way', 'Jeff:Huxley Rd']);

// deep copy example
let personAndFriends = {
    name: "Ana",
    age: 23,
    friends: [
        {
            name: "Bob",
            age: 25,
        },
        {
            name: "Mary",
            age: 23
        }
    ]
};

// let copyPersonAndFriends = JSON.parse(JSON.stringify(personAndFriends));

// copyPersonAndFriends.friends[0].name = "Boby";

// console.log(personAndFriends);
// console.log(copyPersonAndFriends);


/*
8. Cats

Write a function that receives array of strings in the following format '{cat name} {age}'.

Create a Cat class that receives in the constructor the name and the age parsed from the input.

It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the console.

For each of the strings provided, you must create a cat object and invoke the .meow () method.
*/

function cats(arr) {

    let cats = [];

    class Cat {
        constructor(catName, catAge) {
            this.catName = catName;
            this.catAge = catAge;
        }

        meow() {
            console.log(`${this.catName}, age ${this.catAge} says Meow`);
        }
    }

    for (const element of arr) {
        let [cat] = element.split(", ");
        let [catName, catAge] = cat.split(" ");
        let newCat = new Cat(catName, catAge);
        newCat.meow();
        cats.push();
    }
}

//cats(['Candy 1', 'Poppy 3', 'Nyx 2']);

/*
9. Songs

Define a class Song, which holds the following information about songs: typeList, name, and time.

You will receive the input as an array.

The first element n will be the number of songs. Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}", and the last element will be typeList / "all".

Print only the names of the songs, which have the same typeList (obtained as the last parameter). If the value of the last element is "all", print the names of all the songs.
*/

function playList(array) {

    let playList = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const songsNumber = array[0];
    const command = array[array.length - 1];

    for (let i = 1; i <= array.length - 2; i++) {
        const [typeList, name, time] = array[i].split("_");
        let newSong = new Song(typeList, name, time);
        playList.push(newSong);
    }

    if (command === "all") {
        playList.forEach((song) => console.log(song.name));
    } else {
        let filtredSongs = playList.filter((song) => song.typeList === command);
        filtredSongs.forEach((song) => console.log(song.name));
    }
}

//playList([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
//playList([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
//playList([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);


/*
11. Employees

You're tasked to create a list of employees and their personal numbers.

You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included).

Try to use an object.

At the end print all the list employees in the following format:

"Name: {employeeName} -- Personal Number: {personalNum}"
*/

function employee(array) {

    let emloyeeInfo = [];

    for (let i = 0; i < array.length; i++) {
        let employee = {
            name: array[i],
            number: array[i].length,
        };

        emloyeeInfo.push(employee);
    }

    for (const employee of emloyeeInfo) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
    }
}

//employee(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

/*
12. Towns

You’re tasked to create and print objects from a text table.

You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.

The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.

The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!
*/

function towns(table) {
    for (const element of table) {
        const [townName, townLatitude, townLongitude] = element.split(" | ");
        let town = {
            townName,
            townLatitude: Number(townLatitude).toFixed(2),
            townLongitude: Number(townLongitude).toFixed(2)
        };

        console.log(town);
    }
}

//towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);

/*
13. Store Provision

You will receive two arrays. The first array represents the current stock of the local store. The second array will contain products that the store has ordered for delivery.

The following information applies to both arrays:

Every even index will hold the name of the product and every odd index will hold the quantity of that product. The second array could contain products that are already in the local store. If that happens increase the quantity for the given product. You should store them into an object, and print them in the following format: (product -> quantity)

All of the arrays’ values will be strings.
*/

function store(currrentStock, productsToOrdered) {

    let products = {};

    let mergedArray = currrentStock.concat(productsToOrdered);

    for (let i = 0; i < mergedArray.length; i += 2) {

        let productName = mergedArray[i];
        let productQuantity = Number(mergedArray[i + 1]);

        if (!products.hasOwnProperty(productName)) {
            products[productName] = productQuantity;
        } else {
            products[productName] += productQuantity;
        }
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product]}`);
    }
}

//store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

function moviesInfo(array) {

    let movies = [];

    array.forEach((element) => {

        if (element.includes("addMovie")) {

            let name = element.split("addMovie ")[1];
            movies.push({ name });

        } else if (element.includes("directedBy")) {

            let [name, director] = element.split(" directedBy ");

            let searching = movies.find((movie) => movie.name === name);

            if (searching) {

                searching["director"] = director;

            }

        } else if (element.includes("onDate")) {

            let [name, date] = element.split(" onDate ");

            let searching = movies.find((movie) => movie.name === name);

            if (searching) {

                searching["date"] = date;

            }
        }
    });

    movies.forEach((movie) => {
        if (movie.name && movie.director && movie.director) {
            console.log(JSON.stringify(movie));
        }
    });
}

//moviesInfo(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);


/*
15. Inventory

Create a function, which creates a register for heroes, with their names, level, and items (if they have such).

The input comes as an array of strings. Each element holds data for a hero, in the following format:

"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."

You must store the data about every hero. The name is a string, a level is a number and the items are all strings.

The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:

Hero: {heroName}

level => {heroLevel}

Items => {item1}, {item2}, {item3}
*/

function heroInventory(array) {

    let heroes = [];

    for (const element of array) {

        let [heroName, heroLevel, heroItems] = element.split(" / ");

        let hero = {
            heroName,
            heroLevel: Number(heroLevel),
            heroItems,
        };

        heroes.push(hero);
    }

    heroes.sort((a, b) => a.heroLevel - b.heroLevel);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`Items => ${hero.heroItems}`);
    }
}

//heroInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);


/*
16. Words Tracker

Write a function that receives an array of words and finds occurrences of given words in that sentence.

The input will come as an array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words in which you will check for a match.

Print for each word how many times it occurs. The words should be sorted by count in descending.
*/

function wordTracker(array) {

    let words = {};
    let wordToFind = array[0].split(" ");

    for (const iterator of wordToFind) {
        words[iterator] = 0;
    }

    for (let i = 1; i < array.length; i++) {

        if (words.hasOwnProperty(array[i])) {
            words[array[i]]++;
        }
    }

    for (const word in words) {
        console.log(`${word}: ${words[word]}`);
    }
}

//wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);


/*
17. Odd Occurrences

Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).

The input comes as a single string. The words will be separated by a single space.
*/

function oddOccurrences(text) {

    let words = {};
    let textArr = [];
    textArr = text.toLowerCase().split(" ");

    for (let i = 0; i < textArr.length; i++) {

        const element = textArr[i];

        if (!words.hasOwnProperty(element)) {
            words[element] = 1;
        } else {
            words[element] += 1;
        }
    }

    let input = "";

    for (const word in words) {

        if (words[word] % 2 !== 0) {
            input += word + " ";
        }
    }

    console.log(input);
}

//oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');


/*
18. Piccolo

Write a function that:

· Records a car number for every car that enters the parking lot

· Removes a car number when the car goes out

· Input will be an array of strings in format [direction, carNumber]

Print the output with all car numbers which are in the parking lot sorted in ascending by number.

If the parking lot is empty, print: "Parking Lot is Empty".
*/
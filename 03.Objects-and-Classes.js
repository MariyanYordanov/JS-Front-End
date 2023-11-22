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

let copyPersonAndFriends = JSON.parse(JSON.stringify(personAndFriends));

copyPersonAndFriends.friends[0].name = "Boby";

console.log(personAndFriends);
console.log(copyPersonAndFriends);
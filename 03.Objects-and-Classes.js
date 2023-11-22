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

convertObjectToJSON("Ana", "O`Reilly", "Ginger");
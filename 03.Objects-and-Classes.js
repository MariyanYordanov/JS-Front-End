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

getObjectToData({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000",
});
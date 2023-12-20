
const baseUrl = 'http://localhost:3030/jsonstore/tasks/';
const divList = document.getElementById('list');

function createElement(type, textContent, classes, id, parent, innerHTML, listener) {

    const element = document.createElement(type);

    if (innerHTML && textContent) {
        element.innerHTML = textContent;
    } else if (textContent) {
        element.textContent = textContent;
    }

    if (classes && classes.length > 0) {
        element.classList.add(...classes);
    }

    if (id) {
        element.setAttribute('id', id);
    }

    if (parent) {
        parent.appendChild(element);
    }

    if (listener) {
        element.addEventListener('click', listener);
    }

    return element;
}

const btnHandler = (e) => {

    const operations = {
        "Load Meals": loadMeals,
        "Add Meal": addMeal,
        "Change": changeMeal,
        "Delete": deleteMeal,
        "Edit Meal": editMeal,
    }

    operations[e.target.textContent](e);
}

const inputFields = {
    food: document.getElementById('food'),
    time: document.getElementById('time'),
    calories: document.getElementById('calories'),
}

const resetInputFields = () => {
    Object.values(inputFields).forEach(field => field.value = "");
}

const createMeal = () => {

    const newMeal = {};

    for (const [key, value] of Object.entries(inputFields)) {
        newMeal[key] = value.value;
    }

    return newMeal;
}

const loadMeals = async () => {

    divList.innerHTML = '';

    try {

        const res = await fetch(baseUrl);
        const data = await res.json();

        Object.values(data).forEach(item => {
            
            const divMeal = createElement('div', null, ['meal'], item._id, divList);
            createElement('h2', item.food, null, null, divMeal);
            createElement('h3', item.time, null, null, divMeal);
            createElement('h3', item.calories, null, null, divMeal);

            const divMealButtons = createElement('div', null, null, 'meal-buttons', divMeal);
            createElement('button', 'Change', ['change-meal'], item._id, divMealButtons, null, btnHandler);
            createElement('button', 'Delete', ['delete-meal'], item._id, divMealButtons, null, btnHandler);
        })

    } catch (err) {
        console.error(err);
    }
}

const addMeal = () => {

    if (inputFields.calories.value !== '' 
        && inputFields.food.value !== '' 
        && inputFields.time.value !== '') {

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createMeal())
        })
        .then(() => {
            loadMeals();
            resetInputFields();
        })
        .catch()
    }
}

let editId = null;

const changeMeal = (e) => {
    const mainDiv = e.target.parentElement.parentElement;
    editId = mainDiv.id;
    
    const food = mainDiv.children[0];
    const time = mainDiv.children[1]; 
    const calories = mainDiv.children[2]; 

    inputFields.food.value = food.textContent;
    inputFields.time.value = time.textContent;
    inputFields.calories.value = calories.textContent;

    btnEditMeal.disabled = false;
    btnAddMeal.disabled = true;

    divList.innerHTML = '';
}

const editMeal = async (e) => {

    e.preventDefault();

    const currentMeal = {
        food: inputFields.food.value,
        calories: inputFields.calories.value,
        time: inputFields.time.value,
        _id: editId
    };

    fetch(`${baseUrl}${editId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentMeal)
    }) 
    .then(() => {
        resetInputFields();
        loadMeals();
        btnEditMeal.disabled = true;
        btnAddMeal.disabled = false;
        editId = null;
    })
    .catch(console.error);
}

const deleteMeal = (e) => {

    editId = e.target.id;

    fetch(`${baseUrl}${editId}`, {
        method: 'DELETE',
    })
    .then(() => loadMeals())
    .catch(console.error);
}

const btnLoadMeals = document.getElementById('load-meals');
btnLoadMeals.addEventListener('click', btnHandler);

const btnAddMeal = document.getElementById('add-meal');
btnAddMeal.addEventListener('click', btnHandler);

const btnEditMeal = document.getElementById('edit-meal');
btnEditMeal.addEventListener('click', btnHandler);

const btnDeleteMeal = document.getElementById('delete-meal');
btnDeleteMeal.addEventListener('click', btnHandler);

/*
Author solution

const BASE_URL = 'http://localhost:3030/jsonstore/tasks';

const endpoints = {
    update: (id) => `${BASE_URL}/${id}`,
    delete: (id) => `${BASE_URL}/${id}`,
};

const foodElement = document.getElementById("food");
const timeElement = document.getElementById("time");
const caloriesNumber = document.getElementById("calories");

const confirmedVacations = document.getElementById("history");
const list = document.getElementById('list');

const addBtn = document.getElementById("add-meal");
const editBtn = document.getElementById("edit-meal");
const loadBtn = document.getElementById("load-meals");


let selectedTaskId = null;

function attachEvents() {
    loadBtn.addEventListener('click', loadBoardEventHandler);
    addBtn.addEventListener('click', createTaskEventHandler);
    editBtn.addEventListener('click', editTaskEventHandler);
}

function getIdByLocation(task) {
    return fetch(BASE_URL)
        .then(res => res.json())
        .then(res => Object.entries(res).find(e => e[1].food == task)[1]._id);
}

async function loadBoardEventHandler() {
    clearAllSections();
    try {
        const res = await fetch(BASE_URL);
        const allTasks = await res.json();
        Object.values(allTasks).forEach((task) => {
            const container = document.createElement('div');
            container.className = 'meal';

            const foodElement = document.createElement('h2');
            foodElement.textContent = task.food;

            const timeElement = document.createElement('h3');
            timeElement.textContent = task.time ;

            const caloriesElement = document.createElement('h3');
            caloriesElement.textContent = task.calories ;
            

            const buttonsContainer = document.createElement('div'); 
            buttonsContainer.className = 'meal-buttons';

            const changeBtn = document.createElement('button');
            changeBtn.className = 'change-meal';
            changeBtn.textContent = 'Change';

            const doneBtn = document.createElement('button');
            doneBtn.className = 'delete-meal';
            doneBtn.textContent = 'Delete';

            buttonsContainer.appendChild(changeBtn); 
            buttonsContainer.appendChild(doneBtn);

            container.appendChild(foodElement);
            container.appendChild(timeElement);
            container.appendChild(caloriesElement);
            container.appendChild(buttonsContainer); 

            list.appendChild(container);
        });
        attachEventListeners();
    } catch (err) {
        console.error(err);
    }
}

function attachEventListeners() {
    const changeButtons = document.querySelectorAll('.change-meal');
    const doneButtons = document.querySelectorAll('.delete-meal');

    changeButtons.forEach((changeButton) => {
        changeButton.addEventListener('click', (event) => {
            const taskElement = event.target.closest('.meal');
            const location = taskElement.querySelector('h2').textContent;
            const date = taskElement.querySelector('h3:nth-child(2)').textContent;
            const temperature = taskElement.querySelector('h3:nth-child(3)').textContent;
            editTask(location, date, temperature);
            enableEditBtn();
        });
    });
    

    doneButtons.forEach((doneButton) => {
        doneButton.addEventListener('click', (event) => {
            const taskElement = event.target.closest('.meal');
            const location = taskElement.querySelector('h2').textContent;
            deleteTask(location);
        });
    });
    
}

function enableEditBtn() {
    addBtn.disabled = true;
    editBtn.disabled = false;
}

function enableAddBtn() {
    addBtn.disabled = false;
    editBtn.disabled = true;
}

function createTaskEventHandler(ev) {
    ev.preventDefault();
    if (foodElement.value !== '' && caloriesNumber.value !== '' && timeElement.value !== '') {
        const headers = {
            method: 'POST',
            body: JSON.stringify({
                food: foodElement.value,
                calories: caloriesNumber.value,
                time: timeElement.value,
            }),
        };

        fetch(BASE_URL, headers)
            .then(loadBoardEventHandler)
            .catch(console.error);

        clearAllInputs();
    }
}

async function editTask(taskLocation, taskDate, taskTemperature) {
    selectedTaskId = await getIdByLocation(taskLocation);
    foodElement.value = taskLocation;
    timeElement.value = taskDate;
    caloriesNumber.value = taskTemperature;
}

function editTaskEventHandler(ev) {
    ev.preventDefault();
    const taskLocation = foodElement.value;
    const data = {
        food: foodElement.value,
        calories: caloriesNumber.value,
        time: timeElement.value,
        _id: selectedTaskId,
    };

    fetch(endpoints.update(data._id), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(() => {
            clearAllInputs();
            loadBoardEventHandler();
            selectedTaskId = null;
            enableAddBtn();
        })
        .catch(console.error);
}

function deleteTask(taskLoacation) {
    getIdByLocation(taskLoacation)
        .then((id) =>
            fetch(endpoints.delete(id), {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
        )
        .then(() => {
            clearAllSections();
            loadBoardEventHandler();
            selectedTaskId = null;
            enableAddBtn();
        })
        .catch(console.error);
}

function clearAllSections() {
    list.innerHTML = '';
}

function clearAllInputs() {
    foodElement.value = '';
    caloriesNumber.value = '';
    timeElement.value = '';
}

attachEvents();

*/
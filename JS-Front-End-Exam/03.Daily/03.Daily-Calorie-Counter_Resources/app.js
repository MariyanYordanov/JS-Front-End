function solve() {
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

    const loadMeals = () => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                divList.innerHTML = '';
                    const dataObj = Object.values(data);
                    dataObj.forEach(item => {
                        const divMeal = createElement('div', null, ['meal'], item._id, divList);
                        createElement('h2', item.food, null, null, divMeal);
                        createElement('h3', item.time, null, null, divMeal);
                        createElement('h3', item.calories, null, null, divMeal);
    
                        const divMealButtons = createElement('div', null, null, 'meal-buttons', divMeal);
                        createElement('button', 'Change', ['change-meal'], item._id, divMealButtons, null, btnHandler);
                        createElement('button', 'Delete', ['delete-meal'], item._id, divMealButtons, null, btnHandler);
            })
        })
    }

    const addMeal = () => {
        if (inputFields.calories !== '' && inputFields.food !== '' && inputFields.time !== '') {
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

    let editId = '';

    const changeMeal = (e) => {
        const mainDiv = e.target.parentElement.parentElement;
        editId = mainDiv.id;
        const [food, time, calories] = mainDiv.children;

        inputFields.food.value = food.textContent;
        inputFields.time.value = time.textContent;
        inputFields.calories.value = calories.textContent;

        btnEditMeal.disabled = false;
        btnAddMeal.disabled = true;

        divList.innerHTML = '';
    }

    const editMeal = () => {
        fetch(`${baseUrl}${editId}`)
            .then(response => response.json())
            .then(currentMeal => {
                currentMeal.food = inputFields.food.value;
                currentMeal.time = inputFields.time.value;
                currentMeal.calories = inputFields.calories.value;

                return fetch(`${baseUrl}${editId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(currentMeal)
                });
            })
            .then(() => {
                loadMeals();
                resetInputFields();
                btnEditMeal.disabled = true;
                btnAddMeal.disabled = false;
            })
            .catch();
    };

    const deleteMeal = () => {
        fetch(`${baseUrl}${editId}`, {
            method: 'DELETE',
        })
        .then(() => loadMeals())
        .catch()
    }

    const btnLoadMeals = document.getElementById('load-meals');
    btnLoadMeals.addEventListener('click', btnHandler);

    const btnAddMeal = document.getElementById('add-meal');
    btnAddMeal.addEventListener('click', btnHandler);

    const btnEditMeal = document.getElementById('edit-meal');
    btnEditMeal.addEventListener('click', btnHandler);

}

solve();
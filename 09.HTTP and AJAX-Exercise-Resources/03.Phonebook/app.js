function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook/';
    const phonebook = document.getElementById('phonebook');

    function createElement(type, textContent, classes, id, parent, useInnerHTML) {
        const element = document.createElement(type);
        if (useInnerHTML && textContent) {
            element.innerHTML = textContent;
        } else if (textContent) {
            element.textContent = textContent;
        }
        if (classes && classes.length > 0) {
            element.classList.add(...classes);
        }
        if (id) {
            element.setAttribute("id", id);
        }
        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }

    const btnHandler = (e) => {
        const operations = {
            "Load": loadContact,
            "Create": addContact,
            "Delete": deleteContact,
        }
        operations[e.target.textContent](e);
    }

    const inputs = {
        person: document.getElementById('person'),
        phone: document.getElementById('phone'),
    }

    const clearInputs = () => {
        Object.values(inputs).forEach(field => field.value = "");
    }

    const createContact = () => {
        const newObj = {};
        for (const [key, value] of Object.entries(inputs)) {
            newObj[key] = value.value;
        }
        return newObj;
    }

    const btnLoad = document.getElementById('btnLoad');
    btnLoad.addEventListener("click", btnHandler);

    const btnCreate = document.getElementById('btnCreate');
    btnCreate.addEventListener('click', btnHandler);

    const loadContact = () => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                phonebook.innerHTML = '';
                Object.values(data).forEach(item => {

                    const liTextContent = `${item.person} : ${item.phone}`;
                    const li = createElement("li", liTextContent, "", item._id, phonebook, false);

                    const btnDelete = createElement("button", "Delete", "", "", li, btnHandler);
                    btnDelete.addEventListener('click', btnHandler);
                });
            })
    }
    const deleteContact = (e) => {
        const id = e.target.parentElement.id;
        fetch(`${baseUrl}${id}`, {
            method: 'DELETE',
        })
            .then(loadContact)
            .catch()
    }
    
    const addContact = async () => {
        await fetch(`${baseUrl}`, {
            method: 'POST',
            body: JSON.stringify(createContact())
        });
        loadContact();
        clearInputs();
    }
}

attachEvents();
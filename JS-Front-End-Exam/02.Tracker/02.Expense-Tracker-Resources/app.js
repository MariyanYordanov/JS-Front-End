window.addEventListener("load", solve);

function solve (){
    const previewUl = document.getElementById('preview-list');
    const expenseeUl = document.getElementById('expenses-list');

    const inputFields = {
        expense: document.getElementById('expense'),
        amount: document.getElementById('amount'),
        date: document.getElementById('date')
    }

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

    const clearInputs = () => {
        Object.values(inputFields).forEach(field => field.value = "");
    }

    const btnAdd = document.getElementById('add-btn');
    btnAdd.addEventListener('click', () => {

        let isValid = inputFields.expense.value !== '' && inputFields.date.value !== '' && inputFields.amount.value !== '';
    
        if(isValid){
            previewUl.innerHTML = '';
            const li = createElement("li", "", "", "", previewUl, "");
            const article = createElement("article", "", "", "", li, "");
            const type = inputFields.expense.value;
            const p1 = createElement("p", `Type: ${type}`,"", "", article, "");
            const amount = Number(inputFields.amount.value);
            const p2 = createElement("p", `Amount: ${amount}$`,"", "", article, "");
            const date = inputFields.date.value;
            const p3 = createElement("p", `Date: ${date}`,"", "", article, "");
            const div = createElement("div", "",["buttons"], "", li, "");

            clearInputs();
            btnAdd.disabled = true;

            const btnEdit = createElement("button", "edit",["btn","edit"], "", div, "");
            btnEdit.addEventListener('click', () => {
                inputFields.expense.value = type;
                inputFields.amount.value = amount;
                inputFields.date.value = date;
                btnAdd.disabled = false;
                previewUl.innerHTML = '';
            });

            const btnOk = createElement("button", "ok",["btn","ok"], "", div, "");
            btnOk.addEventListener('click', () => {
                const li = createElement("li", "", "", "", expenseeUl, "");
                const article = createElement("article", "", "", "", li, "");
                const p1 = createElement("p", `Type: ${type}`,"", "", article, "");
                const p2 = createElement("p", `Amount: ${amount}$`,"", "", article, "");
                const p3 = createElement("p", `Date: ${date}`,"", "", article, "");
                const div = createElement("div", "",["buttons"], "", li, "");
                btnAdd.disabled = false;
                btnEdit.remove();
                btnOk.remove();
            });
        }
    });
    
    const btnDelete = document.getElementsByClassName('btn delete')[0];
    console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
        window.location.reload();
    });
}
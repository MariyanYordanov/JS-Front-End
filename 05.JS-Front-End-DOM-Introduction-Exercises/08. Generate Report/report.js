function generateReport() {
    let personObject = {};
    let personAllObjects = [];
    let columnNumbers = [];

    let columnsAll = document.querySelectorAll("thead tr th input");
    console.log(columnsAll);

    for (let i = 0; i < columnsAll.length; i++) {

        const checkboxState = columnsAll[i].checked;

        if (checkboxState) {
            columnNumbers.push(i);
        }
    }

    let columnTitels = document.querySelectorAll("thead tr")[0].getElementsByTagName("th");
    let rowsCount = document.querySelectorAll("tbody tr").length;

    for (let row = 0; row < rowsCount; row++) {

        columnNumbers.forEach((element) => {

            let key = columnTitels[element].textContent.trim().toLowerCase();
            let value = document.querySelectorAll("tbody tr")[row].getElementsByTagName("td")[element].textContent;
            personObject[key] = value;
        });

        personAllObjects.push(Object.assign(personObject));
        personObject = {};
    }

    document.getElementById("output").innerHTML = JSON.stringify(personAllObjects);
}
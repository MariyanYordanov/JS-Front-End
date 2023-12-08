/*
6. Furniture

You will be given some furniture as an array of objects. 
Each object will have a name, a price, and a decoration factor.
When the ["Generate"] button is clicked, add a new row to the table for each piece of furniture
with image, name, price, and decoration factor (code example below).
When the ["Buy"] button is clicked, get all checkboxes that are marked and show in the result 
textbox the names of the piece of furniture that were checked, 
separated by a comma and single space (", ") in the following format: 
"Bought furniture: {furniture1}, {furniture2}…".
On the next line, print the total price in the format: 
"Total price: {totalPrice}" (formatted to the second decimal point). 
Finally, print the average decoration factor in the format: "Average decoration factor: {decFactor}"

Input
[{"img":"https://www.ikea.com/PIAimages/0447583_PE597395_S5.JPG","name": "Sofa","price": "259","decFactor":"0.4"},{"img":"https://www.stylespafurniture.com/wp-content/uploads/2020/03/Cove_3_Door_Wardrobe_1.jpg","name": "Wardrobe","price": "120","decFactor":"1.2"}]
*/

function solve() {

    let table = document.querySelector('.table');

    const btnGenerate = document.querySelector('#exercise button');
    btnGenerate.addEventListener('click', generate);

    function generate() {

        const input = document.querySelector('#exercise textarea').value.trim();
        const parsedInput = JSON.parse(input);

        for (let item of parsedInput){

            let row = table.insertRow(table.rows.length);

            let cell1 = row.insertCell(0);
            cell1.innerHTML = '<img src=' + item.img + ' />';

            let cell2 = row.insertCell(1);
            cell2.innerHTML = '<p>' + item.name + '</p>';

            let cell3 = row.insertCell(2);
            cell3.innerHTML = '<p>' + item.price + '</p>';

            let cell4 = row.insertCell(3);
            cell4.innerHTML = '<p>' + item.decFactor + '</p>';

            let cell5 = row.insertCell(4);
            cell5.innerHTML = '<input type ="checkbox">';
        }
    }

    const btnBuy = document.querySelector('#exercise > button:nth-child(6)');
    btnBuy.addEventListener('click', buy);

    function buy() {

        const rows = document.querySelectorAll('tbody tr');

        let checkedRows = [];

        for (const row of rows) {

            let checkbox = row.querySelector('td input');
            
            if(checkbox.checked){
                checkedRows.push(row);
            }
        }

        const output = document.querySelector('#exercise > textarea:nth-child(5)');

        let firstLine = ['Bought furniture: '];
        let secondLine = 0;
        let thirdLine = ['Average decoration factor: '];
        let count = 0;
        let average= 0;

        for (const row of checkedRows) {

            firstLine.push(row.querySelector('td:nth-child(2) p:nth-child(1)').textContent);

            secondLine += Number(row.querySelector('td:nth-child(3) p:nth-child(1)').textContent);

            average += Number(row.querySelector('td:nth-child(4) p:nth-child(1)').textContent);
            count++;
        }

        
        let decorationFactor = (average / count).toFixed(2);
        thirdLine += decorationFactor;

        output.textContent = `${firstLine.join(", ")}\n${secondLine.toFixed(2)}\n${thirdLine}`;
    }
}
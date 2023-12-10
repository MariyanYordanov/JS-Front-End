/*
8. Sudomu

Write a function that implements SUDOMU (Sudoku inside the DOM).
The rules are simple and they are the same as the typical sudoku game
If the table is filled with the right numbers, and the ["Quick Check"] button is clicked, the expected result should be:
- the table borer should be changed to: "2px solid green";
- the text content of the paragraph;
- inside the div with an id "check" must be "You solve it! Congratulations!"
- the text color of that paragraph must be green.

Otherwise, when the filled table does not solve the sudomu, the result should be:
- the table border should be changed to: "2px solid red";
- the text content of the paragraph inside the div with an id "check" must be: "NOP! You are not done yet...";
- the text color of that paragraph must be red!;

The ["Clear"] button clears the whole SUDOMU (removes all numbers) and the paragraph
which contains the messages. It also removes the table border.
*/



function solve() {

    const inputs = document.querySelectorAll('input');
    const result = document.querySelector('#check > p');
    const tableBorder = document.querySelector('table');

    const inputsButtons = document.getElementsByTagName('input');

    for (const iterator of inputsButtons) {

        iterator.addEventListener('click', () => {

            tableBorder.style.border = '';
            result.textContent = '';
        })
    }

    const [btnQuickCheck, btnClear] = document.querySelectorAll('tfoot tr td button');

    btnQuickCheck.addEventListener('click', () => {

        tableBorder.style.border = '';
        result.textContent = '';

        const rows = document.querySelectorAll('tbody tr');

        const matrix = [];

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            const rowValues = [];

            for (let j = 0; j < cells.length; j++) {
                const inputElement = cells[j].querySelector('input');
                console.log(inputElement.value);
                rowValues.push(inputElement.value);
            }

            matrix.push(rowValues);
        }
        console.log(matrix);

        let isCorrect = true;

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {

                const cellValue = matrix[row][col];

                if (cellValue === null || isNaN(cellValue) || cellValue < 1 || cellValue > 3) {
                    isCorrect = false;
                    break;
                }

                for (let otherCol = col + 1; otherCol < matrix[row].length; otherCol++) {

                    if (matrix[row][col] === matrix[row][otherCol]) {
                        isCorrect = false;
                        break;
                    }
                }

                for (let otherRow = row + 1; otherRow < matrix.length; otherRow++) {
                    if (matrix[row][col] === matrix[otherRow][col]) {
                        isCorrect = false;
                        break;
                    }
                }
            }
        }

       

        if(isCorrect){
            tableBorder.style.border = '2px solid green';
            result.textContent = 'You solve it! Congratulations!';
        } else {
            tableBorder.style.border ='2px solid red';
            result.textContent = 'NOP! You are not done yet...';
        }


    })

    btnClear.addEventListener('click', () => {

        tableBorder.style.border = '';
        result.textContent = '';

        for (const iterator of inputs) {
            iterator.value = '';
        }
    })
}
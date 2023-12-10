function sudoku() {


    function generateSudoku() {

        const sudokuBoard = Array.from({ length: 9 }, () => Array(9).fill(0));

        generateNumbers(sudokuBoard);

        return sudokuBoard;
    }

    function generateNumbers(board) {

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {

                const num = getRandomValidNumber(board, row, col);

                if (num !== 0) {

                    board[row][col] = num;

                    if (!isValidSudoku(board) || !generateNumbers(board)) {
                        board[row][col] = 0;
                        return false;
                    }
                }
            }
        }

        return true;
    }

    function getRandomValidNumber(board, row, col) {

        const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        shuffleArray(validNumbers);

        for (const num of validNumbers) {

            if (isValidNumber(board, row, col, num)) {
                return num;
            }
        }

        return 0;
    }

    function isValidNumber(board, row, col, num) {
        return !board[row].includes(num) &&
            !board.map(row => row[col]).includes(num) &&
            !gridContainsNumber(board, row, col, num);
    }

    function gridContainsNumber(board, row, col, num) {

        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {

                if (board[startRow + i][startCol + j] === num) {
                    return true;
                }
            }
        }

        return false;
    }

    function isValidSudoku(board) {

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {

                if (board[i][j] !== 0 && !isValidNumber(board, i, j, board[i][j])) {
                    return false;
                }
            }
        }

        return true;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const newSudoku = generateSudoku();
    console.log(newSudoku);

    const numNumbersToRemove = 20;

    function removeNumbers(board, numToRemove) {
        for (let i = 0; i < numToRemove; i++) {
            const row = Math.floor(Math.random() * 9);
            const col = Math.floor(Math.random() * 9);

            if (board[row][col] !== 0) {
                board[row][col] = 0;
            } else {
                i--; // Ако клетката вече е празна, повторете итерацията
            }
        }
    }

    function su() {
        function solveSudoku(board) {
            const N = board.length;

            function isValid(num, row, col) {
                // Проверка за валидност на числото num в дадения ред и колона
                for (let i = 0; i < N; i++) {
                    if (board[row][i] === num || board[i][col] === num || board[row - row % 3 + i % 3][col - col % 3 + i / 3 | 0] === num) {
                        return false;
                    }
                }
                return true;
            }

            function solve() {
                for (let row = 0; row < N; row++) {
                    for (let col = 0; col < N; col++) {
                        if (board[row][col] === 0) {
                            for (let num = 1; num <= N; num++) {
                                if (isValid(num, row, col)) {
                                    board[row][col] = num;

                                    if (solve()) {
                                        return true;
                                    }

                                    // Ако текущата конфигурация не води до решение, върнете на 0
                                    board[row][col] = 0;
                                }
                            }

                            // Ако няма валидно число, върнете false
                            return false;
                        }
                    }
                }

                // Всички клетки са попълнени валидно
                return true;
            }

            if (solve()) {
                return board;
            } else {
                return "Няма решение!";
            }
        }

        // Пример за извикване на функцията с първоначално празен судоку
        const emptySudoku = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

        const solvedSudoku = solveSudoku(emptySudoku);
        console.log(solvedSudoku);

    }

}
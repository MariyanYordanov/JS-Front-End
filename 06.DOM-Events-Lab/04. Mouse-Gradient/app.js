/*
4. Mouse Gradient

Write a program that detects and displays how far along a gradient the user has moved their mouse. 
The result should be rounded down and displayed as a percentage inside the <div> with id "result".

Input/Output

There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

function attachGradientEvents() {
    const element = document.getElementById("gradient");
    const result = document.getElementById("result");

    element.addEventListener("mousemove", gradientMove);
    element.addEventListener("mouseout", gradientOut);

    function gradientMove(e) {
        // Calculate the relative position of the mouse cursor within the 'gradient' element
        // by dividing the horizontal offset of the cursor by the total width
        let power = e.offsetX / (e.target.clientWidth - 1);
        // Convert the relative position to a percentage by multiplying it with 100
        power = Math.trunc(power * 100);
        result.textContent = power + "%";
    }

    function gradientOut() {
        result.textContent = "";
    }
}
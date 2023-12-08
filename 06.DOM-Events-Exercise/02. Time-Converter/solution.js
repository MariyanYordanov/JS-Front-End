/*
2. Time Converter

Create a program that converts different time units. 
Your task is to add a click event listener to all [CONVERT] buttons. 
When a button is clicked, read the corresponding input field, 
convert the value to the three other time units and display it in the input fields.
*/

function attachEventsListeners() {

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    const inputConvertFields = Array.from(document.querySelectorAll("main div input:nth-child(3)"));
    const inputFields = [days, hours, minutes, seconds];

    inputFields.forEach(inputField => {
        inputField.addEventListener('focus', clearFields);
    });

    function clearFields() {
        inputFields.forEach(field => { 
            field.value = ''; 
        });
    }
    
    inputConvertFields.forEach(element => {
        element.addEventListener('click', convert);
    });

    function convert(e) {
        const parentDiv = e.currentTarget.parentNode;
        const inputTarget = parentDiv.querySelector("input[type='text']");
        const inputBtn = parentDiv.querySelector("input[type='button']");
        
        if(inputBtn.id === "daysBtn"){
            
            hours.value = Number(inputTarget.value) * 24;
            minutes.value = Number(inputTarget.value) * 24 * 60;
            seconds.value = Number(inputTarget.value) * 24 * 60 * 60;
            
        } else if (inputBtn.id === "hoursBtn"){

            days.value = Number(inputTarget.value) / 24;
            minutes.value = Number(inputTarget.value) * 60;
            seconds.value = Number(inputTarget.value) * 60 * 60;

        } else if (inputBtn.id === "minutesBtn"){

            days.value = Number(inputTarget.value) / (24 * 60);
            hours.value = Number(inputTarget.value) / 60;
            seconds.value = Number(inputTarget.value) * 60;

        } else if (inputBtn.id === "secondsBtn"){

            days.value = Number(inputTarget.value) / (24 * 60 * 60);
            hours.value = Number(inputTarget.value) * 60;
            minutes.value = Number(inputTarget.value) / 60;

        }
    }
}
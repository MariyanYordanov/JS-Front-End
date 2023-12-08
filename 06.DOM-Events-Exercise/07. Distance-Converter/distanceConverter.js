/*
7. Distance Converter *

Your task is to convert from one distance unit to another by adding a click event listener to a button. 
When it is clicked, read the value from the input field and get the selected option from the input and output units dropdowns. 
Then calculate and display the converted value in the disabled output field.

Hints

· Multiply the incoming distance by the following conversion rates to convert to meter
· Divide to convert from meters to the required output unit
· To see which option is selected, read the properties of its parent: 
value gives you the value of the selected option (as displayed in the HTML), 
selectedIndex gives you the 0-based index of the selected option. 
For example, if miles are selected, inputUnits.value is "mi", inputUnits.selectedIndex is 4. 
Option text is irrelevant
*/

function attachEventsListeners() {
    
    const [inputField, convertButton, outputField] = document.getElementsByTagName('input');
    const [inputOption, outputOption] = document.getElementsByTagName('select');

    const convertToMeter = {
        km:1000,
        m: 1, 
        cm: 0.01, 
        mm: 0.001, 
        mi: 1609.34, 
        yrd: 0.9144, 
        ft: 0.3048, 
        in: 0.0254
    };

    convertButton.addEventListener('click', () => {

        const inputDistance = inputField.value;
        const inputUnits = inputOption.value;
        const outputUnits = outputOption.value;
        
        let result = inputDistance * convertToMeter[inputUnits] / convertToMeter[outputUnits];
        outputField.value = result.toFixed(8);
    })

}
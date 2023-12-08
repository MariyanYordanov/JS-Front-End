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
    
    const convertToMeter = [1000, 1, 0.01, 0.001, 1609.34, 0.9144, 0.3048, 0.0254];
    
    const btnConvert = document.getElementById('convert');

    btnConvert.addEventListener('click', () => {

        const inputDistance = Number(document.getElementById('inputDistance').value);
        const outputDistance = document.getElementById('outputDistance');

        const selectInputUnits = document.getElementById('inputUnits');
        const selectedInputIndex = selectInputUnits.selectedIndex;

        let convertToMeterInput = inputDistance * convertToMeter[selectedInputIndex];
        
        const selectedOutputUnits = document.getElementById('outputUnits');
        const selectedOutputIndex = selectedOutputUnits.selectedIndex;
        
        let result = convertToMeterInput / convertToMeter[selectedOutputIndex];
        outputDistance.value = result.toFixed(6);
    })

}
document.getElementById('button').addEventListener('click', function(){
    const inputTemperature = parseFloat(document.getElementById('input').value);
    const inputUnit = document.getElementById('select').value;
    const convertToUnit = document.getElementById('selector').value;
    const temperatureDisplay = document.getElementById('temperature');
    let convertedTemperature;

    if  (inputUnit === 'F') {
        if (convertToUnit === 'Celcius') {
            convertedTemp = (inputTemperature - 32) * 5/9;
            temperatureDisplay.innerHTML = Number.isInteger(convertedTemp) 
                ? `${convertedTemp}<span style="position: absolute; top: 150; font-size: 30px">°C</span>` : `${convertedTemp.toFixed(2)}<span style="position: absolute; top: 150; font-size: 30px">°C</span>`;
        } else {
            convertedTemp = inputTemperature;
        }
    } else if (inputUnit === 'C') {
        if (convertToUnit === 'Fahrenheit') {
            convertedTemp = (inputTemperature * 9/5) + 32;
            temperatureDisplay.innerHTML = Number.isInteger(convertedTemp) 
                ? `${convertedTemp}<span style="position: absolute; top: 50; font-size: 30px">°F</span>`: `${convertedTemp.toFixed(2)}<span style="position: absolute; top: 50; font-size: 30px">°F</span>`;
        } else {
            convertedTemp = inputTemperature; 
        }
    }
});

document.getElementById('select').addEventListener('change', function() {
    const inputUnit = document.getElementById('select').value;
    const selector = document.getElementById('selector');

    if (inputUnit === 'C') {
        selector.value = 'Fahrenheit';
    } else if (inputUnit === 'F') {
        selector.value = 'Celcius';
    }
});

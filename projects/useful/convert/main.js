function celciusToFahrenheit() {
    let num = document.getElementById('celcius').value;
    let fahrenheit = (num * 9/5) + 32;
    if (Number.isNaN(fahrenheit)) return document.getElementById('fahrenheit').placeholder = 'You can use only numbers.';
    window.setTimeout(() => {
        document.getElementById('fahrenheit').placeholder = 'Fahrenheit';
    }, 1500);
    document.getElementById('fahrenheit').value = Math.round(fahrenheit) + 'F°';
}

function fahrenheitToCelcius() {
    let num = document.getElementById('fahrenheit').value;
    let celcius = (num - 32) * 5/9;
    if (Number.isNaN(celcius)) return document.getElementById('celcius').placeholder = 'You can use only numbers.';
    window.setTimeout(() => {
        document.getElementById('celcius').placeholder = 'Celcius';
    }, 1500);
    document.getElementById('celcius').value = Math.round(celcius) + 'C°';
}

function resetC() {
    document.getElementById("celcius").value = '';
}

function resetF() {
    document.getElementById("fahrenheit").value = '';
}
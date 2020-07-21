function celciusToFahrenheit() {
    let num = document.getElementById('celcius').value;
    let fahrenheit = (num * 9/5) + 32;
    document.getElementById('fahrenheit').value = Math.round(fahrenheit) + 'F°';
}

function fahrenheitToCelcius() {
    let num = document.getElementById('fahrenheit').value;
    let celcius = (num - 32) * 5/9;
    document.getElementById('celcius').value = Math.round(celcius) + 'C°';
}

function resetC() {
    document.getElementById("celcius").value = '';
}

function resetF() {
    document.getElementById("fahrenheit").value = '';
}
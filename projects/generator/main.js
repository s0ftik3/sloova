function generate() {
    var x = document.getElementById('fvalue').value;
    var y = document.getElementById('svalue').value;
    var result = Math.floor(Math.random() * (Math.floor(x) - Math.ceil(y))) + Math.ceil(y);
    if (Number.isNaN(result)) return document.getElementById('result').placeholder = 'You can use only numbers.';
    document.getElementById('result').placeholder = String(result);
}
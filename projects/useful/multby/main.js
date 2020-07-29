Array.prototype.multby = function(n) {
  return this.map(function(i) {
    return i * n;
  })
} 

function openButton() {
  var button = document.getElementById('sendButton');
  document.getElementById('resultNum').innerHTML = '';
  if (document.getElementById('numbers').value.trim() != '' && document.getElementById('multby').value.trim() != '') {
      button.disabled = false;
  } else {
      button.disabled = true;
  }
}

function result() { 
  var by = document.getElementById('multby').value;
  var numbers = [document.getElementById('numbers').value.split(' ')];
  var result = numbers[0].multby(by);
  document.getElementById('numbers').value = '';
  document.getElementById('multby').value = '';
  document.getElementById('sendButton').disabled = true;
  document.getElementById('resultNum').innerHTML = `Result is ${result}`;
  if (isNaN(result[0])) {
    document.getElementById('resultNum').innerHTML = `Do not put any other characters than numbers in input field.`;
    setTimeout(() => {
      document.getElementById('resultNum').innerHTML = '';
    }, 2000);
  }
}

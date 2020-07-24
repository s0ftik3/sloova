function translator() {
  try {
    var text = document.getElementById('ru').value;
    var data = `[ {  \"Text\": \"${text}\" }]`

    var request = new XMLHttpRequest();
        request.open('POST', 'https://microsoft-translator-text.p.rapidapi.com/translate?from=ru&profanityAction=NoAction&textType=plain&to=kk&api-version=3.0', true);
        request.setRequestHeader('x-rapidapi-host', 'microsoft-translator-text.p.rapidapi.com');
        request.setRequestHeader('x-rapidapi-key', '6be04e24f1msh1ee716a99325910p141bf3jsnb58086d35a6f');
        request.setRequestHeader('content-type', 'application/json');
        request.setRequestHeader('accept', 'application/json');
        request.send(data);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        var data = JSON.parse(this.response);
        var result = data['0'].translations[0].text;
        document.getElementById('kz').value = result;
      }
    };

    request.onerror = function() {
    };
  } catch (error) {
    console.log(error);
  }
}
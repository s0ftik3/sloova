var request = new XMLHttpRequest();
request.open('GET', 'https://covid19-us-api.herokuapp.com/news', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    var data = JSON.parse(this.response);
    for (i = 0; i < 5; i++) {
        var newArray = data.message;
        var title = newArray[i].title;
        var url = newArray[i].url;
        let html = ``;

        html += `
        <div class="mt-3 mb-3 card" style="width: 18.7rem;">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">${title}</h6>
          <a href="${url}" class="card-link">Source</a>
        </div>
        </div>`

        var d1 = document.getElementById('main'); 
        d1.insertAdjacentHTML("afterend", html);
    }
  }
};

request.onerror = function() {
};

request.send();
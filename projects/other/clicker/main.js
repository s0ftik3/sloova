var i = 0;

function loadScreen() {
    var html = '';
    html += `
    <div class="hello">
    <h1>Clicker</h1>
    <div class="new">
      <p id="count">0</p>
    </div>
    <button id="click" class="btn btn-primary btn-block" style="color: white;">Click</button>
    <a type="button" href="../index.html" class="btn btn-primary btn-block" style="color: white;">Back</a>
    </div>`
    var d1 = document.querySelector('.text-center'); 
    d1.insertAdjacentHTML("afterbegin", html);
}

setTimeout(() => {
    document.getElementById('click').onclick = function() {     
        i++
        document.getElementById("count").firstChild.data = i; 
    };
}, 1000);
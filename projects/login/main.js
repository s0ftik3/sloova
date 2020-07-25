function checkLogin() {
    var initial = document.getElementById('log').value;
    if (initial === 'god@god.mail') {
        return true;
    } else {
        return;
    }
}

function checkPassword() {
    var initial = document.getElementById('pass').value;
    if (initial === 'god1234') {
        return true;
    } else {
        return;
    }
}

function login() {
    document.querySelector('#removeMe').remove();
    var html = '';

    html += `
    <div class="hello">
    <h1>Success!</h1>
    <p class="mt-2 mb-3 text-muted">You've been logged in.</p>
    <a type="button" href="http://sloova.xyz/" class="btn btn-primary btn-block" style="color: white;">Back</a>
    </div>`

    var d1 = document.getElementById('body');
    d1.insertAdjacentHTML("beforeend", html);
}

function fail() {
    document.querySelector('#removeMe').remove();
    var html = '';

    html += `
    <div class="hello">
    <h1>Error!</h1>
    <p class="mt-2 mb-3 text-muted">You typed a wrong login or password.</p>
    <a type="button" href="http://sloova.xyz/" class="btn btn-primary btn-block" style="color: white;">Back</a>
    </div>`

    var d1 = document.getElementById('body');
    d1.insertAdjacentHTML("beforeend", html);
}

function submit() {
    if (checkLogin() && checkPassword()) {
        return login();
    } else {
        return fail();
    }
}
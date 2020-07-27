function currentTime() {
    var date = new Date();
    return date.toISOString();
}

function hexToDecimal(hex) {
    return parseInt(hex.replace("#",""), 16)
}

function openButton() {
    var button = document.getElementById('submitBtn');
    if (document.getElementById('log').value.trim() != '' && document.getElementById('pass').value.trim() != '') {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

function embedSuccess() {
    var usedLogin = document.getElementById('log').value;
    var request = new XMLHttpRequest();
    request.open('POST', 'https://discordapp.com/api/webhooks/736285089301921822/-vEASfRw6C2E4a3YVQbSs-1mIjTHhfKkrK8iY5QCZU7XadgIj-q5amiZyHKH5lySPNcy');
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        embeds: [{
            title: 'Someone successfully logged in your website. :man_detective_tone1:',
            fields: [{
                name: 'Login they used :bust_in_silhouette:',
                value: `\`\`\`${usedLogin}\`\`\``
            }],
            color: hexToDecimal('#43b581'),
            timestamp: currentTime()
        }]
    };
    request.send(JSON.stringify(params));
}

function embedFail() {
    var usedLogin = document.getElementById('log').value;
    var request = new XMLHttpRequest();
    request.open('POST', 'https://discordapp.com/api/webhooks/736285089301921822/-vEASfRw6C2E4a3YVQbSs-1mIjTHhfKkrK8iY5QCZU7XadgIj-q5amiZyHKH5lySPNcy');
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        embeds: [{
            title: 'Someone failed to log in your website. :man_detective_tone1: ',
            fields: [{
                name: 'Login they used :bust_in_silhouette:',
                value: `\`\`\`${usedLogin}\`\`\``
            }],
            color: hexToDecimal('#f04747'),
            timestamp: currentTime()
        }]
    };
    request.send(JSON.stringify(params));
}


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
        embedSuccess();
        return login();
    } else {
        embedFail();
        return fail();
    }
}
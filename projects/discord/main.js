function openButton() {
    var button = document.getElementById('sendButton');
    if (document.getElementById('message').value.trim() != '') {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

function hexToDecimal(hex) {
    return parseInt(hex.replace("#",""), 16)
}

function currentTime() {
    var date = new Date();
    return date.toISOString();
}

function success() {
    document.getElementById('message').value = '';
    document.getElementById('message').placeholder = 'Successfully sent!';
    window.setTimeout(() => {
        document.getElementById('message').placeholder = 'What do you want to say?';
    }, 1500);
}

function fail() {
    document.getElementById('message').value = '';
    document.getElementById('message').placeholder = 'Bad Request';
    window.setTimeout(() => {
        document.getElementById('message').placeholder = 'Open this page later';
    }, 1500);
}

function sendEmbed() {
    var text = document.getElementById('message').value;
    if (!text) return;
    var request = new XMLHttpRequest();
    request.open('POST', 'https://discordapp.com/api/webhooks/736285089301921822/-vEASfRw6C2E4a3YVQbSs-1mIjTHhfKkrK8iY5QCZU7XadgIj-q5amiZyHKH5lySPNcy');
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        embeds: [{
            title: 'Send your message',
            url: 'https://sloova.xyz/projects/discord/',
            fields: [{
                name: 'Message :love_letter:',
                value: `\`\`\`${text}\`\`\``
            }],
            color: hexToDecimal("#4d7ae8"),
            timestamp: currentTime()
        }]
    };
    request.send(JSON.stringify(params));
    success();
    document.getElementById('sendButton').disabled = true;
}

function sendMessage() {
    var text = document.getElementById('message').value;
    if (!text) return;
    var request = new XMLHttpRequest();
    request.open('POST', 'https://discordapp.com/api/webhooks/736285089301921822/-vEASfRw6C2E4a3YVQbSs-1mIjTHhfKkrK8iY5QCZU7XadgIj-q5amiZyHKH5lySPNcy');
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        content: `${text}`
    };
    request.send(JSON.stringify(params));
    success();
    document.getElementById('sendButton').disabled = true;
}

function postRequest() {
    var checkbox = document.getElementById('embed');
    if (checkbox.checked === true) {
        return sendEmbed();
    } else {
        return sendMessage();
    }
}
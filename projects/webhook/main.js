function removeAll() {
  document.querySelector("#closed").remove();
}

function openButton() {
  var button = document.getElementById('sendButton');
  if (document.getElementById('inputWebhook').value.trim() != '' && document.getElementById('inputTitle').value.trim() != '' && document.getElementById('inputDescription').value.trim() != '' && document.getElementById('inputColor').value.trim() != '') {
      button.disabled = false;
  } else {
      button.disabled = true;
  }
}

function success() {
  document.getElementById('inputWebhook').value = '';
  document.getElementById('inputTitle').value = '';
  document.getElementById('inputDescription').value = '';
  document.getElementById('inputColor').value = '';
}

function fail() {
  document.getElementById('inputWebhook').value = '';
  document.getElementById('inputWebhook').placeholder = 'Wrong webhook';
  document.getElementById('inputWebhook').style.borderColor = '#f72b45';
  document.getElementById('inputWebhook').style.borderWidth = 'medium';
  window.setTimeout(() => {
    document.getElementById('inputWebhook').placeholder = 'Webhook url';
    document.getElementById('inputWebhook').style.borderColor = '';
    document.getElementById('inputWebhook').style.borderWidth = '';
  }, 1500)
  document.getElementById('inputTitle').value = '';
  document.getElementById('inputDescription').value = '';
  document.getElementById('inputColor').value = '';
  document.getElementById('sendButton').disabled = true;
}

function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
}

function currentTime() {
  var date = new Date();
  return date.toISOString();
}

async function checkStatus(url) {
  var x = await fetch(url)
    .then(response => {
      var status = response.status;
      return status;
    })
  return x;
}

function withTime() {
  var webhook = document.getElementById('inputWebhook').value;
  var set = checkStatus(webhook);
  var x;
  set.then(respond => { 
    x = respond;
  })
  setTimeout(() => {
    var result = x;
    if (result >= 200 && result <= 400) {
      var titlePicked = document.getElementById('inputTitle').value;
      var descriptionPicked = document.getElementById('inputDescription').value;
      var newColor = document.getElementById('inputColor').value;
      var request = new XMLHttpRequest();
      request.open('POST', webhook);
      request.setRequestHeader('Content-type', 'application/json');
      var newEmbed = {
        title: titlePicked,
        description: descriptionPicked,
        color: hexToDecimal(newColor),
        timestamp: currentTime()
      }
      var params = {
          embeds: [ newEmbed ]
      };
      request.send(JSON.stringify(params));
      success();
      document.getElementById('sendButton').disabled = true;
    } else {
      return fail();
    }
  }, 1000);
}

function withoutTime() {
  var webhook = document.getElementById('inputWebhook').value;
  var set = checkStatus(webhook);
  var x;
  set.then(respond => { 
    x = respond;
  })
  setTimeout(() => {
    var result = x;
    if (result >= 200 && result <= 400) {
      var titlePicked = document.getElementById('inputTitle').value;
      var descriptionPicked = document.getElementById('inputDescription').value;
      var newColor = document.getElementById('inputColor').value;
      var request = new XMLHttpRequest();
      request.open('POST', webhook);
      request.setRequestHeader('Content-type', 'application/json');
      var newEmbed = {
        title: titlePicked,
        description: descriptionPicked,
        color: hexToDecimal(newColor)
      }
      var params = {
          embeds: [ newEmbed ]
      };
      request.send(JSON.stringify(params));
      success();
      document.getElementById('sendButton').disabled = true;
    } else {
      return fail();
    }
  }, 1000);
}

function postRequest() {
  var checkbox = document.getElementById('timestamp');
  if (checkbox.checked === true) {
    return withTime();
  } else {
    return withoutTime();
  }
}
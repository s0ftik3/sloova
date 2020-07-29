function openButton() {
  var button = document.getElementById('sendButton');
  if (document.getElementById('suggestion').value.trim() != '') {
      button.disabled = false;
  } else {
      button.disabled = true;
  }
}

function currentTime() {
  var date = new Date();
  return date.toISOString();
}

function success() {
  document.getElementById('suggestion').value = '';
  document.getElementById('suggestion').placeholder = 'Successfully sent!';
  window.setTimeout(() => {
      document.getElementById('suggestion').placeholder = 'Suggestion';
  }, 1500);
}

function sendMessage() {
  var text = document.getElementById('suggestion').value;
  var botName = document.getElementById('botSelector').value;
  if (!text) return;
  var request = new XMLHttpRequest();
  request.open('POST', 'https://discordapp.com/api/webhooks/736430802212093972/DenTiiEz4j3i798zj5erE2QAWiYwCcLIXRp6Vclp6UndTLR8BDs5glziyPL3SZ6AFGO6');
  request.setRequestHeader('Content-type', 'application/json');
  var suggestion = {
    title: 'Suggestion :mailbox_with_mail:',
    fields: [
      {
        name: 'Bot :robot:',
        value: `${botName}`
      },
      {
        name: 'Content :page_with_curl:',
        value: `${text}`
      }
    ],
    timestamp: currentTime()
  }
  var params = {
      embeds: [ suggestion ]
  };
  request.send(JSON.stringify(params));
  success();
  document.getElementById('sendButton').disabled = true;
}
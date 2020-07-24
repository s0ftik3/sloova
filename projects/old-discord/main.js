var request = new XMLHttpRequest();
request.open('GET', 'https://discordapp.com/api/guilds/718067621412732959/widget.json', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    var data = JSON.parse(this.response);
    var me = data.members.find(u => u.username === 'softik');
    var status = me.status;

    var statusNames = {
      'online': 'online',
      'idle': 'idle',
      'dnd': 'do not disturb'
    }

    document.getElementById("userStatus").innerHTML = 'softik has ' + '<strong>' + statusNames[status] + '</strong>' + ' status.';
  }
};

request.onerror = function() {
};

request.send();
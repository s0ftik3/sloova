var request = new XMLHttpRequest();
request.open('GET', 'https://discordapp.com/api/guilds/718067621412732959/widget.json', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    var data = JSON.parse(this.response);
    var me = data.members.find(u => u.username === 'softik');
    var status = me.status;

    switch (status) {
      case 'dnd': 
        document.getElementById('discordState').style.background = '#f04747';
        break;
      case 'online':
        document.getElementById('discordState').style.background = '#43b581';
        break;
      case 'idle':
        document.getElementById('discordState').style.background = '#faa61a';
        break;
      default:
        document.getElementById('discordState').style.display = 'none';
        break;
    }
  }
};

request.onerror = function() {
};

request.send();
function statusNow(status) {
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
      break;
  }
}

fetch('https://discordapp.com/api/guilds/718067621412732959/widget.json')
.then((response) => {
  return response.json();
})
.then((data) => {
  var me = data.members.find(u => u.username === 'softik');
  var status = me.status;
  statusNow(status);
});
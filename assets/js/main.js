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

function rickLink() {
  var a = document.querySelector('a[href="somewhere"]');
  var i = Math.floor(Math.random() * 20);
  if (i >= 10) {
    a.setAttribute('href', 'https://github.com/s0ftik3');
  } else {
    a.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
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
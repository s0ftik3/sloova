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

function loadScreen() {
  var html = '';
  html += `
  <div class="hello">
  <div id="status">
    <div id="discordState" class="circle"></div>
    <img class="mb-4" src="/assets/img/logobg.svg" alt="" width="150" height="150">
    </div>
    <a type="button" href="/projects/useful/" class="btn btn-primary btn-block" style="color: white;">Useful</a>
    <a type="button" href="/projects/discord/" class="btn btn-primary btn-block" style="color: white;">Discord</a>
    <a type="button" href="/projects/other/" class="btn btn-primary btn-block" style="color: white;">Other <span class="badge badge-danger">New</span></a>
    <p class="mt-4 mb-2 text-muted">sloova.xyz <a href="/projects/other/login/" style="text-decoration: none; color: #6c757d;">&copy;</a> <strong>2020</strong></p>
    <a href="/assets/somewhere/"><i class="mr-2 fab fa-github" aria-hidden="true"></i></a>
    <a href="https://discord.gg/D2TVDWK"><i class="mr-2 fab fa-discord" aria-hidden="true"></i></a>
    <a href="https://t.me/id160"><i class="fab fa-telegram" aria-hidden="true"></i></a>
  </div>`
  var d1 = document.querySelector('.text-center'); 
  d1.insertAdjacentHTML("afterbegin", html);
}
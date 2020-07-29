var socket = io();

$('form').submit(function () {
  var text = $('#message').val();
  var name = $('#name').val();
  var message = name + ': ' + text;
  socket.emit('message', message);
  $('#message').val('');
  return false;
});

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
  var lemon = document.getElementById('history');
  lemon.scrollTop = lemon.scrollHeight;
});
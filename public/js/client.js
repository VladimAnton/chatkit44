 var socket = io();
      $('form').submit(function()
      {
        <!-- Отправка сообщения --> 
        socket.emit('chat message', $('#m').val());
        <!-- Очищаем текстовое окно сообщения --> 
        $('#m').val('');
        return false;
      });
 
      <!-- Приём сообщения с сервера --> 
      socket.on('chat message', function(msg)
      {
        $('#messages').append($('<li>').text(msg));
      });
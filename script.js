  var message = document.getElementById('messages');
  var text = document.getElementById('text');
  var send = document.getElementById('send');

  send.addEventListener("click", function(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML = text.value;
    messages.appendChild(newMessage);
    text.value = "";
  });

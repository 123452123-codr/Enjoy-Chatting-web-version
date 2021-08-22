  var message = document.getElementById('messages');
  var text = document.getElementById('text');
  var send = document.getElementById('send');

  send.addEventListener("click", function(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML = text.value;
    messages.appendChild(newMessage);
    text.value = "";
  });

  text.addEventListener("keyup", function(event){
    var key = event.which || event.keycode;
    if(key == 13)
    {
      event.preventDefault();
      
      var newMessage = document.createElement("li");
      newMessage.innerHTML = text.value;
      messages.appendChild(newMessage);
      text.value = "";
    }
  });

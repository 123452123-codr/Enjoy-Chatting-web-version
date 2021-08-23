  var message = document.getElementById('messages');
  var text = document.getElementById('text');
  var send = document.getElementById('send');

  send.addEventListener("click", function(){
      var selfdiv = document.createElement("div");
      selfdiv.classList.add('container');
      var selfavatar = document.createElement("img");
      selfavatar.src = ("Chat wallpaper.jpg");
      selfavatar.alt = ("Avtar");
      var selfmessage = document.createElement("p");
      selfmessage.innerHTML = text.value;
      selfdiv.appendChild(selfavatar);
      selfdiv.appendChild(selfmessage);
      message.appendChild(selfdiv);
      text.value = "";
  });
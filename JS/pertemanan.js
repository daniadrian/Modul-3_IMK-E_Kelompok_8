function changeIcon(anchor) {
  var icon = anchor.querySelector("i.fa-plus");
  icon.classList.toggle("fa-plus");
  icon.classList.toggle("fa-check");
}

function changeName(anchor) {
  var parent = anchor.parentNode.parentNode;
  var name = parent.querySelector("#name").textContent;
  var title = document.getElementById("nama-teman");
  title.textContent = name;
}

function chat(anchor) {
  var chatbox = document.getElementById("chat");
  var text = anchor.parentNode.parentNode.querySelector("#chat-input").value;
  if (text != "") {
    chatbox.innerHTML += '<div class="msg sent sec">' + text + "</div>";
  }
  document.getElementById("chat-input").value = "";
}

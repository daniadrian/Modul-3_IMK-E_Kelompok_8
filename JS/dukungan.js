function kirimPertanyaan(anchor) {
    var chatbox = document.getElementById("list-faq");
    var text = anchor.parentNode.parentNode.parentNode.querySelector("#faq-input").value;

    if (text != '') {
        chatbox.innerHTML += '<div class="row my-1 border border-2 border-black"><p>Q : ' + text + '</p></div>';
    }

    document.getElementById('chat-input').value = '';
}
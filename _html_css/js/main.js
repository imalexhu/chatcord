
const socket = io();
const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');



socket.on('message', (msg) => {

    let temp = document.createElement('div');
    temp.classList.add('message');

    temp.innerHTML = `<p class="meta">Brad <span>9:12pm</span></p>
    <p class="text">
        ${msg}
    </p>`

    chatMessages.appendChild(temp);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

chatForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const msg = e.target.elements.msg.value;

    socket.emit('chatMessage', msg);

    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();





})


// Create new channel in side bar
const addChannel = () => {
    let newchannel = prompt('Introduce el nombre del canal a crear');
    //channels.push(newchannel);
    return document.getElementById('box-channel-menu').innerHTML += `<div class="side-channel"><span onclick="openChat()"># ${newchannel}</span></div>`
    
}

// Create new direct chat in side bar

const addDirect = () => {
    let newchannel = prompt('Introduce el nombre del canal a crear');
    //directs.push(newchannel);
    return document.getElementById('box-direct-menu').innerHTML += `<div class="side-channel"><span onclick="openChat()"># ${newchannel}</span></div>`
    
}

//
const send = () => {
    if (event.keyCode == 13) {

        let msg = document.getElementById('write-text').value;
        let user = document.getElementById('user-side-menu').textContent;
        let date = new Date();
        let time = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

        document.getElementById('write-text').value = '';

        return document.getElementById('chat-view-content').innerHTML += `<div class="bubble-msg">
        <input type="image" src="./media/img/user.png" alt="user-img" class="bubble-msg-image">
        <span class="bubble-msg-user">${user}</span>
        <span class="bubble-msg-time">${time}</span>
        <p class="bubble-msg-text">${msg}</p>
        </div>`, document.getElementById('chat-view').scrollTop = document.getElementById('chat-view').scrollHeight;
        
    }
    
        
}

const openChat = () => {
    let chat = document.getElementById('chat-view-content').innerHTML
    console.log(chat)
}




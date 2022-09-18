class Chat {

    constructor(name, content) {
        this.name = name;
        this.content = content;
    }
}

// This array will save all chat objects
let array = []
let chat_index = undefined

if (chat_index == undefined) {
    document.getElementById('chat-view').style.background = 'grey'
}

// Create new channel in side bar
const addChannel = () => {
    
    let namechannel = prompt('Introduce el nombre del canal a crear');
    let chat = new Chat(namechannel, '');
    
    return document.getElementById('box-channel-menu').innerHTML += `<div class="side-channel" onclick="openChat(this)">${chat.name}</div>`, array.push(chat)
}

// Create new direct chat in side bar

const addDirect = () => {
    let namechannel = prompt('Introduce el nombre del canal a crear');
    let chat = new Chat(namechannel, ''); 
    //directs.push(newchannel);
    return document.getElementById('box-direct-menu').innerHTML += `<div class="side-channel" onclick="openChat(this)">${chat.name}</div>`, array.push(chat)
    
}

// Send message function
const send = () => {
    if (event.keyCode == 13) {
        if (document.getElementById('write-text').value == '') {
            return;
        }else{
            let msg = document.getElementById('write-text').value;
            let user = document.getElementById('user-side-menu').textContent;
            let date = new Date();
            let time = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

            document.getElementById('write-text').value = '';
            let messageHtml = `<div class="bubble-msg">
            <input type="image" src="./media/img/user.png" alt="user-img" class="bubble-msg-image">
            <span class="bubble-msg-user">${user}</span>
            <span class="bubble-msg-time">${time}</span>
            <p class="bubble-msg-text">${msg}</p>
            </div>`;
            
            

            return document.getElementById('chat-view-content').innerHTML += messageHtml, document.getElementById('chat-view').scrollTop = document.getElementById('chat-view').scrollHeight, array[chat_index].content += messageHtml;
            }
        
        
    }
       
}
// Open selected chat 
const openChat = (value) => {
    let chat = value.textContent
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (chat == array[i].name) {
            chat_index = i
            document.getElementById('chat-view').style.background = 'white'
            document.getElementById('write-msg-box').innerHTML = '<input type="text" id="write-text" onkeypress="send()"></input>'
        }
    }
    
    return document.getElementById('chat-view-content').innerHTML = array[chat_index].content   

}

// Search  message
const searchMessage = () => {
    const search = prompt("¿Que mensaje quieres buscar?")
    let text = "La busqueda se encuentra en "
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        if(e.content.search(search) >= 0){
            text += e.name + ' ';
        }
    }
    return alert(text);
}
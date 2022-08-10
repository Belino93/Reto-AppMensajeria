// Create new channel in side bar
const addChannel = () => {
    let newchannel = prompt('Introduce el nombre del canal a crear');

    return document.getElementById('box-channel-menu').innerHTML += `<div class="side-channel"># ${newchannel}</div>`
    
}

// Create new direct chat in side bar

const addDirect = () => {
    let newchannel = prompt('Introduce el nombre del canal a crear');

    return document.getElementById('box-direct-menu').innerHTML += `<div class="side-channel"># ${newchannel}</div>`
    
}

//
const send = () => {
    console.log(document.getElementById('write-msg').value)
    
}
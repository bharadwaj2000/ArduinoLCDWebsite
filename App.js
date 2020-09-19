function led(message){
    fetch('http://localhost:3300/led/'+message,{
        method:'POST'
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log('error');
    });
}


function sendMessage(){
    let message = document.getElementById('input').value
    fetch('http://localhost:3300/'+message,{
        method:'POST'
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log("error");
    });
}

var input = document.querySelector('#input');
input.addEventListener("keypress",function (event){
    if(event.keyCode === 13){
        event.preventDefault();
        sendMessage();
    }
})
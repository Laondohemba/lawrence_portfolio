function sendMessage(){
    let subject = document.getElementById('subject').value;
    let messageBody = document.getElementById('message').value;

    let url = 'https://wa.me/+2348160200828?text='
    + 'Subject: ' + subject + '%0a' + '%0a'
    + 'Message: ' + messageBody;

        return window.open(url, "_blank").focus();
}

document.getElementById('send').addEventListener("click", function(){
    sendMessage();
})
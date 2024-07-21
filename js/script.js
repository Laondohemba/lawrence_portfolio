function sendMessage(){
    let subject = document.getElementById('subject').value;
    let messageBody = document.getElementById('message').value;

    let url = 'mailto:laondohemba@gmail.com?text='
    + subject + '%0a' + '%0a' + messageBody;

        return window.open(url, "_blank").focus();
}

document.getElementById('send').addEventListener("click", function(){
    sendMessage();
})
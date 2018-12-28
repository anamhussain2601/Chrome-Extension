document.getElementById("settings-button").addEventListener('click', openSettings)

function openSettings() {
    document.getElementById("settings").classList.toggle("settings-open");
 }

 var userName;
 function saveName() {
    localStorage.setItem('receivedName', userName);
}

var userName = localStorage.getItem('receivedName');

if (userName == null) {
    userName = "friend";
 }

 function changeName() {
    userName = document.getElementById("name-input").value;
    saveName();
    getGreeting();//
 }
 document.getElementById("name-form").addEventListener('submit', function(e) {
    e.preventDefault()
    changeName();
 });

 function getGreeting() {
    document.getElementById("greeting").innerHTML  = `Hello, ${userName}. Enjoy your day!`;
 }
 
// how to accept user input
// 1. EASY WAY = windows prompt
// 2. PROFESSIONAL WAY = HTML textbox

let username;
username = window.prompt("whats your username");
console.log(username);



 document.getElementById("mySubmit").onclick = function(){
   username = document.getElementById("myText").value;
   document.getElementById("myH1").textContent = `Hello ${username}`
    console.log(username);
 }
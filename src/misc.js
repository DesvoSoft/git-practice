document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = `The purpose of this page is to experiment with JS`;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value
    document.getElementById("myH1").textContent = `Hello ${username}`;
}
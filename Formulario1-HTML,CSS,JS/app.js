let signUp = document.getElementById("signUp");
let logIn = document.getElementById("logIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

logIn.onclick = function(){
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    logIn.classList.remove("disable");
}

signUp.onclick = function(){
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    logIn.classList.add("disable");
}

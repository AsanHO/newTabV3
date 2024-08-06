const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onClick(){
    console.log(loginInput.value);
    alert(loginInput.value);
}

loginButton.addEventListener("click",onClick)
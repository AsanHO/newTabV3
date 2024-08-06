const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onClick(){
    console.log(loginInput.value);
}

function onSubmit(fxxk){
    fxxk.preventDefault();
    console.log(fxxk);
    console.log(loginInput.value);
}

loginForm.addEventListener("submit",onSubmit);
loginButton.addEventListener("click",onClick);
const HIDDEN = "hidden";
const USERNAME = "username";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const welcomeText = document.querySelector("h1");

const savedUsername = localStorage.getItem(USERNAME);


function onClick(){
    console.log(loginInput.value);
}
function showUsername(name){
    loginForm.classList.add(HIDDEN);
    welcomeText.classList.remove(HIDDEN);
    welcomeText.innerText = `환영합니다. ${name}`;
}
function onSubmit(event){
    event.preventDefault();
    //이벤트리스너에 함수를 넣었기 때문에 자동으로 생기는 메소드임! 걱정 노노 
    const username = loginInput.value;
    // console.log(event);
    // console.log(username);
    localStorage.setItem(USERNAME,username);
    showUsername(username);
}

loginForm.addEventListener("submit",onSubmit);
loginButton.addEventListener("click",onClick);


if (savedUsername !== null){
    loginForm.classList.add(HIDDEN);
    welcomeText.classList.remove(HIDDEN);
    showUsername(savedUsername);
}
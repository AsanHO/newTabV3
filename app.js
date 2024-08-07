const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const welcomeText = document.querySelector("h1");


function onClick(){
    console.log(loginInput.value);
}

function onSubmit(event){
    event.preventDefault();
    //이벤트리스너에 함수를 넣었기 때문에 자동으로 생기는 메소드임! 걱정 노노 
    console.log(event);
    console.log(loginInput.value);
    loginForm.classList.add('hidden');
    welcomeText.classList.remove('hidden');
    welcomeText.innerText = loginInput.value;
}

loginForm.addEventListener("submit",onSubmit);
loginButton.addEventListener("click",onClick);
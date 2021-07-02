const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const on_login_submit = (event) =>{
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName); // 값 저장
    paintGreetings(userName);
}

const paintGreetings = (username) =>{ // 자주 사용되는 코드는 이렇게 함수화 시켜서 중복을 줄일 수 있다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 저장된 값을 가져옴

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", on_login_submit);
}else{
    paintGreetings(savedUsername);
}


// localStorage는 브라우저에 값을 저장 시켜 새로고침하면 리셋 되는 문제점을 해결할 수 있다.
// localStorage.setItem 을 통해서 저장할 수 있다.
// localstorage.getItem을 통해서 저장된 key값을 가져올 수 있다.

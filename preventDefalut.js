const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const on_login_submit = (event) =>{
   event.preventDefault();
   console.log(event);
}


loginForm.addEventListener("submit", on_login_submit)

let usernames = ["Harry", "Daisy", "Michael", "Sarah", "Sally"];
let form = document.getElementById('registration-form');
form.addEventListener('submit', handleSubmit);
let errorMsg = document.getElementById('errors');
let fillUsername = document.getElementById('created-name');
let errorPwd = document.getElementById('password-error');
let formLogin =document.getElementById('login-form');
formLogin.addEventListener('submit', handleSubmit);



let showLogin = document.getElementById("login");
showLogin.addEventListener("click", onClickLogin);
function onClickLogin(event) {
 document.getElementById("form-table2").style.visibility = "visible";
 document.getElementById("form-table1").style.visibility="collapse";
 
}

let showReg = document.getElementById("register");
showReg.addEventListener("click", onClickReg);
function onClickReg(event){
  document.getElementById("form-table1").style.visibility = "visible";
 document.getElementById("form-table2").style.visibility="collapse";
 

}





function clearFields() {
  document.getElementById('email').value = '';
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  document.getElementById('repeat-password').value = '';
  errorMsg.innerHTML = '';
  errorPwd.innerHTML = '';

}

function clearLogin() {
  document.getElementById('username2').value = '';
  document.getElementById('password2').value = '';

}





function handleSubmit(event) {
  event.preventDefault();
  //let name = form.elements.username.value;

if (this.id=="registration-form") {

  let name = document.getElementById('username').value;

  let password1 = form.elements['password'].value;
  let password2 = form.elements['repeat-password'].value;

  if ((usernames.includes(name)) && (password1 !== password2)) {

    errorMsg.innerHTML = `Sorry, the username ${name} is already in use. Please choose another username.`;



    errorPwd.innerHTML = "Please ensure your passwords match.";
    errorPwd.style.display = 'block';

  } else if ((usernames.includes(name)) && (password1 == password2)) {

    errorMsg.innerHTML = `Sorry, the username ${name} is already in use. Please choose another username.`;
    errorPwd.innerHTML = '';
  } else if ((!(usernames.includes(name))) && (password1 !== password2)) {

    let errorPwd = document.getElementById('password-error');
    errorPwd.innerHTML = `Please ensure your passwords match.`;
    errorPwd.style.display = 'block';
    errorMsg.innerHTML = '';
    document.getElementById("info-table").style.visibility = "visible";

  } else {
    fillUsername.innerHTML = name;
    usernames.push(name);
    form.submit();
    console.log(usernames);
    clearFields();
    document.getElementById("info-table").style.visibility = "visible";
    document.getElementById("form-table2").style.visibility = "collapse";
 document.getElementById("form-table1").style.visibility="collapse";


  }
} else if (this.id='login-form'){


  let nameLogin = document.getElementById('username2').value;
  formLogin.submit();
  fillUsername.innerHTML = nameLogin;
  clearLogin();
  document.getElementById("info-table").style.visibility = "visible";
    document.getElementById("form-table2").style.visibility = "collapse";
 document.getElementById("form-table1").style.visibility="collapse";

}


 }



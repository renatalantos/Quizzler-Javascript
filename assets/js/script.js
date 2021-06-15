let usernames = ["Harry", "Daisy", "Michael", "Sarah", "Sally"];
let form = document.getElementById('registration-form');
form.addEventListener('submit', handleSubmit);
let errorMsg = document.getElementById('errors');
let fillUsername = document.getElementById('created-name');
let errorPwd = document.getElementById('password-error');
let formLogin = document.getElementById('login-form');
formLogin.addEventListener('submit', handleSubmit);
let showLogin = document.getElementById("login");
showLogin.addEventListener("click", onClickLogin);
let showReg = document.getElementById("register");
showReg.addEventListener("click", onClickReg);
let regMsg = document.getElementById('reg-msg');
let startBtn = document.getElementById('start-btn');
startBtn.addEventListener("click", startGame);
let buttonArea = document.getElementById('hide-btns');
//let nextBtn = document.getElementById('next-btn');
//nextBtn.addEventListener('click', nextPage);


function onClickLogin(event) {
  document.getElementById("form-table2").style.visibility = "visible";
  document.getElementById("form-table1").style.visibility = "collapse";

}


function onClickReg(event) {
  document.getElementById("form-table1").style.visibility = "visible";
  document.getElementById("form-table2").style.visibility = "collapse";

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

//colorBtnRed()

function colorBtnRed() {
  document.getElementById("btn2").style.backgroundColor = "red";

  document.getElementById("btn2").classList.toggle("animate");


}
//colorBtnGreen()
function colorBtnGreen() {
  document.getElementById("btn2").style.backgroundColor = "green";

  document.getElementById("btn2").classList.toggle("animate");


}


function handleSubmit(event) {
  event.preventDefault();
  //let name = form.elements.username.value;

  if (this.id == "registration-form") {


    let name = document.getElementById('username').value;
    let emailAddress = document.getElementById('email').value;

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
      document.getElementById("info-table").style.visibility = "collapse";

    } else {
      fillUsername.innerHTML = name;

      usernames.push(name);
      form.submit();
      console.log(usernames);
      clearFields();


      regMsg.innerHTML = `Hello ${name}, thank you for registering. A confirmation email has been sent to ${emailAddress}. Enjoy playing!`;
      regMsg.style.display = "block";

      document.getElementById("info-table").style.visibility = "visible";
      document.getElementById("form-table2").style.visibility = "collapse";
      document.getElementById("form-table1").style.visibility = "collapse";

    }


  } else if (this.id = 'login-form') {


    let nameLogin = document.getElementById('username2').value;
    formLogin.submit();
    fillUsername.innerHTML = nameLogin;
    clearLogin();

    document.getElementById("info-table").style.visibility = "visible";
    document.getElementById("form-table2").style.visibility = "collapse";
    document.getElementById("form-table1").style.visibility = "collapse";


  }


}
function startGame() {

  buttonArea.style.visibility = "visible";
  regMsg.style.visibility = "hidden";
  startBtn.style.visibility = "hidden";
  plusImage();

}


//let imgs = ['img', 'img2', 'img3'];
//let qs = ['q1', 'q2', 'q3'];
//let imgsAndQs = [];


/*function iterateCounters(imgs, qs) {
  for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
      if (qs[i]===imgs[j]){

        imgsAndQs.push([img[i], q[j]]);
        return imgsAndQs;


      }
    }
  }

}*/

let imageIndex = 1;
showImages(imageIndex);
//let questionIndex = 0;
//showQuestions(questionIndex);

function plusImage() {
  showImages(imageIndex += 1);
}


/*together with this, add function for questions and answer to next button*/
function showImages(n) {
  let image = document.getElementsByClassName('slide');
 /*if (n > image.length) {
    imageIndex = 1
  }
  if (n < 1) {
    imageIndex = image.length
  }*/
  for (i = 0; i < image.length; i++) {
    image[i].style.display = "none";
  }
  image[imageIndex +1].style.display = "block";
}





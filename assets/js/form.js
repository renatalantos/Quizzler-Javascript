window.onload = startPage;
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
let nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', nextPage);
let questionArea = document.getElementById('question');
let readyQuestion = document.getElementById('ready')
let infoTable = document.getElementById('info-table');



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
  document.getElementById("btn2").style.Color = "green";

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
      regMsg.style.visibility = "visible";
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





const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.answer-text'));
const scoreText = document.querySelector('#to-fill-score');
const photoArea = document.querySelector('#photo');

let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const score_points = 100;
const max_questions = 15;
let currentImage = currentQuestion;
let imageCounter= questionCounter;
let availableImages = availableQuestions;




let questions = [

  {

    url: './assets/images/alhambra.jpg',
    question: 'Where is the Alhambra, famous for its Moorish architecture?',

    choice1: 'Granada, Spain',
    choice2: 'Rabat, Morocco',
    choice3: 'Tunis, Tunisia',
    choice4: 'Istanbul, Turkey',
    answer: 1,
  },

  {
    url: './assets/images/dali.jpg',
    question: 'What is the name of the art trend that Salvador Dali is a representant of?',

    choice1: 'Impressionism',
    choice2: 'Surrealism',
    choice3: 'Cubism',
    choice4: 'Expressionism',
    answer: 2,
  },

  {
    url: './assets/images/gaudi.jpg',
    question: 'What was the name of the architect who designed the above building?',

    choice1: 'Hundertwasser',
    choice2: 'Le Corbusier',
    choice3: 'Hassan Fathy',
    choice4: 'Antonio Gaudi',
    answer: 4,
  },


  {
    url: './assets/images/klimt.jpg',
    question: 'What is the name of the art trend that Gustav Klimt is a representant of?',

    choice1: 'Art Nouveau',
    choice2: 'Reneissance',
    choice3: 'Baroque',
    choice4: 'Expressionism',
    answer: 4,
  },

]

function startPage() {
  startBtn.style.visibility = "visible";
  nextBtn.style.visibility = "hidden";
  buttonArea.style.visibility = "hidden";
  questionArea.style.visibility = "hidden";
  readyQuestion.style.visibility = "visible";
  photoArea.style.visibility="hidden";
  questionCounter++;
  
availableQuestions = [...questions];

}





function startGame() {
  photoArea.style.visibility = "visible";
  buttonArea.style.visibility = "visible";
  startBtn.style.visibility = "hidden";
  getNewQuestion();
  nextBtn.style.visibility = "visible";
  questionArea.style.visibility = "visible";
  readyQuestion.style.visibility = "hidden";

  let mainImage = document.getElementById('main-image');

  function removeMainImage() {
    mainImage.remove();
  }

  removeMainImage();

  function removeRegMsg() {
    regMsg.remove();
  }

  removeRegMsg();

}


questionCounter++;

  availableQuestions = [...questions];

getNewQuestion = () => {




  if ((availableQuestions.length === 0) || (questionCounter > max_questions)) {
    localStorage.setItem('mostRecentScore', score);
    buttonArea.style.visibility = "hidden";
    startBtn.style.visibility = "visible";
    questionArea.style.visibility = "visible";


  }

  questionCounter++;
  imageCounter++;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;
  //currentImage = availableQuestions[questionsIndex];
  //let image = questions[questionsIndex].img;
  //photoArea.innerHTML += "<img src=\"" + image + "\" width=\"200\" height=\"200\"><br>";
  // photoArea.innerHTML += "<img src=" + image.url + " />;"
  photoArea.innerHTML += "<img src=" + availableQuestions[questionsIndex].url + " />;"




  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];


  })

  availableQuestions.splice(questionsIndex, 1);
  availableImages.splice(questionsIndex, 1);
  acceptingAnswers = true;

}

choices.forEach(choice => {
  choice.addEventListener('click', e => {

    if (!acceptingAnswers)
      buttonArea.style.visibility = "hidden";
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];
    /*    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply = 'correct') {
          incrementScore(score_points)
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();


          }, 1000)*/



  })
})

/*incrementScore = num => {
score+=num;
scoreText.innerText=score;

}*/


function nextPage() {



  nextBtn.style.visibility = "visible";
  questionArea.style.visibility = "visible";
  getNewQuestion();



}


nextPage();


/*function endGame(){};*/
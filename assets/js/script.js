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
let mainImage = document.getElementById('main-image');



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
const numberOfGames = document.querySelector('#to-fill-all-games');
//const allScore = document.querySelector('#to-fill-all-score');


let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const score_points = 100;
const max_questions = 7;
//let number_of_games=0;
//let score_in_all_games=1;







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
    answer: 1,
  },


  {
    url: './assets/images/frida_kahlo.jpg',
    question: 'Which actress plays artist Frida Kahlo in the 2002 movie "Frida"?',

    choice1: 'Eva Mendes',
    choice2: 'Sandra Bullock',
    choice3: 'Salma Hayek',
    choice4: 'Rachel Weisz',
    answer: 3,
  },

  {
    url: './assets/images/knossos.jpg',
    question: 'What is the mythical half man, half bull creature that by legend lived in Knossos, Crete?',

    choice1: 'Ulysses',
    choice2: 'Minotaur',
    choice3: 'Centaur',
    choice4: 'Nymph',
    answer: 2,
  },

  {
    url: './assets/images/lautrec.jpg',
    question: 'What technology did French artist Toulouse-Lautrec reinvent for his posters?',

    choice1: 'Calligraphy',
    choice2: 'Ortography',
    choice3: 'Lithography',
    choice4: 'Biography',
    answer: 3,
  },

  {
    url: './assets/images/last_supper.jpg',
    question: "In which movie is Leonardo's Last Supper mirrored?",

    choice1: 'The Dirty Dozen',
    choice2: 'The Da Vinci Code',
    choice3: "The Devil's Advocate",
    choice4: "Ocean's Twelve",
    answer: 1,
  },

  {
    url: './assets/images/marc_chagall.jpg',
    question: 'Who was the above picture painted by?',

    choice1: 'Pablo Picasso',
    choice2: 'Edvard Munch',
    choice3: 'Paul Klee',
    choice4: 'Marc Chagall',
    answer: 4,
  },

  {
    url: './assets/images/mero_nubia.jpg',
    question: 'Where are the above pyramids?',

    choice1: 'Cholula, Mexico',
    choice2: 'Ghiza, Egypt',
    choice3: 'Meroe, Sudan',
    choice4: 'Caral, Peru',
    answer: 3,
  },

  {
    url: './assets/images/miro.jpg',
    question: 'Which artist has paintings that reinvoke the childlike?',

    choice1: 'Pablo Picasso',
    choice2: 'Joan Miro',
    choice3: 'Vasily Kandinsky',
    choice4: 'Paul Klee',
    answer: 2,
  },

  {
    url: './assets/images/monet.jpg',
    question: 'Which French artist painted the above picture?',

    choice1: 'Claude Monet',
    choice2: 'Edouard Manet',
    choice3: 'Georges Seurat',
    choice4: 'Edgar Degas',
    answer: 1,
  },

  {
    url: './assets/images/moore.jpg',
    question: 'Who is the sculptor that created the above piece of art?',

    choice1: 'Thomas Moore',
    choice2: 'Roger Moore',
    choice3: 'Michael Barrymore',
    choice4: 'Henry Moore',
    answer: 4,
  },

  {
    url: './assets/images/nyugatip.jpg',
    question: 'Where is the above train station, designed by Gustav Eiffel?',

    choice1: 'Paris, France',
    choice2: 'Budapest, Hungary',
    choice3: 'London, England',
    choice4: 'Vienna, Austria',
    answer: 2,
  },

  {
    url: './assets/images/harlequins.jpg',
    question: 'Who created the above picture?',

    choice1: 'Amadeo Modigliani',
    choice2: 'Edgar Degas',
    choice3: 'Pablo Picasso',
    choice4: 'Paul Cezanne',
    answer: 3,
  },

  {
    url: './assets/images/pula.jpg',
    question: 'Where is the above colosseum?',

    choice1: 'Pula, Croatia',
    choice2: 'Italy, Rome',
    choice3: 'Malaga, Spain',
    choice4: 'Arles, France',
    answer: 1,
  },

  {
    url: './assets/images/sashiko.jpg',
    question: 'What is the name of the traditional Japanese embroidery, depicted above?',

    choice1: 'Michiko',
    choice2: 'Tamago',
    choice3: 'Sashiko',
    choice4: 'Mariko',
    answer: 3,
  },

  {
    url: './assets/images/st_peters.jpg',
    question: "Which famous artist redesigned St. Peter's Basilica in the 16th century?",

    choice1: 'Michelangelo',
    choice2: 'Verrochio',
    choice3: 'Leonardo da Vinci',
    choice4: 'Boticelli',
    answer: 1,
  },

  {
    url: './assets/images/van_gogh.jpg',
    question: "Which famous artist was heavily influenced by Japanese prints in his art?",

    choice1: 'Rembrandt',
    choice2: 'Van Dyke',
    choice3: 'Paul Gaugin',
    choice4: 'Vincent Van Gogh',
    answer: 4,
  },

  {
    url: './assets/images/william_turner.jpg',
    question: "Which city is depicted in this painting by William Turner?",

    choice1: 'London',
    choice2: 'Glasgow',
    choice3: 'Venice',
    choice4: 'Marseille',
    answer: 3,
  },


]

function startPage() {
  startBtn.style.visibility = "visible";
  nextBtn.style.visibility = "hidden";
  buttonArea.style.visibility = "hidden";
  readyQuestion.style.visibility = "visible";

}

function nextPage() {
  nextBtn.style.visibility = "visible";
  questionArea.style.visibility = "visible";
  getNewQuestion();



}


function startGame() {
  photoArea.style.visibility = "visible";
  buttonArea.style.visibility = "visible";
  //startBtn.style.visibility = "hidden";
  nextBtn.style.visibility = "visible";
  questionArea.style.visibility = "visible";


  function removeRegMsg() {
    regMsg.remove();
  }

  function removeMainImage() {
    mainImage.remove();
  }

  function removeReadyQuestion() {
    readyQuestion.remove();

  }

  function removeStartBtn() {

    startBtn.remove();
  }

  removeMainImage();
  removeRegMsg();
  removeMainImage();
  removeReadyQuestion();
  removeStartBtn();
  nextPage();


}


questionCounter++;
availableQuestions = availableImages = [...questions];

getNewQuestion = () => {

 
  
  if /*((availableQuestions.length === 0) ||*/ (questionCounter == max_questions) {
    /*  localStorage.setItem('mostRecentScore', score);*/

    numberOfGames.innerText = ('The End!');
    buttonArea.style.visibility="hidden"
    
  } else {
    

    const questionsIndex = imageIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = currentImage = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    let image = availableImages[imageIndex].url;

    photoArea.innerHTML = "<img src=\"" + image + "\" width=\"auto\" height=\"auto\"><br>";



    choices.forEach(choice => {
      const number = choice.dataset['number'];
      choice.innerText = currentQuestion['choice' + number];

    })


    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
  }

}


//Problems start here

choices.forEach(choice => {
  choice.addEventListener('click', e => {

    if (!acceptingAnswers) return

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];
    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

    if (classToApply === 'correct') {
      incrementScore(score_points)
    }


    selectedChoice.parentElement.classList.add(classToApply);


    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);


    }, 1000)

  })
})

incrementScore = num => {
  score += num;
  scoreText.innerText = score;



}

/*incrementNumberOfGames = num => {
  number_of_games+=num;
  numberOfGames.innerText = number_of_games;

}*/

/*incrementAllScore = num => {
score+=score_in_all_games=num;
allScore.innerText=score_in_all_games;

}*/


/*function endGame() {
  /* incrementNumberOfGames;
   incrementAllScore;*/
 /* startPage;


}*/
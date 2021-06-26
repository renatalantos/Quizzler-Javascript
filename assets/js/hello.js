// On window onload, a start page with a specific content and design will display by calling the startPage() function.
window.onload = startPage;
// These constants define the immediate content on the main page and during and after the game
const infoTable = document.querySelector('#info-table');
//let fillUsername = document.querySelector('#username');
const numberOfGames = document.querySelector('#to-fill-all-games');
const scoreText = document.querySelector('#to-fill-score');
const allScore = document.querySelector('#to-fill-all-score');
const photoContainer = document.querySelector('#photo-area');
const mainImage = document.querySelector('#main-image');
const photoArea = document.querySelector('#photo');
const questionContainer = document.querySelector('#question-area');
//const question = document.querySelector('#question');
const readyQuestion = document.querySelector('#ready');
const actualQuestion = document.querySelector('#question');
const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', startGame);
const buttonArea = document.querySelector('#answer-area');
const selections = Array.from(document.querySelectorAll('.answer-btn'));
const nextBtn = document.querySelector('#next-btn');
nextBtn.addEventListener('click', nextPage);
const allButtons = document.querySelector('#button-area');
const result = document.querySelector('#result');
const endTable = document.querySelector('#end-table');
const titleArea = document.querySelector('#title-area');
const wrapAround = document.querySelector('#wrap-around');

/*The below variables define question, counter, score, number of games before the game starts. 
They are either empty or null as their content/value will be added to/incremented during the game.*/
let currentQuestion = {}
let userAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let number_of_games = 0;
let score_in_all_games = 0;

// The below constants define the score points and number of questions that won't change during the game.
const score_points = 100;
const max_questions = 5;

const questions = [

  {

    url: './assets/images/alhambra.jpg',
    question: 'Where is the Alhambra, famous for its Moorish architecture?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Granada, Spain',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Rabat, Morocco',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Tunis, Tunisia',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Istanbul, Turkey',
    answer: 1,
  },

  {
    url: './assets/images/dali.jpg',
    question: 'What is the name of the art trend that Salvador Dali is a representant of?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Impressionism',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Surrealism',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Cubism',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Expressionism',
    answer: 2,
  },

  {
    url: './assets/images/gaudi.jpg',
    question: 'What was the name of the architect who designed the above building?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Hundertwasser',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Le Corbusier',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Hassan Fathy',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Antonio Gaudi',
    answer: 4,
  },


  {
    url: './assets/images/klimt.jpg',
    question: 'What is the name of the art trend that Gustav Klimt is a representant of?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Art Nouveau',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Reneissance',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Baroque',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Expressionism',
    answer: 1,
  },


  {
    url: './assets/images/frida_kahlo.jpg',
    question: 'Which actress plays artist Frida Kahlo in the 2002 movie "Frida"?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Eva Mendes',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Sandra Bullock',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Salma Hayek',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Rachel Weisz',
    answer: 3,
  },

  {
    url: './assets/images/knossos.jpg',
    question: 'What is the mythical half man, half bull creature that by legend lived in Knossos, Crete?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Ulysses',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Minotaur',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Centaur',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Nymph',
    answer: 2,
  },

  {
    url: './assets/images/lautrec.jpg',
    question: 'What technology did French artist Toulouse-Lautrec reinvent for his posters?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Calligraphy',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Ortography',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Lithography',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Biography',
    answer: 3,
  },

  {
    url: './assets/images/last_supper.jpg',
    question: "In which movie is Leonardo's Last Supper acted out?",

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'The Dirty Dozen',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'The Da Vinci Code',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + "The Devil's Advocate",
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + "Ocean's Twelve",
    answer: 1,
  },

  {
    url: './assets/images/marc_chagall.jpg',
    question: 'Who was the above picture painted by?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Pablo Picasso',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Edvard Munch',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Paul Klee',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Marc Chagall',
    answer: 4,
  },

  {
    url: './assets/images/mero_nubia.jpg',
    question: 'Where are the above pyramids?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Cholula, Mexico',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Ghiza, Egypt',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Meroe, Sudan',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Caral, Peru',
    answer: 3,
  },

  {
    url: './assets/images/miro.jpg',
    question: 'Which artist has paintings that reinvoke the childlike?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Pablo Picasso',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Joan Miro',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Vasily Kandinsky',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Paul Klee',
    answer: 2,
  },

  {
    url: './assets/images/monet.jpg',
    question: 'Which French artist painted the above picture?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Claude Monet',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Edouard Manet',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Georges Seurat',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Edgar Degas',
    answer: 1,
  },

  {
    url: './assets/images/moore.jpg',
    question: 'Who is the sculptor that created the above piece of art?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Thomas Moore',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Roger Moore',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Michael Barrymore',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Henry Moore',
    answer: 4,
  },

  {
    url: './assets/images/nyugatip.jpg',
    question: 'Where is the above train station, designed by Gustav Eiffel?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Paris, France',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Budapest, Hungary',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'London, England',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Vienna, Austria',
    answer: 2,
  },

  {
    url: './assets/images/harlequins.jpg',
    question: 'Who created the above picture?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Amadeo Modigliani',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Edgar Degas',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Pablo Picasso',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Paul Cezanne',
    answer: 3,
  },

  {
    url: './assets/images/pula.jpg',
    question: 'Where is the above colosseum?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Pula, Croatia',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Italy, Rome',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Malaga, Spain',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Arles, France',
    answer: 1,
  },

  {
    url: './assets/images/sashiko.jpg',
    question: 'What is the name of the traditional Japanese embroidery, depicted above?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Michiko',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Tamago',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Sashiko',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Mariko',
    answer: 3,
  },

  {
    url: './assets/images/st_peters.jpg',
    question: "Which famous artist redesigned St. Peter's Basilica in the 16th century?",

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Michelangelo',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Verrochio',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Leonardo da Vinci',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Boticelli',
    answer: 1,
  },

  {
    url: './assets/images/van_gogh.jpg',
    question: "Which famous artist was heavily influenced by Japanese prints in his art?",

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Rembrandt',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Van Dyke',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Paul Gaugin',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Vincent Van Gogh',
    answer: 4,
  },

  {
    url: './assets/images/william_turner.jpg',
    question: "Which city is depicted in this painting by William Turner?",

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'London',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Glasgow',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Venice',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Marseille',
    answer: 3,
  },


  {
    url: './assets/images/andy_warhol.jpg',
    question: 'The original Andy Warhol "Factory" was called The _______',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Bronze Factory',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Diamond Factory',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Gold Factory',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Silver Factory',
    answer: 4,
  },

  {
    url: './assets/images/blue_horse.jpg',
    question: 'The painting Blue Horse by Franz Marc announced the birth of which art trend?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Dadaism',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Surrealism',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Fauvism',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Expressionism',
    answer: 4,
  },

  {
    url: './assets/images/cezanne.jpg',
    question: 'Which artist, whose painting you see above, was the forerunner of cubism?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Paul Cezanne',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Georges Seurat',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Francisco Goya',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Diego Velazquez',
    answer: 1,
  },

  {
    url: './assets/images/csontvary_kosztka.jpg',
    question: 'What is the name of the above painting by Hungarian artist Csontvary?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Temple of Baalbek',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Mount of Olives',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Theatre at Taormina',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Pompeii',
    answer: 3,
  },

  {
    url: './assets/images/garfield.jpg',
    question: 'What is the name of the cartoonist who created Garfield and Friends?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Albert Uderzo',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Jim Davis',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'René Goscinny',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Stephen Hillenburg',
    answer: 2,
  },

  {
    url: './assets/images/gaugin.jpg',
    question: 'Which book by Maugham is based on the life of French artist Paul Gaugin?',

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'The Moon and Sixpence',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Of Human Bondage',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'The Painted Veil',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Far Eastern Tales',
    answer: 1,
  },

  {
    url: './assets/images/kandinsky.jpg',
    question: "What would be a typical title of one of Kandinsky's works?",

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'The Sky Above 3',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Lady by the Lake 2',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Improvisation 5',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Suite # 3',
    answer: 3,
  },

  {
    url: './assets/images/matisse.jpg',
    question: "Who painted the above picture?",

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Marc Chagall',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Paul Cezanne',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Franz Marc',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Henry Matisse',
    answer: 4,
  },

  {
    url: './assets/images/modigliani.jpg',
    question: "What art influenced Modigliani's painting?",

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Polynesian art',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'African Art',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'South American Art',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Japanese Art',
    answer: 2,
  },

  {
    url: './assets/images/monty_python.jpg',
    question: "Which member of Monty Python was also the team's cartoonist?",

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'John Cleese',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Graham Chapman',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Terry Gilliam',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Terry Jones',
    answer: 3,
  },

  {
    url: './assets/images/vasarely.jpg',
    question: "Hungarian-French artist Vasarely was the representant of which art trend?",

    selection1: 'A' + '\xa0\xa0\xa0\xa0' + 'Op art',
    selection2: 'B' + '\xa0\xa0\xa0\xa0' + 'Cubism',
    selection3: 'C' + '\xa0\xa0\xa0\xa0' + 'Impressionism',
    selection4: 'D' + '\xa0\xa0\xa0\xa0' + 'Pop art',
    answer: 1,
  },


]

/* The below functions determine what elements are present on a page and how these elements behave before, 
during, after and at restart of the game.*/

/*This startPage() function determines what elements are on the start page, when user land on the page.
As the game is designed to be all on one page, certain elements will need to be removed/appended/hidden/made visible during the game
for space saving purposes. You will see this pattern in most functions. The startPage() function sets questionCounter and score to 0*/

function startPage() {
  startBtn.style.visibility = "visible";
  nextBtn.style.visibility = "hidden";
  buttonArea.style.visibility = "hidden";
  readyQuestion.style.visibility = "visible";
  photoArea.append(mainImage);
  endTable.style.visibility = "hidden";
  startBtn.innerText = "Start"

}

function nextPage() {
  nextBtn.style.visibility = "visible";
  actualQuestion.style.visibility = "visible";
  if (userAnswer === false) {
    buttonArea.classList.toggle("disabled");

  }
  userAnswer = true;
  questionCounter++;
  getNewQuestion();
  
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

function startGame() {
  
  availableQuestions = availableImages = [...questions];
  photoArea.style.visibility = "visible";
  buttonArea.style.visibility = "visible";
  nextBtn.style.visibility = "visible";
  actualQuestion.style.visibility = "visible";
  console.log('startGame()')
  removeMainImage();
  removeStartBtn();
  nextPage();
  endTable.remove();
  titleArea.remove();
  readyQuestion.remove();

}


//questionCounter++;


getNewQuestion = () => {
  console.log(questionCounter, max_questions, availableQuestions.length, 'test1')
  if (questionCounter > max_questions) {

    console.log(questionCounter, max_questions, availableQuestions.length, 'should end now')
    localStorage.setItem('mostRecentScore', score);
    // return window.location.assign('/end.html')

    numberOfGames.innerText = ('The End!');
    


    // startBtn.addEventListener('click', restartPage)

    endTable.style.visibility = "visible";
    startBtn.innerText = "Restart";

    endGame();

  } else {

    const questionsIndex = imageIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = currentImage = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    let image = availableImages[imageIndex].url;

    photoArea.innerHTML = "<img src=\"" + image + "\" width=\"auto\" height=\"auto\"><br>";

    selections.forEach(selection => {
      const number = selection.dataset['number'];
      selection.innerText = currentQuestion['selection' + number];

    })
    availableQuestions.splice(questionsIndex, 1);
    // userAnswer = true;



  }

}



selections.forEach(selection => {
  selection.addEventListener('click', e => {
    if (!userAnswer) return

    userAnswer = false;
    const selectedselection = e.target;
    const selectedAnswer = selectedselection.dataset['number'];
    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
    if (classToApply === 'correct') {
      incrementScore(score_points)
      result.innerHTML = `Correct! +${score_points} points!`
      result.style.color = "green";


    } else {
      result.innerHTML = "Incorrect! 0 points"
      result.style.color = "red";
    }

    selectedselection.classList.add(classToApply);

    setTimeout(() => {
      console.log(userAnswer)
      selectedselection.classList.remove(classToApply)
      const resDiv = document.querySelector('#res-div')
      resDiv.append(result.innerText = "")
      // console.log('set timeout')
      buttonArea.classList.toggle("disabled")
    }, 900)
  })

})



incrementNumberOfGames = num => {
  number_of_games += num;
  numberOfGames.innerText = number_of_games;
}

incrementAllScore = num => {
  score += score_in_all_games = num;
  allScore.innerText = score_in_all_games;
}

function endGame() {
  
  startBtn.remove()
  photoArea.remove();
  questionContainer.append(readyQuestion)
  readyQuestion.innerText = "Play again!"
  readyQuestion.style.color = "purple"
  actualQuestion.remove();
  buttonArea.remove();
  nextBtn.remove();
  wrapAround.append(titleArea)
  console.log(questionCounter)
  allButtons.prepend(startBtn)
  startBtn.style.visibility = "visible";
  allButtons.append(displayResults)
  console.log('endGame() function')
  startBtn.addEventListener('click', restartPage)
}




incrementScore = num => {
  score += num;
  scoreText.innerText = score;
}

const displayResults = document.querySelector('#end-table');
let numberOfQuestions = score / 100;
let username = document.querySelector('#username').value;
let info = document.querySelector('#info');
info.addEventListener('submit', handleSubmit)
const saveBtn = document.querySelector('#save-btn');
saveBtn.addEventListener('submit', handleSubmit)



function handleSubmit(event){
  event.preventDefault();
  let username = document.querySelector('#username').value;
  //username.innerText= username;
  info.submit();

if (numberOfQuestions == 0) 

  {displayResults.innerText = `Hello ${username}, thanks for playing. Oh, no! 0 score in this game. Play again to improve your score!`;

} else if ((numberOfQuestions > 0) && (numberOfQuestions <= 6)) {
  displayResults.innerText = `Hello ${username}, thanks for playing. You got ${numberOfQuestions} questions right. Great job! Play again for en even better result!`;

} else if ((numberOfQuestions > 6) && (numberOfQuestions <= 10)) {
  displayResults.innerText = `Hello ${username}, thanks for playing. You got ${numberOfQuestions} questions right. Great job! Play again for en even better result!`;

} else if ((numberOfQuestions > 10) && (10 < numberOfQuestions < 14)) {
  displayResults.innerText = `Hello ${username}, thanks for playing. You got ${numberOfQuestions} questions right. Great job! You do know your art!`;
} else {
  displayResults.innerText = `Hello ${username}, thanks for playing. You got all questions right. You really, really know your art!`;
}
}

allButtons.prepend(startBtn);


function restartPage() {
  score=0;
  scoreText.innerText=0;
  availableQuestions = availableImages = [...questions];
  startBtn.addEventListener('click', removeStartBtn())
  photoContainer.prepend(photoArea)
  questionCounter = 1;
  questionContainer.append(actualQuestion);
  allButtons.append(buttonArea);
  const resDiv = document.querySelector('#res-div')
  allButtons.append(resDiv)
  nextBtn.style.visibility = "visible";
  allButtons.append(nextBtn);
  console.log('restartPage() function')

}



//const username = document.querySelector('#username');
//const saveBtn = document.querySelector('#save-btn');
//const username = document.querySelector('#username');
//const username = document.querySelector('#username');
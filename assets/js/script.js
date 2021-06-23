window.onload = startPage;

let fillUsername = document.getElementById('created-name');
let startBtn = document.getElementById('start-btn');
startBtn.addEventListener("click", startGame);
let buttonArea = document.getElementById('answer-area');
let nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', nextPage);



let questionArea = document.getElementById('question');
let readyQuestion = document.getElementById('ready')
let infoTable = document.getElementById('info-table');
let mainImage = document.getElementById('main-image');



const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.answer-text'));
const scoreText = document.querySelector('#to-fill-score');
const photoArea = document.querySelector('#photo');
const numberOfGames = document.querySelector('#to-fill-all-games');
const allScore = document.querySelector('#to-fill-all-score');
const result = document.querySelector('#result');


let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const score_points = 100;
const max_questions = 15;
let number_of_games=0;
let score_in_all_games=1;



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
    question: "In which movie is Leonardo's Last Supper acted out?",

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


  {
    url: './assets/images/andy_warhol.jpg',
    question: 'The original Andy Warhol "Factory" was called The _______',

    choice1: 'Bronze Factory',
    choice2: 'Diamond Factory',
    choice3: 'Gold Factory',
    choice4: 'Silver Factory',
    answer: 4,
  },

  {
    url: './assets/images/blue_horse.jpg',
    question: 'The painting Blue Horse by Franz Marc announced the birth of which art trend?',

    choice1: 'Dadaism',
    choice2: 'Surrealism',
    choice3: 'Fauvism',
    choice4: 'Expressionism',
    answer: 4,
  },

  {
    url: './assets/images/cezanne.jpg',
    question: 'Which artist, whose painting you see above, was the forerunner of cubism?',

    choice1: 'Paul Cezanne',
    choice2: 'Georges Seurat',
    choice3: 'Francisco Goya',
    choice4: 'Diego Velazquez',
    answer: 1,
  },

  {
    url: './assets/images/csontvary_kosztka.jpg',
    question: 'What is the name of the above painting by Hungarian artist Csontvary?',

    choice1: 'Temple of Baalbek',
    choice2: 'Mount of Olives',
    choice3: 'Theatre at Taormina',
    choice4: 'Pompeii',
    answer: 3,
  },

  {
    url: './assets/images/garfield.jpg',
    question: 'What is the name of the cartoonist who created Garfield and Friends?',

    choice1: 'Albert Uderzo',
    choice2: 'Jim Davis',
    choice3: 'René Goscinny',
    choice4: 'Stephen Hillenburg',
    answer: 2,
  },

  {
    url: './assets/images/gaugin.jpg',
    question: 'Which book by Maugham is based on the life of French artist Paul Gaugin?',

    choice1: 'The Moon and Sixpence',
    choice2: 'Of Human Bondage',
    choice3: 'The Painted Veil',
    choice4: 'Far Eastern Tales',
    answer: 1,
  },

  {
    url: './assets/images/kandinsky.jpg',
    question: "What would be a typical title of one of Kandinsky's works?",

    choice1: 'The Sky Above 3',
    choice2: 'Lady by the Lake 2',
    choice3: 'Improvisation 5',
    choice4: 'Suite # 3',
    answer: 3,
  },

  {
    url: './assets/images/matisse.jpg',
    question: "Who painted the above picture?",

    choice1: 'Marc Chagall',
    choice2: 'Paul Cezanne',
    choice3: 'Franz Marc',
    choice4: 'Henry Matisse',
    answer: 4,
  },

  {
    url: './assets/images/modigliani.jpg',
    question: "What art influenced Modigliani's painting?",

    choice1: 'Polynesian art',
    choice2: 'African Art',
    choice3: 'South American Art',
    choice4: 'Japanese Art',
    answer: 2,
  },

  {
    url: './assets/images/monty_python.jpg',
    question: "Which member of Monty Python was also the team's cartoonist?",

    choice1: 'John Cleese',
    choice2: 'Graham Chapman',
    choice3: 'Terry Gilliam',
    choice4: 'Terry Jones',
    answer: 3,
  },

  {
    url: './assets/images/vasarely.jpg',
    question: "Hungarian-French artist Vasarely was the representant of which art trend?",

    choice1: 'Op art',
    choice2: 'Cubism',
    choice3: 'Impressionism',
    choice4: 'Pop art',
    answer: 1,
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
  questionCounter++;

  if (acceptingAnswers === false) {
    buttonArea.classList.toggle("disabled");
    acceptingAnswers = true;
  }
}



function startGame() {
  photoArea.style.visibility = "visible";
  buttonArea.style.visibility = "visible";
  //startBtn.style.visibility = "hidden";
  nextBtn.style.visibility = "visible";
  questionArea.style.visibility = "visible";


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
 // removeRegMsg();
  removeMainImage();
  removeReadyQuestion();
  removeStartBtn();
  nextPage();

}

//Problems start here

//questionCounter++;
availableQuestions = availableImages = [...questions];

getNewQuestion = () => {

  if ((availableQuestions.length === 0) || (questionCounter >= max_questions)) {
     localStorage.setItem('mostRecentScore', score);
     return window.location.assign('/end.html')

    /* numberOfGames.innerText = ('The End!');*/
   buttonArea.style.visibility = "hidden"

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
    // acceptingAnswers = true;

  }

}



choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return 

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];
    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
    


    if (classToApply === 'correct') {
      incrementScore(score_points)
      result.innerHTML = `Correct! +${score_points} points!`
      result.style.color = "green";


    } else {
      result.innerHTML = "Incorrect! 0points"
      result.style.color = "red";
    }

    // buttonArea.classList.toggle("disabled")

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      console.log(acceptingAnswers)
      selectedChoice.parentElement.classList.remove(classToApply)
      const resDiv = document.querySelector('#res-div')
      resDiv.append(result.innerText = "")
      console.log('set timout')
      buttonArea.classList.toggle("disabled")
    }, 900)
  })

})

incrementScore = num => {
  score += num;
  scoreText.innerText = score;


}

incrementNumberOfGames = num => {
  number_of_games += num;
  numberOfGames.innerText = number_of_games;

}

incrementAllScore = num => {
  score += score_in_all_games = num;
  allScore.innerText = score_in_all_games;

}

const username = document.querySelector('#username');
const saveBtn = document.querySelector('#save-btn');
//const username = document.querySelector('#username');
//const username = document.querySelector('#username');

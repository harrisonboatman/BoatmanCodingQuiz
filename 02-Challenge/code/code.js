var strtBtn = document.querySelector('.strtBtn');
var questBox = document.querySelector('.questionBox');
var quest = document.querySelector('.quest');
var ans1 = document.querySelector('.ans1')
var ans2 = document.querySelector('.ans2')
var ans3 = document.querySelector('.ans3')
var ans4 = document.querySelector('.ans4')
var timeLeft = document.querySelector('.timeLeft');
var replay = document.querySelector('.rplyBtn');
var result = document.querySelector('.result');
var score = document.querySelector('.score');
var wins;
var losses;
var scoreboard = {
    wins: '0',
    losses: '0',
}
var question1;
var question2;
var question3;
var question4;
var question5;
var totalTime;
var questionIndex = 0;
var correctAns = 0;

replay.style.display = "none";



var questions = [
    question1 = {
        question: 'Which of the following is not a coding language',
        answers: ['Javascript', 'Google', 'CSS', 'HTML'],
        correctanswer: 'Google',

    },
    question2 = {
        question: 'Calling an id uses the CSS tag "." and not "#"',
        answers: ['True', 'False', 'Maybe', 'I have no idea'],
        correctanswer: 'False',
    },
    question3 = {
        question: 'Visual Studio reads the code from Top to Bottom',
        answers: ['True', 'False', 'Maybe', 'I have no idea'],
        correctanswer: 'True',
    },
    question4 = {
        question: 'Which of these items does NOT belong?',
        answers: ['String', 'Variable', 'Boolean', 'Salmon'],
        correctanswer: 'Salmon',
    },
    question5 = {
        question: 'What is the correct notation for positive iteration in for loop?',
        answers: ['++', 'xx', '//', '^^'],
        correctanswer: '++',

    }

];
function start(){
    correctAns = 0
    totalTime = 30;
    timeLeft.textContent = totalTime;
    questionIndex = 0;
    var timer = setInterval(() => {
        totalTime--;
        timeLeft.textContent = totalTime;
        if (totalTime <=0) {
            clearInterval(timer);
            finishGame();
        }
    }, 1000);
    replay.style.display = "none";

   
    displayQuestion();
}


function displayQuestion() {

    quest.textContent = questions[questionIndex].question;
    ans1.textContent = questions[questionIndex].answers[0];
    ans2.textContent = questions[questionIndex].answers[1];
    ans3.textContent = questions[questionIndex].answers[2];
    ans4.textContent = questions[questionIndex].answers[3];
};

function check(correctanswer) {
    if (questions[questionIndex].correctanswer == questions[questionIndex].answers[correctanswer]) {
        correctAns++;
    } else {
        totalTime -= 2
        timeLeft.textContent = totalTime;

    }
    questionIndex++;
    if (questionIndex < questions.length) {
        displayQuestion();
    } else {
        finishGame();
    }
}

function choice1() {check(0);}

function choice2() {check(1);}

function choice3() {check(2);}

function choice4() {check(3);}



function finishGame() {
    quest.textContent = 'Game is over!';
    ans1.textContent = ''
    ans2.textContent = ''
    ans3.textContent = ''
    ans4.textContent = ''
    if (correctAns == 5) {
        result.textContent = 'Congratulations! You won!'
    } else {
        result.textContent = "I'm sorry, but you missed one or more questions. Click the replay button to try again!"
    }
    totalTime = 0;
    replay.style.display = "block";
    score.textContent = correctAns;
    console.log(correctAns);
    saveStoredScores();
};
function replaygame(){
    start();
};
function saveStoredScores (){
var storedScores = localStorage.getItem("stored scores");
window.localStorage.setItem("stored scores", score);
}

function saveHighScore(event) {
    event.preventDefault();

    if (initials.value === ""){
        window.alert("Please input your initials!");
        return;
    }

    var userScore = {
        initials: initials.value,
        score: score.textContent,
    }
}
strtBtn.addEventListener('click', start);
ans1.addEventListener('click', choice1);
ans2.addEventListener('click', choice2);
ans3.addEventListener('click', choice3);
ans4.addEventListener('click', choice4);
replay.addEventListener('click', replaygame);

console.log(question1);
console.log(question1.answers)
console.log(questions.length)
console.log(questions[2]);
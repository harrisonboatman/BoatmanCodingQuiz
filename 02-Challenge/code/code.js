var strtBtn = document.querySelector('.strtBtn');
var questBox = document.querySelector('.questionBox');
var quest = document.querySelector('.quest');
var ans1 = document.querySelector('.ans1')
var ans2 = document.querySelector('.ans2')
var ans3 = document.querySelector('.ans3')
var ans4 = document.querySelector('.ans4')
var timeLeft = document.querySelector('.timeLeft');
var replay = document.querySelector('.rplyBtn');
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
    totalTime = 30;
    timeLeft.textContent = totalTime;
    var timer = setInterval(() => {
        totalTime--;
        timeLeft.textContent = totalTime;
        if (totalTime <=0) {
            clearInterval(timer);
            finishGame();
        }
    }, 1000);
   
   
    displayQuestion();
    replay.style.display = "none";
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
    replay.textContent = '<button>Click here to replay</button>'
    console.log(correctAns);
    return;
};
function replygame(){

}
strtBtn.addEventListener('click', start)
ans1.addEventListener('click', choice1)
ans2.addEventListener('click', choice2)
ans3.addEventListener('click', choice3)
ans4.addEventListener('click', choice4)

console.log(question1);
console.log(question1.answers)
console.log(questions.length)
console.log(questions[2]);
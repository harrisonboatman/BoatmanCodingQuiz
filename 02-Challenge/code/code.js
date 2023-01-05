var strtBtn = document.querySelector('.strtBtn');
var questBox = document.querySelector('.questionBox');
var quest = document.querySelector('.quest');
var ans1 = document.querySelector('.ans1')
var ans2 = document.querySelector('.ans2')
var ans3 = document.querySelector('.ans3')
var ans4 = document.querySelector('.ans4')

var question1;
var question2;
var question3;
var question4;
var question5;

var questions = [
    question1 = {
        question: 'Which of the following is not a coding language',
        answers: ['Javascript', 'Google', 'CSS', 'HTML'],
       
    },
    question2 = {
        question: 'Calling an id uses the CSS tag "." and not "#"',
        answers: ['True', 'False'],
    },
    question3 = {
        question: 'Visual Studio reads the code from Top to Bottom',
        answers: ['True', 'False'],
    },
    question4 = {
        question: 'Which of these items does NOT belong?',
        answers: ['String','Variable','Boolean','Salmon'],
    },
    question5 = {
        question: 'What is the correct notation for positive iteration in for loop?',
        answers: ['++', 'xx','//','^^'],
        
    }

];

function displayQuestion (){
   for(i=0; i<questions.length; i++) 
   
    quest.textContent = JSON.stringify(question1.question)
    ans1.append(question1.answers[0])
    ans2.append(question1.answers[1])
    ans3.append(question1.answers[2])
    ans4.append(question1.answers[3])
    
}
strtBtn.addEventListener('click', displayQuestion)

console.log(question1);
console.log(question1.answers)
console.log(questions.length)
console.log(questions[2])
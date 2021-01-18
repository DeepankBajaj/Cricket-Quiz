var rs = require("readline-sync");
var score = 0;
var username = rs.question("Please enter your Name:");

console.log("Welcome", username + " to KBC created by Deepank Bajaj");
console.log("--------------")


function play(question, answer)
{
  var userAnswer = rs.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log("\n Right Answer");
    score = score + 10;
  }
  else
  {
    console.log("\n Wrong Answer");
    score = score - 5;
  }
   console.log("Your Current Score:", score);
    console.log("----------");
}

var questionOne =
{
  question: '1. Who is the President of India? \n A. Amit Shah \n B. Pranav Mukherjee \n C. Ram nath Kovind \n D. Harsh Vardhan ',
  answer: "C"
}

var questionTwo = 
{
  question: "2. Who is known as Big B? \n A. Ranbir kapoor \n B. Govinda \n C. Sunny Deol \n D. Amitabh Bachchan ",
  answer:"D"
}

var questionThree = 
{
  question: "3. Who won the cricket world cup 2019? \n A. India \n B. England \n C. New Zealand \n D. Australia ",
  answer: "B"
}

var questionFour = 
{
  question: "4. Which of the following cities is the capital of Haryana? \n A. Bahadurgarh \n B. Chandigarh \n C. Gurugram \n D. Faridabad ",
  answer: "B"
}

var questionFive = 
{
  question:"5. Find the Odd One Out \n A. Tomato \n B. Guava \n C. Mango \n D. Apple  ",
  answer: "D" 
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

//loop
for(var i=0; i<questions.length; i++)
{
  play(questions[i].question, questions[i].answer)
}


console.log("\n \n  Excellent! Your Final score: ", score);
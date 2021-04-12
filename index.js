var rs = require("readline-sync");
var score = 0;
var username = rs.question("Please enter your Name:");

console.log("Welcome", username + " to the quiz created by Deepank ");
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
  question: "\n 1.Who won the cricket world cup 2019? \n A. India \n B. England \n C. New Zealand \n D. Australia ",
  answer: "B"
}

var questionTwo = 
{
  question: "2. Who is known as Jumbo? \n A. Ishant Sharma \n B. Rahul Dravid \n C. Harbhajan Singh \n D. Anil Kumble ",
  answer:"D"
}

var questionThree = 
{
  question: "3. Who was the Player of the series in 2019 World Cup? \n A. Kane Williamson \n B. Ben Stokes \n C. Rohit Sharma \n D. Shakib Al Hasan ",
  answer: "A"
}

var questionFour = 
{
  question: "4. Who was the Player of the series in IPL 2020? \n A. Marcus Stoinis \n B. Trent Boult \n C. Jofra Archer \n D. Kagiso Rabada?  ",
  answer: "C"
}

var questionFive = 
{
  question:"5. Who won the Purple Cap in IPL 2020? \n A. Mohammad Shami \n B. Trent Boult \n C. Jofra Archer \n D. Kagiso Rabada?  ",
  answer: "D" 
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

//loop
for(var i=0; i<questions.length; i++)
{
  play(questions[i].question, questions[i].answer)
}


console.log("\n \n  Excellent! Your Final score: ", score);
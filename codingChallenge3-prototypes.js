// CODING CHALLENGE 3

/*
Let's build a fun quiz game in the console!

1. Build a function contructor called Question to describe a question. A question should include:
a) Question itself;
b) The answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.);
c) Correct answer (I would use a number for this).

2. Create a couple of questions using the constructor.

3. Store them all inside an array.

4. Select one random question and log it on the console, together with the possible answers (each question should have a number). (Hint: Write a method for the Question objects for this task.)

5. Use the "prompt" function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not. (Hint: Write another method for this.)

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code. (Hint: We learned a special technique to do exactly that.)

--- EXPERT LEVEL ---

8. After you display the result, display the next random question, so that the game never ends. (Hint: Write a function for this and call it right after displaying the result.)

9. Be careful: After Task 8, the game literally never ends. So include the option to quit the game if the user writes "exit" instead of the answer. In this case, DON'T call the function from Task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score. (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point.)

11. Display the score in the console. Use yet another method for this.

*/

/*
// First part of the task, without the EXPERT LEVEL tasks

(function() {
  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  let q1 = new Question("Is JavaSript easy to learn?", ["Yes", "No"], 1);
  let q2 = new Question("Is JavaSript interesting to learn?", ["Yes", "No"], 0);
  let q3 = new Question("Is JavaSript the coolest programming language in the world?", ["Yes", "No"], 0);
  let q4 = new Question("Do you like being a web developer?", ["Yes", "No"], 0);
  let q5 = new Question("Is back-end cooler than front-end?", ["Yes", "No"], 1);
  let q6 = new Question("Do you like 3D animation?", ["Yes", "No"], 0);
  let q7 = new Question("Do you regret not working as an animator anymore?", ["Yes", "No"], 1);
  let q8 = new Question("Do you think programming is a lot more interesting than animation?", ["Yes", "No"], 0);

  let questions = [q1, q2, q3, q4, q5, q6, q7, q8];

  Question.prototype.logQuestion = function() {
    console.log(this.question);

    for(let i=0; i<this.answers.length; i++){
      console.log(i + ": " + this.answers[i])
    }
  }

  Question.prototype.checkAnswer = function(answer) {
    if(answer === this.correctAnswer) {
      console.log("Correct answer!");
    } else {
      console.log("Wrong answer, try again.");
    }
  }

  let randomQuestion, answer;

  randomQuestion = Math.floor(Math.random() * questions.length);

  questions[randomQuestion].logQuestion();

  answer = parseInt(prompt("Please select the correct answer."));

  questions[randomQuestion].checkAnswer(answer);
})();
*/



(function() {
  // Question constructor
  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  let q1 = new Question("Is JavaSript easy to learn?", ["Yes", "No"], 1);
  let q2 = new Question("Is JavaSript interesting to learn?", ["Yes", "No"], 0);
  let q3 = new Question("Is JavaSript the coolest programming language in the world?", ["Yes", "No"], 0);
  let q4 = new Question("Do you like being a web developer?", ["Yes", "No"], 0);
  let q5 = new Question("Is back-end cooler than front-end?", ["Yes", "No"], 1);
  let q6 = new Question("Do you like 3D animation?", ["Yes", "No"], 0);
  let q7 = new Question("Do you regret not working as an animator anymore?", ["Yes", "No"], 1);
  let q8 = new Question("Do you think programming is a lot more interesting than animation?", ["Yes", "No"], 0);
 
  let questions = [q1, q2, q3, q4, q5, q6, q7, q8];

  Question.prototype.logQuestion = function() {
    console.log(this.question);

    for(let i=0; i<this.answers.length; i++){
      console.log(i + ": " + this.answers[i])
    }
  }

  Question.prototype.checkAnswer = function(answer, callback) {
    let sc;

    if(answer === this.correctAnswer) {
      console.log("Correct answer!");
      sc = callback(true);
    } else {
      console.log("Wrong answer, try again.");
      sc = callback(false);
    }
    this.logScore(sc);
  }

  Question.prototype.logScore = function(score) {
    console.log("Your current score is: " + score);
    console.log("------------------------");
  }

  function score() {
    let sc = 0;

    return function(correct) {
      if(correct) {
        sc++;
      }
      return sc;
    }
  }

  let keepScore = score();

  function nextQuestion() {
    let randomQuestion, answer;

    randomQuestion = Math.floor(Math.random() * questions.length);

    questions[randomQuestion].logQuestion();

    answer = prompt("Please select the correct answer.");

    if(answer !== "exit") {
      questions[randomQuestion].checkAnswer(parseInt(answer), keepScore);

      nextQuestion();
    }
  }
  
  nextQuestion();
})();
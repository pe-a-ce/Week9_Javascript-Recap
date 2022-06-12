const questionContainer = document.querySelector("#question"); //scans the whole page to find this
const questionButton = document.querySelector("#question-button"); //made the button available to be called
const form = document.querySelector("#player-guess");
const resultContainer =document.querySelector("#result-container");
const scoreContainer = document.querySelector("#score-container");

let currentQuestion;
// let currentScore = 0; ///variable to keep track of current score
let hasGuessed = false;

const loadQuestion = () => { // Event handler
    fetch("https://opentdb.com/api.php?amount=1&type=boolean")
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => {
        resultContainer.innerHTML =""; //refreshes the screen after the next button has been clicked
        questionContainer.innerText = data.results[0].question; //get the question from the array results
        currentQuestion = data.results[0]; // update the currentQuestion variable to whole object (that has the answer)
        hasGuessed = false;
    })
}

const handlePlayerGuess = (event) => {
    event.preventDefault();
    // console.log(`player guess: ${event.target.guess.value}`); // event.target to isolate the form, guess(id)
    // console.log(`currentQuestion: ${currentQuestion}`);

    if(!hasGuessed){
    const resultText = document.createElement("p");

    // if(event.target.guess.value === currentQuestion.correct_answer){ // checking if the answer is correct
    //     console.log("Congrats!!");
    // } else{
    //     console.log("Incorrect!")
    // }
    if(event.target.guess.value === currentQuestion.correct_answer){ // instead of printing in the console, will update the container and will appear on the page!!
        resultText.innerText = "Congrats!";
        let currentScore = scoreContainer.innerText; // get the current score
        //debugger
        currentScore++;//adding 1 for every correct answer
        scoreContainer.innerText = currentScore; //update the score
    } else{
        resultText.innerText = "Incorrect!";
    }

    resultContainer.appendChild(resultText);

hasGuessed = true;
}}

questionButton.addEventListener("click",loadQuestion); //event listener on button click to load next question
form.addEventListener("submit", handlePlayerGuess); // event listener on guess submit to record the answer
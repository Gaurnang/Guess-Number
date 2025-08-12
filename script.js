const guess = document.querySelector(".guess");
const againbtn = document.querySelector(".again");
const number = document.querySelector('.number');
const checkbtn = document.querySelector(".check");
const message = document.querySelector(".message");
const body = document.querySelector("body");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
let won = false;



let a = 20;
let b = 0;

let guessNumber = Math.floor(Math.random() * 12) + 1;   



checkbtn.addEventListener("click", () => {
    if(a === 0) {
        message.textContent = "You Loose!";
        return;
    }
    if(won) return;


    let inputNumber = parseInt(guess.value);

    if(inputNumber === guessNumber) {
        message.textContent = "You Won!";
        number.textContent = guessNumber;
        body.style.backgroundColor = "green"; 
        won = true;
        
        if(a > b) {
            b = a;
            highscore.textContent = b;
        }
    }

    else {

        if(inputNumber > guessNumber) message.textContent = "Too High!";
        else message.textContent = "Too Low!";
        a = a - 1;
        score.innerHTML= a;

    }
})

function Reset() {
    number.textContent = '?';
    body.style.backgroundColor = "#222";
    message.textContent = "Start guessing...";
    guess.value = '';
    a = 20;
    won = false;
    score.innerHTML = a;
    guessNumber = Math.floor(Math.random() * 12) + 1;
}

againbtn.addEventListener("click", Reset);


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let pervGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if (guess < 1){
        alert('Please enter a  number more than 1')
    }else if (guess >100 ){
        alert('Please enter a number less than 100')
    } else {
        pervGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            chekGuess(guess)
        }
    }
}

function chekGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guessed it right`)
        endGame()
    }else if( guess < randomNumber){
        displayMessage(`Number is too low`)
    }else if( guess > randomNumber){
        displayMessage(`Number is too High`)
    }
}
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} ,`
    numGuess++;
    remaining.innerHTML=`${11- numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value =''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    const newGamebutton=document.querySelector('#newGame')
    newGamebutton.addEventListener('click', function(e){
        randomNumber = console.log(parseInt(Math.random()*100+1));
        pervGuess=[]
        numGuess= 1
        guessesSlot.innerHTML = ''
        remaining.innerHTML  = `${11- numGuess}`;
        userInput.removeAttribute('desabled')
        satrtOver.removeChild(p)
        playGame = true
    })
}
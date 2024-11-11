// declaring variables

var submit=document.querySelector('#subt');
var userInput=document.querySelector('#guessField');
var guessSlot=document.querySelector('.guesses');
var remaining=document.querySelector('.lastResult');
var startOver=document.querySelector('.resultParas');
var lowOrHigh=document.querySelector('.lowOrHi');
var p=document.createElement('p');

let randomNumber=parseInt((Math.random()*5)+1);
let previousGuesses=[];
let numGuesses=1;
let playGame=true;

if(playGame){
	subt.addEventListener('click',function(e){
		e.preventDefault();
		// grab from user
		var guess=parseInt(userInput.value);
		validate(guess);
	})
}

function validate(guess){
	if(isNaN(guess)){
		alert("playGame enter the number here");
	}else if(guess < 1){
		alert("please enter the number wich is greater than one");
	}else if(guess > 500){
		alert("please enter the number less than five hundred");
	}

	// about keeping the record of played guesses
	previousGuesses.push(guess);
	// about whe the guess is true
	if(numGuesses === 11){
		displayGuesses(guess);
		displayMessage(`game over number was ${randomNumber}`);
		endGame();
	}else{
		// display your guess here 
		displayGuesses(guess);
		// then check your guess if are truE OR WRONG
		checkGuess(guess);
	}

}


function checkGuess(guess){
	if(guess === randomNumber){
		displayMessage(`you won successfuly you are winner`);
		endGame();
	}else if(guess < randomNumber){
		displayMessage(`you are low continue to try`);
	}else if(guess > randomNumber){
		displayMessage(`you are high continue to try`);
	}
}

function displayGuesses(guess){
	userInput.value='';
	guessSlot.innerHTML += `${guess + " "}`;
	numGuesses++;
	remaining.innerHTML=`${11 - numGuesses}`;
}

function displayMessage(message){
	lowOrHigh.innerHTML=`<h3>${message}</h3>`;
}

function endGame(){
	// first have to clear the input field
	userInput.value='';
	// second we have to disable the input field
	userInput.setAttribute('disabled','');
	// what next setting button
	p.classList.add('button');
	p.innerHTML=`<h1 id="newGame">please start the new game</h1>`;
	startOver.appendChild(p);
	playGame=false;
}

function newGame(){
        var newGameButton=document.querySelector('#newGame');
        newGameButton.addEventListener('click',function(){
        	randomNumber=parseInt((Math.random()*5)+1);
        	previousGuesses=[];
        	numGuesses=1;
        	guessSlot.innerHTML='';
        	lowOrHigh.innerHTML='';
        	userInput.removeAttribute('disabled');
        	startOver.removeChild(p);
        	playGame=true;
        })
}
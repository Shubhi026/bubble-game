var overlay = document.querySelector('#overlay')
var button = document.querySelector('#overlay2 button')
var btmpnl = document.querySelector('#btmpnl')
var back = document.querySelector('#back')


var timer = 60;
var score = 0;
var timerelem = document.querySelector('#timerelem')
var hitelem = document.querySelector('#hitelem')
var scoreelem = document.querySelector('#scoreelem')
var btmpnl = document.querySelector('#btmpnl')


button.addEventListener('click', function(){
    overlay.style.transform = 'translateY(-100%)';
    back.style.transform = 'translateY(100%)';
    var guessNumber;

setInterval(function(){
    if(timer > 0){
        --timer;
        timerelem.textContent = timer;
    }
    else{
        btmpnl.innerHTML ='<h1 id="center">Game Over!<h1>'
    }
}, 1000)

function makeBubbles(){
    for(var i=0; i<136; i++){
        var randomNumber = Math.floor(Math.random()*10);
        var template = `<div class="bubble">${randomNumber}</div>`;
        btmpnl.innerHTML += template;
    }
}

function getNewGuess(){
   guessNumber = Math.floor(Math.random()*10);
   hitelem.textContent = guessNumber;
}


btmpnl.addEventListener('click', function(details){
    var clickedBblValue = details.target.textContent;
    if(clickedBblValue == guessNumber){
        score = score + 10;
        scoreelem.textContent = score;
        getNewGuess();
        btmpnl.innerHTML = '';
        makeBubbles();
    }
})
getNewGuess();
makeBubbles();
})

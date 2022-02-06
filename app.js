const gameState = {
    players: ['X', 'O'],
    currentPlayer: 'X',
    
}

const b1 = document.getElementById('box1');
const b2 = document.getElementById('box2');
const b3 = document.getElementById('box3');
const b4 = document.getElementById('box4');
const b5 = document.getElementById('box5');
const b6 = document.getElementById('box6');
const b7 = document.getElementById('box7');
const b8 = document.getElementById('box8');
const b9 = document.getElementById('box9');
const intro = document.getElementById('introHeader');
const outro = document.getElementById('outro');
const reset = document.getElementById('reset');
const playerForm = document.getElementById('playerForm')
const playerOneInput = document.getElementById('playerOneInput');
const playerTwoInput = document.getElementById('playerTwoInput');
const playerTurn = document.getElementById('playerTurn')
const submitButtonOne = document.getElementById('submitButtonOne');
const btn = document.getElementsByClassName('btn');

let playerOneName = "";
let playWin = false;
let onePlayerGame = false;


function initialGameStart(){
    let game = prompt('One player or two?');
    if (game.toLowerCase() === "one"){
      playerTwoInput.style.display = "none";
      playerTurn.innerText = "Enter Your Name to Play";
      onePlayerGame = true;

    }else if (game.toLowerCase() === "two"){
        playerTwoInput.style.display = 'block';
        onePlayerGame = false;
    } else {
        console.log("im broken");
    }
}

initialGameStart();





// TWO PLAYER INPUTS

playerForm.addEventListener('submit', function(event){
event.preventDefault();
// console.log("works")

playerOneName = playerOneInput.value;
playerTwoName = playerTwoInput.value;


if (onePlayerGame === true){
    intro.innerText = `Let's Play Tic Tac Toe, ${playerOneName}!`
} else {
    intro.innerText = `Let's Play Tic Tac Toe, ${playerOneName} and ${playerTwoName}!`
}

playerOneInput.value = "";
playerTwoInput.value = "";
playerTurn.innerText = `${playerOneName} goes first!`
})

function computerPlay(){
    
    let bucket = []
    for (var i = 0 ; i < Object.keys(btn).length; i++) {
        if (btn[i].innerText === "-"){
          bucket.push(btn[i])
        }}
        
    const randomIndex = Math.floor(Math.random() * bucket.length);
     
    const computersNextSpot = bucket[randomIndex]
    
    computersNextSpot.innerText = gameState.currentPlayer

    }



// PLAY GAME

for (var i = 0 ; i < Object.keys(btn).length; i++) {
    btn[i].addEventListener('click', play)
}
function play(event){
    //   console.log("here")
      event.target.innerText = gameState.currentPlayer
      
      checkHorizontal();
      checkVertical();
      checkDiagonal();

      switchPlayer();

      checkButton ();

      if (onePlayerGame){


        computerPlay();    

        checkHorizontal();
        checkVertical();
        checkDiagonal();
  
        switchPlayer();
  
        checkButton ();
      }

}


function checkHorizontal () {
   
    if (b1.innerText === gameState.currentPlayer && b2.innerText === gameState.currentPlayer && b3.innerText === gameState.currentPlayer ||
        b4.innerText === gameState.currentPlayer && b5.innerText === gameState.currentPlayer && b6.innerText === gameState.currentPlayer ||
        b7.innerText === gameState.currentPlayer && b8.innerText === gameState.currentPlayer && b9.innerText === gameState.currentPlayer) {
        playWin = true;
        outro.innerText = "Winner, Winner!";
    } else {
        outro.innerText = "No Winner Keep Playing!";
    }
}

function checkVertical () {
   
    if (b1.innerText === gameState.currentPlayer && b4.innerText === gameState.currentPlayer && b7.innerText === gameState.currentPlayer ||
        b2.innerText === gameState.currentPlayer && b5.innerText === gameState.currentPlayer && b8.innerText === gameState.currentPlayer ||
        b3.innerText === gameState.currentPlayer && b6.innerText === gameState.currentPlayer && b9.innerText === gameState.currentPlayer) {
        playWin = true;
        outro.innerText = "Winner, Winner!";
        }
    }


function checkDiagonal () {
   
        if (b1.innerText === gameState.currentPlayer && b5.innerText === gameState.currentPlayer && b9.innerText === gameState.currentPlayer ||
            b3.innerText === gameState.currentPlayer && b5.innerText === gameState.currentPlayer && b7.innerText === gameState.currentPlayer){
            playWin = true;
            outro.innerText = "Winner, Winner!";
            }
        }
        
    

function switchPlayer (){
    if (gameState.currentPlayer === 'X'){
        gameState.currentPlayer = 'O';
} else { gameState.currentPlayer = 'X'}

    playerTurn.innerText = "Your turn " + gameState.currentPlayer;

}


function checkButton (){
    for (var i = 0 ; i < Object.keys(btn).length; i++) {
        if (btn[i].innerText !== "-"){
          btn[i].disabled = true;  
        }
        if (playWin === true) {
            btn[i].disabled = true;
           }
    }

    if (playWin === true){
        playerTurn.innerText = "Congratulations!";
        outro.innerText = "You win!";
    }
}

// RESET GAME

reset.addEventListener('click', resetGame )
   
function resetGame(){
    // console.log("this works now too");
    outro.innerText = "Click to Play!";
    playerTurn.innerText = "X goes first!";
    gameState.currentPlayer = 'X';
    for (var i = 0 ; i < Object.keys(btn).length; i++){
        btn[i].innerText = "-";
        btn[i].disabled = false; 
    }
    playWin = false;
    intro.innerText = "Tic Tac Toe";
    playerTurn.innerText = "Enter Your Names to Play";
    initialGameStart();
}



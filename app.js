const gameState = {
    players: ['X', 'O'],
    currentPlayer: 'X',
    
}
// test comment
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
const playerInput = document.getElementById('playerInput');
const playerTurn = document.getElementById('playerTurn')
const submitButton = document.getElementById('submitButton');

const btn = document.getElementsByClassName('btn');

let playerName = "";

playerForm.addEventListener('submit', function(event){
event.preventDefault();
console.log("works")

playerName = playerInput.value;

intro.innerText = `Let's Play Tic Tac Toe, ${playerName}!`;
playerInput.value = "";
})

reset.addEventListener('click', resetGame )
   
function resetGame(){
    console.log("this works now too");
    outro.innerText = "Click to Play!";
    playerTurn.innerText = "";
    gameState.currentPlayer = 'X';
    for (var i = 0 ; i < Object.keys(btn).length; i++){
        btn[i].innerText = "-";
        btn[i].disabled = false; 
    // for (var i = 0 ; i < Object.keys(btn).length; i++) {
        
    
}}


for (var i = 0 ; i < Object.keys(btn).length; i++) {
    btn[i].addEventListener('click', play)
}
function play(event){
      console.log("here")
      event.target.innerText = gameState.currentPlayer
      
      checkWinner();
      
      switchPlayer();

      checkButton ();
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
    }
}

function checkWinner () {
    if (b1.innerText === gameState.currentPlayer && b2.innerText === gameState.currentPlayer && b3.innerText === gameState.currentPlayer){
     outro.innerText = "You Win!";
    } else if (b4.innerText === gameState.currentPlayer && b5.innerText === gameState.currentPlayer && b6.innerText === gameState.currentPlayer){
         outro.innerText = "You Win!";
    } else if (b7.innerText === gameState.currentPlayer && b8.innerText === gameState.currentPlayer && b9.innerText === gameState.currentPlayer){
        outro.innerText = "You Win!";
    } else if (b1.innerText === gameState.currentPlayer && b4.innerText === gameState.currentPlayer && b7.innerText === gameState.currentPlayer){
        outro.innerText = "You Win!";
    } else if (b2.innerText === gameState.currentPlayer && b5.innerText === gameState.currentPlayer && b8.innerText === gameState.currentPlayer){
    outro.innerText = "You Win!";
    } else if (b3.innerText === gameState.currentPlayer && b6.innerText === gameState.currentPlayer && b9.innerText === gameState.currentPlayer){
        outro.innerText = "You Win!";
    } else if (b1.innerText === gameState.currentPlayer && b5.innerText === gameState.currentPlayer && b9.innerText === gameState.currentPlayer){
        outro.innerText = "You Win!";
    } else if (b3.innerText === gameState.currentPlayer && b5.innerText === gameState.currentPlayer && b7.innerText === gameState.currentPlayer){
        outro.innerText = "You Win!";
    } else {
        outro.innerText = "No Winner! Keep Playing!";}
}

/* Start with player x
player x inputs into an empty box, check to see if winning array is met
if it is, you win, else, switch to player o
player o inputs into an empty box, check to see if winning array is met
if it is, you win, else, swtich to player x
Repeat until winning array is met
if no winning array is met, you lose
restart game.

a winning array =
// box 1, 2, 3 win [0, 1, 2]
// box 4, 5, 6 win [3, 4, 5]
// box 7, 8, 9 win [6, 7, 8]
// box 1, 4, 7 win [0, 3, 6]
// box 2, 5, 8 win [1, 4, 7]
// box 3, 6, 9 win [2, 5, 8]
// box 1, 5, 9 win [0, 4, 8]
// box 3, 5, 7 win [2, 4, 6]
*/
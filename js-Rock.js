function pickComputerMove() {
  let randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove; // return=(statement a sign valeu to  Function) computerMove=(Value of return trov boz oy tv function)
}
function updateScore() {
  // create fuction  easy to call not write alot
  document.querySelector(
    ".js-score"
  ).innerHTML = `Win : ${score.wins} Losse : ${score.losse} Ties : ${score.ties}`
}
// Block of Function for player and result
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losse: 0,
  ties: 0,
}; // when the score if fale it's will using true

function chnageButton() {
  const buttonAutoPlay = document.querySelector(".auto-play-button");
  if (buttonAutoPlay.innerHTML === "Auto Play") {
    buttonAutoPlay.innerHTML = "Playing";
    buttonAutoPlay.classList.add("auto-stop-button");
  } else {
    buttonAutoPlay.innerHTML = "Auto Play";
    buttonAutoPlay.classList.remove("auto-stop-button");
  }
}
let isAutoplaying = false;
let intervalId;
function autoPlay() {
  chnageButton();
  if (!isAutoplaying) {
    intervalId = setInterval(() => {
      // using Arrow functoion
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoplaying = true;
  } else {
    clearInterval(intervalId);
    isAutoplaying = false;
  }
}
document.querySelector('.js-rock-button')
.addEventListener('click',()=>{
 playGame('rock');
});
document.querySelector('.js-paper-button')
.addEventListener('click',()=>{
 playGame('paper');
});
document.querySelector('.js-scissors-button')
.addEventListener('click',()=>{
 playGame('scissors');
});
// comand Key



// if event_key
document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r'){
    playGame('rock');
  } 
  else if(event.key==='p'){
    playGame('paper');
  }
  else if(event.key==='s'){
    playGame('scissors');
  }else{
    alert('Wrong Command');
  }
})
updateScore();
// call function again

function playGame(playerMove) {
  let computerMove = pickComputerMove(); // pickComputerMove()= computerMove khang ler ney function;
  let result = "";
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "lost";
    } else if (computerMove === "scissors") {
      result = "win";
    }
  }
  if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "lost";
    }
  }
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "lost";
    } else if (computerMove === "paper") {
      result = "win";
    } else if (computerMove === "scissors") {
      result = "Tie";
    }
  }
  if (result === "win") {
    score.wins += 1;
  } else if (result === "lost") {
    score.losse += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score)); // JSON.stringify is convert score object tv chea string;

  updateScore(); // call function from getItems
  document.querySelector(".js-result").innerHTML = `You : ${result}`; // create push up in p tage result
  document.querySelector(".js-move").innerHTML = `You 
    <img src="image/${playerMove}-emoji.png" class="move-icon">
    <img src="image/${computerMove}-emoji.png" class="move-icon">
    Computer`;

  //             alert(`You Pick ${playerMove}. Computer pick ${computerMove}. ${result}!
  // Win : ${score.wins} Losse : ${score.losse} Ties : ${score.ties}`);
}

document.querySelector(".popup-1").style.opacity = 1;
document.querySelector(".popup-1").style.zIndex = "1";

function playGame() {
  let click = new Audio("clickMusic.mp3");
  let gameMusic = new Audio("music.mp3");
  click.play();
  gameMusic.play();

  setInterval(() => {
    gameMusic.play();
  }, 43700);
  document.querySelector(".popup-1").style.opacity = 0;
  document.querySelector(".popup-1").style.zIndex = "-1";
}

let gameover = new Audio("gameOver.mp3");
let turn = "X";
let isgameover = false;

// Logic for Change Turn

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Logic for Win check

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [3, 6, 9],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".winner").innerText =
        boxtext[e[0]].innerText + " " + " Won";
      isgameover = true;
      gameover.play();
      document.querySelector(".popup").style.opacity = 1;
      document.querySelector(".popup").style.zIndex = "1";
    }
  });
};

// function drawGame() {
//   let box = document.getElementsByTagName("span");
//   if (box.innerHTML != "") {
//     console.log("draw");
//   }
// }

// Main Game Logic
let click = new Audio("clickMusic.mp3");
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      click.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("turn")[0].innerText =
          "Turn for " + turn;
      }
    }
    // drawGame();
  });
});

// Restart Game

function restartGame() {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });

  //   change value of turn by Math.ramdom()

  let chance = Math.random();
  if (chance >= 0.7) {
    turn = "X";
  } else {
    turn = "0";
  }
  isgameover = false;
  document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
  document.querySelector(".popup").style.opacity = 0;
  document.querySelector(".popup").style.zIndex = "-1";
  let gameMusic = new Audio("music.mp3");
  gameMusic.currentTime = 1;
}

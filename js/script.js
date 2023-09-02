let userName = document.querySelector(".info_container .name span");
document.querySelector(".control-buttons span").onclick = function () {
  let yourName = prompt("please enter your name");
  if (yourName == null || yourName == "") {
    userName.innerHTML = "unkown";
  } else {
    userName.innerHTML = yourName;
  }
  document.querySelector(".control-buttons").remove();
  startTimer();
};

let timer = document.querySelector(".timer span");
let counter = 0;

let duration = 1000;
let game = document.querySelector(".game");
let cards = Array.from(game.children);

let orderRange = [...Array(cards.length).keys()];
shuffle(orderRange);

cards.forEach((card, index) => {
  card.style.order = orderRange[index];

  card.addEventListener("click", function () {
    flipCard(card);
  });
});

function shuffle(array) {
  // set variables
  let current = array.length,
    temp,
    random;

  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;

    // 1 save current alement in stash
    temp = array[current];
    // 2 current element = random
    array[current] = array[random];
    // 3 random element = get element from stash
    array[random] = temp;
  }
  return array;
}

function flipCard(selectedCard) {
  selectedCard.classList.add("is-flipped");

  let allFlippedCards = cards.filter((flipCard) =>
    flipCard.classList.contains("is-flipped")
  );

  if (allFlippedCards.length === 2) {
    stopClicking();
    checkcards(allFlippedCards[0], allFlippedCards[1]);
  }
}

function stopClicking() {
  game.classList.add("no-clicking");

  setTimeout(() => {
    game.classList.remove("no-clicking");
  }, duration);
}

function checkcards(firstCard, secondCard) {
  let errors = document.querySelector(".errors span");
  if (
    firstCard.getAttribute("dataGame") === secondCard.getAttribute("dataGame")
  ) {
    firstCard.classList.remove("is-flipped");

    secondCard.classList.remove("is-flipped");

    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    counter++
    endGame()
  } else {
    setTimeout(() => {
      firstCard.classList.remove("is-flipped");
      secondCard.classList.remove("is-flipped");
    }, duration);
    errors.innerHTML = parseInt(errors.innerHTML) + 1;
  }
}
let timerCounter ;
function startTimer() {
  let seconds = 0;
  let minutes = 0;
   timerCounter = setInterval(() => {
    seconds += 1;
    if (seconds > 59) {
      seconds = 0;
      minutes += 1;
    }
    timer.innerHTML = `${minutes > 9 ? minutes : "0" + minutes}:${
      seconds > 9 ? seconds : "0" + seconds
    }`;
  }, 1000);
}
function endGame() {
    if (counter === 10 ) {
        clearInterval(timerCounter);
        console.log("kkkkkkkkkkkkkkkkkkkk");
    }
}

/*



*/

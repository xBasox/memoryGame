const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

createBoard();

function flipCard() {
  const cardID = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardID].name);
  cardsChosenIds.push(cardID);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  this.setAttribute("src", cardArray[cardID].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("img");

  if (cardsChosenIds[0] == cardsChosenIds[1]) {
    alert("You have clicked the same card!");
    cards[cardsChosenIds[0]].setAttribute("src", "images/blank.png");
  } else if (cardsChosen[0] == cardsChosen[1]) {
    alert("You've Found a Match!");

    cards[cardsChosenIds[0]].setAttribute("src", "images/white.png");
    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIds[1]].setAttribute("src", "images/white.png");
    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
    console.log(cardsWon);
    console.log(cardArray);
  } else {
    cards[cardsChosenIds[0]].setAttribute("src", "images/blank.png");
    cards[cardsChosenIds[1]].setAttribute("src", "images/blank.png");
    alert("Sorry! Try again!");
  }

  resultDisplay.innerHTML = cardsWon.length
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations! You've found all the card pairs."
  }
}

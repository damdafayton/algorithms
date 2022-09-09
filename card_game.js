// This is a multi-part question designed to be solved in order. It is okay to not complete the entire assignment. You are allowed to look at langugage documentation online, but talk through what you are looking up.

// Overview: Create a function called card_game. This function will need to create a representation of a deck of cards and deal those cards to players. Once cards have been dealt, determine which player has the highest scoring hand (scores of cards listed below).

// Card reference: Suits: Spaces, Diamonds, Hearts, Clubs. Cards: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K.

// Step 1: Declare your function and accept an array called players as a parameter.

// Step 2: Create an array called deck to store our deck of cards. Populate deck with arrays representing each card. Each item in the deck array will be formatted as its own array with the card value in the first position of the array and the suit in the second.

// Examples:
// One card: `[2, 'Spades']`
// Partial desk: `[[A, 'Spades'], [2, 'Spades'], [3, 'Spades']]`
// Step 3: Deal 5 cards to each of the players in the players array. A Player class has been created for you as well as an array of players to pass to your function.

// Notes:
// - Ensure that the cards are dealt in a random way. It wouldn't be fun otherwise.
// - When a card is dealt, that card is removed from the deck.
// Step 4: Total each player’s hand and print the name of the player that has the highest score.

// ``` Scoring:

// All number cards have a score equal to their number
// Face cards will have the following scores
// A = 1
// J = 11
// Q = 12
// K = 13

function card_game(arr) {
  const deck = [];
  const suits = ["Spades", "Diamonds", "Hearts", "Clubs"];

  suits.forEach((suit) => {
    ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"].forEach((num) => {
      deck.push([num, suit]);
    });
  });

  // console.log({deck})

  const playersWithCards = {};

  // dealing cards
  Array.from(Array(5).keys()).forEach(() => {
    arr.forEach((player) => {
      const existingCards = playersWithCards[player] || [];
      existingCards.push(deck.shift(Math.floor(Math.random() * deck.length)));
      playersWithCards[player] = existingCards;
    });
  });

  // console.log({playersWithCards:playersWithCards.jon[0]})

  // calculate scores
  const scores = [];
  const pointMap = { A: 1, J: 11, Q: 12, K: 13 };
  Object.keys(playersWithCards).forEach((player) => {
    const score = playersWithCards[player].reduce((prev, cur) => {
      const card = cur[0];
      const point = typeof card === "string" ? pointMap[card] : card;
      return prev + point;
    }, 0);

    scores.push([player, score]);
  });

  // console.log({ scores });

  // find the highest score
  const winner = scores.reduce(
    (prev, cur) => {
      return cur[1] > prev[1] ? cur : prev;
    },
    [0, 0]
  );

  console.log(winner[0]);
}

card_game(["jon", "jane"]);

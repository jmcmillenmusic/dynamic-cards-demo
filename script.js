// Initializes the deck, your hand, and the discard pile as empty arrays
const deck = [];
const hand = [];
const discardPile = [];

// Establishes suits and values of cards in a standard 52-card deck
const suits = ["clubs", "diamonds", "hearts", "spades"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

// References the dropdown menu listing all cards in your hand
const list = document.getElementById("dropdown");

// References the section containing all of your cards
const handDiv = document.getElementById('cardsInHand');

// Creates and shuffles the deck using the Fisher-Yates Algorithm and prints to the console
function shuffle() {
    // Deck creation
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = {Value: values[j], Suit: suits[i]};
            deck.push(card);
        }
    }
    // Deck shuffling
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    document.getElementById("shuffle").disabled = true;
    document.getElementById("draw").disabled = false;
}

function draw() {
    // Adds the first card of the deck to your hand and removes it from the deck
    if (deck.length >= 1) {
        hand.push(deck[0]);
        deck.shift(deck[0]);
        // Creates images, appends them to the cardsInHand section, and sets their sources
        var handDiv = document.getElementById('cardsInHand');
        var cardContainer = document.createElement('div');
        cardContainer.setAttribute("class", "fullcard");
        handDiv.appendChild(cardContainer);
        var cardImg = document.createElement('img');
        cardImg.setAttribute("class", "cardImg");
        cardImg.src = 'images/blank_card.png';
        cardContainer.appendChild(cardImg);
        var cardText = document.createElement('h3');
        cardText.setAttribute("class", "cardText");
        cardContainer.appendChild(cardText);
        for (i = 0; i < hand.length; i++) {
            var card = hand[i];
            cardContainer.id = `${card.Value} of ${card.Suit}`;
            switch (true) {
                case (card.Suit === "clubs"):
                    cardText.textContent = `${card.Value}\u2663`;
                    cardText.style.color = "black";
                    break;
                case (card.Suit === "diamonds"):
                    cardText.textContent = `${card.Value}\u2666`;
                    cardText.style.color = "red";
                    break;
                case (card.Suit === "hearts"):
                    cardText.textContent = `${card.Value}\u2665`;
                    cardText.style.color = "red";
                    break;
                case (card.Suit === "spades"):
                    cardText.textContent = `${card.Value}\u2660`;
                    cardText.style.color = "black";
                    break;
            }
        }
    } else {
        document.getElementById("alert").style.visibility = "visible";
    }
    // Clears all options from the dropdown menu
    for (var i = 0; i < hand.length; i++) {
        var listOption = document.createElement("option");
        list.remove(listOption);
    }
    // Repopulates the dropdown menu with an option for each card in your hand
    for (var i = 0; i < hand.length; i++) {
        var optn = hand[i];
        var listOption = document.createElement("option");
        listOption.textContent = `${optn.Value} of ${optn.Suit}`;
        listOption.value = `${optn.Value} of ${optn.Suit}`;
        list.add(listOption);
    }
}

function discard() {
    if (hand.length >= 1) {
        // Removes the image of the selected cards in the dropdown menu
        var handDiv = document.getElementById('cardsInHand');
        var cardIds = [...document.querySelectorAll('.fullcard')].map(({ id }) => id);
        var options = [...document.querySelectorAll('option')].map(({ value }) => value);
        var discardingCard = list.selectedIndex;
        var card = document.querySelectorAll('.fullcard');
        for (i = 0; i < cardIds.length; i++) {
            if (cardIds[i] === options[discardingCard]) {
                handDiv.removeChild(card[i]);
            }
        }
        // Adds the chosen card to the discard pile and removes it from your hand
        discardPile.unshift(hand[list.selectedIndex]);
        hand.splice(list.selectedIndex, 1);
        list.remove(list.selectedIndex);
    } else {
        document.getElementById("alert2").style.visibility = "visible";
    }
}
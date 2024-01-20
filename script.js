// Initializes the deck, your hand, and the discard pile as empty arrays
const deck = [];
const hand = [];
const discardPile = [];

// Establishes suits and values of cards in a standard 52-card deck
const suits = ["clubs", "diamonds", "hearts", "spades"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

// References the dropdown menu listing all cards in your hand
const list = document.getElementById("dropdown");

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
        var cardImg = document.createElement('img');
        handDiv.appendChild(cardImg);
        // var handDiv = document.getElementById('cardsInHand');
        // var cardContainer = document.createElement('div');
        // handDiv.appendChild(cardContainer);
        // var cardImg = document.createElement('img');
        // cardImg.src = './cardPhotos/blank_card.png';
        // var cardText = document.createElement('h3');
        // cardContainer.appendChild(cardImg);
        // handDiv.appendChild(cardImg);
        // handDiv.appendChild(cardText);
        // for (i = 0; i < hand.length; i++) {
        //     var card = hand[i];
        //     cardImg.id = `${card.Value} of ${card.Suit}`;
        //     switch (true) {
        //         case (card.Suit === "clubs"):
        //             cardText.textContent = `${card.Value} \u2663`;
        //             break;
        //         case (card.Suit === "diamonds"):
        //             cardText.textContent = `${card.Value} \u2666`;
        //             break;
        //         case (card.Suit === "hearts"):
        //             cardText.textContent = `${card.Value} \u2665`;
        //             break;
        //         case (card.Suit === "spades"):
        //             cardText.textContent = `${card.Value} \u2660`;
        //             break;
        //     }
        // }
        for (i = 0; i < hand.length; i++) {
            var card = hand[i];
            // switch (true) {
            //     case (card.Value === "2" && card.Suit === "clubs"):
            //         cardImg.src = "./cardPhotos/Club_2.png";
            //         cardImg.id = `${card.Value} of ${card.Suit}`;
            //         break;
            //     case (card.Value === "3" && card.Suit === "clubs"):
            //         cardImg.src = "./cardPhotos/Club_3.png";
            //         break;
            //     case (card.Value === "4" && card.Suit === "clubs"):
            //         cardImg.src = "./cardPhotos/Club_4.png";
            //         break;
            //     case (card.Value === "5" && card.Suit === "clubs"):
            //         cardImg.src = "./cardPhotos/Club_5.png";
            //         break;
            //     case (card.Value === "6" && card.Suit === "clubs"):
            //         cardImg.src = "./cardPhotos/Club_6.png";
            //         break;
            //     case (card.Value === "7" && card.Suit === "clubs"):
            //         cardImg.src = "./cardPhotos/Club_7.png";
            //         break;
            //     case (card.Value === "8" && card.Suit === "clubs"):
            //         cardImg.src = "./cardPhotos/Club_8.png";
            //         break;
            //     case (card.Value === "9" && card.Suit === "clubs"):
            //         cardImg.src = "./cardPhotos/Club_9.png";
            //         break;
            //     case (card.Value === "10" && card.Suit === "clubs"):
            //         cardImg.src = "./cardPhotos/Club_10.png";
            //         break;
            //     case (card.Value === "J" && card.Suit === "clubs"):
            //         cardImg.src = "./cardPhotos/Club_J.png";
            //         break;
            //     case (card.Value === "Q" && card.Suit === "clubs"):
            //         cardImg.src = "./cardPhotos/Club_Q.png";
            //         break;
            //     case (card.Value === "K" && card.Suit === "clubs"):
            //         cardImg.src = "./cardPhotos/Club_K.png";
            //         break;
            //     case (card.Value === "A" && card.Suit === "clubs"):
            //         cardImg.src = "./cardPhotos/Club_A.png";
            //         break;
            //     case (card.Value === "2" && card.Suit === "diamonds"):
            //         cardImg.src = "./cardPhotos/Diamond_2.png";
            //         break;
            //     case (card.Value === "3" && card.Suit === "diamonds"):
            //         cardImg.src = "./cardPhotos/Diamond_3.png";
            //         break;
            //     case (card.Value === "4" && card.Suit === "diamonds"):
            //         cardImg.src = "./cardPhotos/Diamond_4.png";
            //         break;
            //     case (card.Value === "5" && card.Suit === "diamonds"):
            //         cardImg.src = "./cardPhotos/Diamond_5.png";
            //         break;
            //     case (card.Value === "6" && card.Suit === "diamonds"):
            //         cardImg.src = "./cardPhotos/Diamond_6.png";
            //         break;
            //     case (card.Value === "7" && card.Suit === "diamonds"):
            //         cardImg.src = "./cardPhotos/Diamond_7.png";
            //         break;
            //     case (card.Value === "8" && card.Suit === "diamonds"):
            //         cardImg.src = "./cardPhotos/Diamond_8.png";
            //         break;
            //     case (card.Value === "9" && card.Suit === "diamonds"):
            //         cardImg.src = "./cardPhotos/Diamond_9.png";
            //         break;
            //     case (card.Value === "10" && card.Suit === "diamonds"):
            //         cardImg.src = "./cardPhotos/Diamond_10.png";
            //         break;
            //     case (card.Value === "J" && card.Suit === "diamonds"):
            //         cardImg.src = "./cardPhotos/Diamond_J.png";
            //         break;
            //     case (card.Value === "Q" && card.Suit === "diamonds"):
            //         cardImg.src = "./cardPhotos/Diamond_Q.png";
            //         break;
            //     case (card.Value === "K" && card.Suit === "diamonds"):
            //         cardImg.src = "./cardPhotos/Diamond_K.png";
            //         break;
            //     case (card.Value === "A" && card.Suit === "diamonds"):
            //         cardImg.src = "./cardPhotos/Diamond_A.png";
            //         break;
            //     case (card.Value === "2" && card.Suit === "hearts"):
            //         cardImg.src = "./cardPhotos/Heart_2.png";
            //         break;
            //     case (card.Value === "3" && card.Suit === "hearts"):
            //         cardImg.src = "./cardPhotos/Heart_3.png";
            //         break;
            //     case (card.Value === "4" && card.Suit === "hearts"):
            //         cardImg.src = "./cardPhotos/Heart_4.png";
            //         break;
            //     case (card.Value === "5" && card.Suit === "hearts"):
            //         cardImg.src = "./cardPhotos/Heart_5.png";
            //         break;
            //     case (card.Value === "6" && card.Suit === "hearts"):
            //         cardImg.src = "./cardPhotos/Heart_6.png";
            //         break;
            //     case (card.Value === "7" && card.Suit === "hearts"):
            //         cardImg.src = "./cardPhotos/Heart_7.png";
            //         break;
            //     case (card.Value === "8" && card.Suit === "hearts"):
            //         cardImg.src = "./cardPhotos/Heart_8.png";
            //         break;
            //     case (card.Value === "9" && card.Suit === "hearts"):
            //         cardImg.src = "./cardPhotos/Heart_9.png";
            //         break;
            //     case (card.Value === "10" && card.Suit === "hearts"):
            //         cardImg.src = "./cardPhotos/Heart_10.png";
            //         break;
            //     case (card.Value === "J" && card.Suit === "hearts"):
            //         cardImg.src = "./cardPhotos/Heart_J.png";
            //         break;
            //     case (card.Value === "Q" && card.Suit === "hearts"):
            //         cardImg.src = "./cardPhotos/Heart_Q.png";
            //         break;
            //     case (card.Value === "K" && card.Suit === "hearts"):
            //         cardImg.src = "./cardPhotos/Heart_K.png";
            //         break;
            //     case (card.Value === "A" && card.Suit === "hearts"):
            //         cardImg.src = "./cardPhotos/Heart_A.png";
            //         break;
            //     case (card.Value === "2" && card.Suit === "spades"):
            //         cardImg.src = "./cardPhotos/Spade_2.png";
            //         break;
            //     case (card.Value === "3" && card.Suit === "spades"):
            //         cardImg.src = "./cardPhotos/Spade_3.png";
            //         break;
            //     case (card.Value === "4" && card.Suit === "spades"):
            //         cardImg.src = "./cardPhotos/Spade_4.png";
            //         break;
            //     case (card.Value === "5" && card.Suit === "spades"):
            //         cardImg.src = "./cardPhotos/Spade_5.png";
            //         break;
            //     case (card.Value === "6" && card.Suit === "spades"):
            //         cardImg.src = "./cardPhotos/Spade_6.png";
            //         break;
            //     case (card.Value === "7" && card.Suit === "spades"):
            //         cardImg.src = "./cardPhotos/Spade_7.png";
            //         break;
            //     case (card.Value === "8" && card.Suit === "spades"):
            //         cardImg.src = "./cardPhotos/Spade_8.png";
            //         break;
            //     case (card.Value === "9" && card.Suit === "spades"):
            //         cardImg.src = "./cardPhotos/Spade_9.png";
            //         break;
            //     case (card.Value === "10" && card.Suit === "spades"):
            //         cardImg.src = "./cardPhotos/Spade_10.png";
            //         break;
            //     case (card.Value === "J" && card.Suit === "spades"):
            //         cardImg.src = "./cardPhotos/Spade_J.png";
            //         break;
            //     case (card.Value === "Q" && card.Suit === "spades"):
            //         cardImg.src = "./cardPhotos/Spade_Q.png";
            //         break;
            //     case (card.Value === "K" && card.Suit === "spades"):
            //         cardImg.src = "./cardPhotos/Spade_K.png";
            //         break;
            //     case (card.Value === "A" && card.Suit === "spades"):
            //         cardImg.src = "./cardPhotos/Spade_A.png";
            //         break;
            //     default:
            //         cardImg.src = "./cardPhotos/MTG_Card_Back.jpg";
            //         break;
            // }
            cardImg.id = `${card.Value} of ${card.Suit}`
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
        var dropImg = document.getElementById(document.images[list.selectedIndex].id);
        dropImg.parentNode.removeChild(dropImg);
        // Adds the chosen card to the discard pile and removes it from your hand
        discardPile.unshift(hand[list.selectedIndex]);
        hand.splice(list.selectedIndex, 1);
        list.remove(list.selectedIndex);
    } else {
        document.getElementById("alert2").style.visibility = "visible";
    }
}
var cardsInPlay = [];
var cardId = cards;  

var cards = [
 	{	//Object0 = Queen
	 	rank: "queen",
	 	suit: "hearts",
	 	cardImage: "images/queen-of-hearts.png"	
 	},
 	
 	{	//Object1 = Queen
 		rank: "queen",
 		suit: "diamonds",
 		cardImage: "images/queen-of-diamonds.png"	
 	},
 	{	//Object2 = King
 		rank: "king",
 		suit: "hearts",
 		cardImage: "images/king-of-hearts.png"	
 	},
 	{	//Object3 = King
 		rank: "king",
 		suit: "diamonds",
 		cardImage: "images/king-of-diamonds.png"
 	}	
];


var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	    console.log("You found a match!");
	  } else {
	    console.log("Sorry, try again.");
	  }
	};


var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank)
	this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
};

var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	/*document.createElement(cardElement);*/
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
}
}; 

checkForMatch(flipCard);
createBoard();





















































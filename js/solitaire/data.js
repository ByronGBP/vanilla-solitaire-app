function Data () {
  this.stackCards = [];
  this.flippedCards = [];
  this.aceSpaceCards = [];
  this.pileSpaceCards = [];

  this._init();
}

Data.prototype._init = function () {
  this._generateStackDeck();
  this._shuffleCards();
};

Data.prototype.getNextCardFromStack = function (callback) {
  var card = this._getNextCardFrom('stack');
  if (card) {
    this._pushCardTo('flipped', card);
  }
  callback(card);
};

Data.prototype.restartStackCards = function () {
  while (this.flippedCards.length > 0) {
    this.stackCards.push(this.flippedCards.shift());
  }
};

Data.prototype._getNextCardFrom = function (deck) {
  switch (deck) {
  case 'stack':
    return this.stackCards.shift();
  }
};

Data.prototype._pushCardTo = function (deck, card) {
  switch (deck) {
  case 'flipped':
    this.flippedCards.push(card);
    break;
  }
};

Data.prototype._generateStackDeck = function () {
  var length = CARDS.length;

  for (var i = 0; i < length; i++) {
    var newCard = new Card(CARDS[i].value, CARDS[i].suit);
    this.stackCards.push(newCard);
  }
};

Data.prototype._shuffleCards = function () {
  var lenght = this.stackCards.length;

  for (var i = 0; i < lenght; i++) {
    var randomIndex = Math.floor(Math.random() * i);
    var temporaryValue = this.stackCards[i];
    this.stackCards[i] = this.stackCards[randomIndex];
    this.stackCards[randomIndex] = temporaryValue;
  }
};

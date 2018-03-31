function Data () {
  this.stackCards = {};
  this.flippedCards = {};
  this.aceSpaceCards = {};
  this.pileSpaceCards = {};
  this._init();
}

Data.prototype._init = function () {
  this._generateStackDeck();
  this._shuffleCards();
  this._generatePileDeck();
  this._generateAceDeck();
};

Data.prototype.getInitialsCards = function (callback) {
  callback(this.pileSpaceCards, this.stackCards);
};

Data.prototype.getCardFrom = function (origin, idCard) {
  var idx = 0;
  if (idCard) {
    var infoCard = this._getInfoCardFromId(idCard);
    idx = infoCard.idx;
  }

  if (origin.includes(TYPE.ace)) {
    return this.aceSpaceCards[origin][idx];
  } else if (origin.includes(TYPE.pile)) {
    return this.pileSpaceCards[origin][idx];
  } else if (origin.includes(TYPE.flipped)) {
    return this.flippedCards[origin][idx];
  }
};

Data.prototype.getCardsFrom = function (origin, idCard, callback) {
  var cards = null;
  var idx = this._getIdxFromId(idCard) + 1;
  if (origin.includes(TYPE.flipped)) {
    cards = this._getCardsFrom(this.flippedCards, idx, origin);
    callback(cards, this.flippedCards[origin]);
  } else if (origin.includes(TYPE.ace)) {
    cards = this._getCardsFrom(this.aceSpaceCards, idx, origin);
    callback(cards, this.aceSpaceCards[origin]);
  } else if (origin.includes(TYPE.pile)) {
    cards = this._getCardsFrom(this.pileSpaceCards, idx, origin);
    callback(cards, this.pileSpaceCards[origin]);
  } else if (origin.includes(TYPE.stack)) {
    cards = this._getCardsFrom(this.stackCards, idx, origin);
    if (cards.length > 0) {
      cards[0].flip = true;
      this._pushCardsTo(this.flippedCards, cards, TYPE.flipped);
    }
    callback(cards, this.stackCards[origin]);
  }
};

Data.prototype.addCardsTo = function (destination, cards, callback) {
  if (destination.includes(TYPE.ace)) {
    this._pushCardsTo(this.aceSpaceCards, cards, destination);
    callback(this.aceSpaceCards[destination]);
  }
  if (destination.includes(TYPE.pile)) {
    this._pushCardsTo(this.pileSpaceCards, cards, destination);
    callback(this.pileSpaceCards[destination]);
  }
};

Data.prototype.isAceCompleted = function () {
  for (var key in this.aceSpaceCards) {
    if (this.aceSpaceCards[key].length !== 13) {
      return false;
    }
  }
  return true;
};

Data.prototype.flipCard = function (idCard, callback) {
  var infoCard = this._getInfoCardFromId(idCard);
  var deck = infoCard.deck;
  var idx = infoCard.idx;

  if (idx === 0) {
    this.pileSpaceCards[deck][idx].flip = true;
  }
  callback(this.pileSpaceCards[deck], deck);
};

Data.prototype.restartStackCards = function () {
  while (this.flippedCards[TYPE.flipped].length > 0) {
    var card = this.flippedCards[TYPE.flipped].pop();
    card.flip = false;
    this.stackCards[TYPE.stack].push(card);
  }
};

Data.prototype._getCardsFrom = function (deck, idx, origin) {
  var cards = [];
  this._checkObject(deck, origin);
  if (deck[origin].length === 0) {
    return cards;
  }

  for (var i = 0; i < idx; i++) {
    cards.unshift(deck[origin].shift());
  }
  return cards;
};

Data.prototype._pushCardsTo = function (deck, cards, origin) {
  this._checkObject(deck, origin);
  for (var i = 0; i < cards.length; i++) {
    deck[origin].unshift(cards[i]);
  }
};

Data.prototype._generateStackDeck = function () {
  var length = CARDS.length;
  this._checkObject(this.stackCards, TYPE.stack);
  for (var i = 0; i < length; i++) {
    var newCard = new Card(CARDS[i].value, CARDS[i].suit, CARDS[i].color, CARDS[i].point, false);
    this.stackCards[TYPE.stack].push(newCard);
  }
};

Data.prototype._generatePileDeck = function () {
  var i = 0;
  while (i < 7) {
    var flipped = true;
    var key = TYPE.pile + i++;
    this._checkObject(this.pileSpaceCards, key);
    for (var j = 0; j < i; j++) {
      var card = this.stackCards[TYPE.stack].pop();
      card.flip = flipped;
      this.pileSpaceCards[key].push(card);
      flipped = false;
    }
  }
};

Data.prototype._generateAceDeck = function () {
  for (var i = 0; i < 4; i++) {
    var key = TYPE.ace + i;
    this._checkObject(this.aceSpaceCards, key);
  }
};

Data.prototype._shuffleCards = function () {
  var lenght = CARDS.length;

  for (var i = 0; i < lenght; i++) {
    var randomIndex = Math.floor(Math.random() * i);
    var temporaryValue = this.stackCards[TYPE.stack][i];
    this.stackCards[TYPE.stack][i] = this.stackCards[TYPE.stack][randomIndex];
    this.stackCards[TYPE.stack][randomIndex] = temporaryValue;
  }
};

Data.prototype._checkObject = function (object, key) {
  if (!object[key]) {
    object[key] = [];
  }
};

Data.prototype._getIdxFromId = function (id) {
  return Number(id.slice(-1));
};

Data.prototype._getInfoCardFromId = function (cardId) {
  var infoCard = cardId.split('-card-');
  var infoCardObj = {
    deck: infoCard[0],
    idx: Number(infoCard[1])
  };
  return infoCardObj;
};

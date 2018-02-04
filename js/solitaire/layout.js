function Layout () {
  this.containerElement = null;
  this.template = null;
  this.aceSpaceElement = null;
  this.pileSpaceElement = null;
  this.stackCardElement = null;
  this.flippedCardElement = null;
  this.button = null;

  this._build();
}

Layout.prototype.showCardsOn = function (destination, cards) {
  var childElement = null;
  if (destination.includes(TYPE.flipped)) {
    this._showCardsOn(this.flippedCardElement, cards, true);
  } else if (destination.includes(TYPE.ace)) {
    childElement = this._getChildFrom(destination);
    this._showCardsOn(childElement, cards, true);
  } else if (destination.includes(TYPE.pile)) {
    childElement = this._getChildFrom(destination);
    this._showCardsOn(childElement, cards, false);
  }
};

Layout.prototype.removeCardOnFlipped = function () {
  this._removeCardsOn(this.flippedCardElement);
};

Layout.prototype._getChildFrom = function (id) {
  return byQuery.getById(id);
};

Layout.prototype._showCardsOn = function (elem, cards, onlyOne) {
  this._removeCardsOn(elem);
  if (cards.length === 0) {
    return;
  }
  var cardElem = null;
  if (onlyOne) {
    cardElem = this._createCard(cards[0].value, cards[0].suit);
    byQuery.appendTo(elem, cardElem);
  } else {
    var idx = cards.length - 1;

    for (var i = idx; i >= 0; i--) {
      cardElem = this._createCard(cards[i].value, cards[i].suit);
      byQuery.appendTo(elem, cardElem);
    }
  }
};

Layout.prototype._removeCardsOn = function (elem) {
  byQuery.removeChildrenFrom(elem);
};

Layout.prototype._createCard = function (value, suit) {
  var divCard = byQuery.generateDiv(null, 'card');
  var suitElem = byQuery.generateText('h3', suit);
  var valueElem = byQuery.generateText('h3', value);
  byQuery.appendTo(divCard, [suitElem, valueElem]);
  return divCard;
};

Layout.prototype._build = function () {
  this.containerElement = byQuery.generateDiv('game-element');
  this.template = new SolitaireTemplate(this.containerElement);
  this._declareElements();
};

Layout.prototype._declareElements = function () {
  var leftContainer = byQuery.getChildrenFrom(this.template.topElement, 0);
  this.stackCardElement = byQuery.getChildrenFrom(leftContainer, 0);
  this.flippedCardElement = byQuery.getChildrenFrom(leftContainer, 1);
  this.aceSpaceElement = byQuery.getChildrenFrom(this.template.topElement, 1);
  this.pileSpaceElement = byQuery.getChildrenFrom(this.template.bottomElement, 0);
  this.button = this.template.button;
};

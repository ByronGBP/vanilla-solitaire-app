function Layout (handleFlippedClick, handleClick) {
  this.containerElement = null;
  this.template = null;
  this.aceSpaceElement = null;
  this.pileSpaceElement = null;
  this.stackCardElement = null;
  this.flippedCardElement = null;
  this.button = null;

  var self = this;
  self._handleFlippedCardClick = handleFlippedClick;
  self._handleCardClick = handleClick;

  self._build();
}

Layout.prototype.showCardsOn = function (destination, cards) {
  var childElement = null;
  if (destination.includes(TYPE.stack)) {
    this._showCardsOn(destination, this.stackCardElement, cards, true);
  } else if (destination.includes(TYPE.flipped)) {
    this._showCardsOn(destination, this.flippedCardElement, cards, true);
  } else if (destination.includes(TYPE.ace)) {
    childElement = this._getChildFrom(destination);
    this._showCardsOn(destination, childElement, cards, true);
  } else if (destination.includes(TYPE.pile)) {
    childElement = this._getChildFrom(destination);
    this._showCardsOn(destination, childElement, cards, false);
  }
};

Layout.prototype.removeCardOnFlipped = function () {
  this._removeCardsOn(this.flippedCardElement);
};

Layout.prototype.selectCard = function (elemId) {
  bQuery.addClass(elemId, 'clicked');
};

Layout.prototype.unselectCard = function (elemId) {
  bQuery.removeClass(elemId, 'clicked');
};

Layout.prototype._getChildFrom = function (id) {
  return bQuery.getById(id);
};

Layout.prototype._showCardsOn = function (destination, elem, cards, onlyOne) {
  this._removeCardsOn(elem);
  if (cards.length === 0) {
    return;
  }
  var cardElem = null;
  var id = null;
  if (onlyOne) {
    id = destination + '-card-' + 0;
    cardElem = this._createCard(cards[0], id);
    bQuery.appendTo(elem, cardElem);
  } else {
    var idx = cards.length - 1;

    for (var i = idx; i > -1; i--) {
      id = destination + '-card-' + i;
      cardElem = this._createCard(cards[i], id);
      bQuery.appendTo(elem, cardElem);
    }
  }
};

Layout.prototype._removeCardsOn = function (elem) {
  bQuery.removeEventClickTo(elem, this._handleFlippedCardClick);
  bQuery.removeEventClickTo(elem, this._handleCardClick);
  bQuery.removeChildrenFrom(elem);
};

Layout.prototype._createCard = function (card, id) {
  var flip = card.flip;
  var divCard = null;
  if (flip) {
    divCard = bQuery.generateDiv(id, ['card', card.color, 'georgia-font']);
    var suit = card.suit;
    var value = card.value;
    var color = card.color;
    var suitShadowElem = bQuery.generateText('h3', suit, TYPE.shadowSuit + color);
    var suitElem = bQuery.generateText('h3', suit);
    bQuery._setAttribute(divCard, 'number', value);
    bQuery.appendTo(divCard, [suitShadowElem, suitElem]);
    bQuery.addEventClickTo(divCard, this._handleFlippedCardClick);
  } else {
    divCard = bQuery.generateDiv(id, ['card', 'flipped', 'georgia-font']);
    bQuery.addEventClickTo(divCard, this._handleCardClick);
  }
  return divCard;
};

Layout.prototype._build = function () {
  this.containerElement = bQuery.generateDiv('game-element');
  this.template = new Solitaire(this.containerElement);
  this._declareElements();
};

Layout.prototype._declareElements = function () {
  var leftContainer = bQuery.getChildrenFrom(this.template.topElement, 0);
  this.stackCardElement = bQuery.getChildrenFrom(leftContainer, 0);
  this.flippedCardElement = bQuery.getChildrenFrom(leftContainer, 1);
  this.aceSpaceElement = bQuery.getChildrenFrom(this.template.topElement, 1);
  this.pileSpaceElement = bQuery.getChildrenFrom(this.template.bottomElement, 0);
  this.button = this.template.button;
};

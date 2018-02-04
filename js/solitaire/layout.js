function Layout (handleClick) {
  this.containerElement = null;
  this.template = null;
  this.aceSpaceElement = null;
  this.pileSpaceElement = null;
  this.stackCardElement = null;
  this.flippedCardElement = null;
  this.button = null;

  var self = this;
  self._handleCardClick = handleClick;

  self._build();
}

Layout.prototype.showCardsOn = function (destination, cards) {
  var childElement = null;
  if (destination.includes(TYPE.flipped)) {
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
  byQuery.changeBorderColor(elemId, 'pink');
};

Layout.prototype.unselectCard = function (elemId) {
  byQuery.changeBorderColor(elemId, 'black');
};

Layout.prototype._getChildFrom = function (id) {
  return byQuery.getById(id);
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
    cardElem = this._createCard(cards[0].value, cards[0].suit, id);
    byQuery.appendTo(elem, cardElem);
  } else {
    var idx = cards.length - 1;

    for (var i = idx; i >= 0; i--) {
      id = destination + '-card-' + i;
      cardElem = this._createCard(cards[i].value, cards[i].suit, id);
      byQuery.appendTo(elem, cardElem);
    }
  }
};

Layout.prototype._removeCardsOn = function (elem) {
  byQuery.removeEventClickTo(elem, this._handleCardClick);
  byQuery.removeChildrenFrom(elem);
};

Layout.prototype._createCard = function (value, suit, id) {
  var divCard = byQuery.generateDiv(id, 'card');
  var suitElem = byQuery.generateText('h3', suit);
  var valueElem = byQuery.generateText('h3', value);
  byQuery.appendTo(divCard, [suitElem, valueElem]);
  byQuery.addEventClickTo(divCard, this._handleCardClick);
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

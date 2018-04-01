function GameView (handleFlippedClick, handleClick) {
  var self = this;
  self.containerElement = null;
  self.template = null;
  self.aceSpaceElement = null;
  self.pileSpaceElement = null;
  self.stackCardElement = null;
  self.flippedCardElement = null;
  self.buttonElement = null;

  self._handleFlippedCardClick = handleFlippedClick;
  self._handleCardClick = handleClick;

  self._build();
}

GameView.prototype.showCardsOn = function (destination, cards) {
  var self = this;
  var childElement = null;
  if (destination.includes(TYPE.stack)) {
    self._showCardsOn(destination, self.stackCardElement, cards, true);
  } else if (destination.includes(TYPE.flipped)) {
    self._showCardsOn(destination, self.flippedCardElement, cards, true);
  } else if (destination.includes(TYPE.ace)) {
    childElement = self._getChildFrom(destination);
    self._showCardsOn(destination, childElement, cards, true);
  } else if (destination.includes(TYPE.pile)) {
    childElement = self._getChildFrom(destination);
    self._showCardsOn(destination, childElement, cards, false);
  }
};

GameView.prototype.removeCardOnFlipped = function () {
  var self = this;
  self._removeCardsOn(this.flippedCardElement);
};

GameView.prototype.selectCard = function (elemId) {
  bQuery.addClass(elemId, 'clicked');
};

GameView.prototype.unselectCard = function (elemId) {
  bQuery.removeClass(elemId, 'clicked');
};

GameView.prototype._getChildFrom = function (id) {
  return bQuery.getById(id);
};

GameView.prototype._showCardsOn = function (destination, elem, cards, onlyOne) {
  var self = this;
  self._removeCardsOn(elem);
  if (cards.length === 0) {
    return;
  }
  var cardElem = null;
  var id = null;
  if (onlyOne) {
    id = destination + '-card-' + 0;
    cardElem = self._createCard(cards[0], id);
    bQuery.appendTo(elem, cardElem);
  } else {
    var idx = cards.length - 1;

    for (var i = idx; i > -1; i--) {
      id = destination + '-card-' + i;
      cardElem = self._createCard(cards[i], id);
      bQuery.appendTo(elem, cardElem);
    }
  }
};

GameView.prototype._removeCardsOn = function (elem) {
  var self = this;
  bQuery.removeEventClickTo(elem, self._handleFlippedCardClick);
  bQuery.removeEventClickTo(elem, self._handleCardClick);
  bQuery.removeChildrenFrom(elem);
};

GameView.prototype._createCard = function (card, id) {
  var self = this;
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
    bQuery.addEventClickTo(divCard, self._handleFlippedCardClick);
  } else {
    divCard = bQuery.generateDiv(id, ['card', 'flipped', 'georgia-font']);
    bQuery.addEventClickTo(divCard, self._handleCardClick);
  }
  return divCard;
};

GameView.prototype._build = function () {
  var self = this;
  self.containerElement = bQuery.generateDiv('game-element');
  self.template = new SolitaireTemplate(self.containerElement);
  self._declareElements();
};

GameView.prototype._declareElements = function () {
  var self = this;
  var leftContainer = bQuery.getChildrenFrom(self.template.topElement, 0);
  self.stackCardElement = bQuery.getChildrenFrom(leftContainer, 0);
  self.flippedCardElement = bQuery.getChildrenFrom(leftContainer, 1);
  self.aceSpaceElement = bQuery.getChildrenFrom(self.template.topElement, 1);
  self.pileSpaceElement = bQuery.getChildrenFrom(self.template.bottomElement, 0);
  self.buttonElement = self.template.buttonElement;
};

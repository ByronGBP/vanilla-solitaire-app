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

Layout.prototype.showCardOnFlipped = function (value, suit) {
  this._showCardOn(TYPE.flipped, value, suit);
};

Layout.prototype.removeCardOnFlipped = function () {
  this._removeCardOn(TYPE.flipped);
};

Layout.prototype._showCardOn = function (elem, value, suit) {
  var cardElem = this._createCard(value, suit);
  switch (elem) {
  case TYPE.flipped:
    this._removeCardOn(TYPE.flipped);
    byQuery.appendTo(this.flippedCardElement, cardElem);
    break;
  }
};

Layout.prototype._removeCardOn = function (elem) {
  switch (elem) {
  case TYPE.flipped:
    byQuery.removeChildrenFrom(this.flippedCardElement);
    break;
  }
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

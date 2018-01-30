function Layout () {
  this.containerElement = null;
  this.template = null;
  this.aceSpaceElement = null;
  this.pileSpaceElement = null;
  this.stackCardElement = null;
  this.flippedCardElement = null;

  var self = this;
  self._handleClickStackCard = function (e) {
    console.log(e.currentTarget.id);
  };

  self._handleClickFlippedCard = function (e) {
    console.log(e.currentTarget.id);
  };

  self._handleClickAceSpace = function (e) {
    console.log(e.currentTarget.id);
  };

  self._handleClickPileSpace = function (e) {
    console.log(e.currentTarget.id);
  };

  this._build();
}

Layout.prototype._build = function () {
  this.containerElement = byQuery.generateDiv('game-element');
  this.template = new SolitaireTemplate(this.containerElement);
  this._declareElements();
  this._setupHandleClicks();
};

Layout.prototype._declareElements = function () {
  var leftContainer = byQuery.getChildrenFrom(this.template.topElement, 0);
  this.stackCardElement = byQuery.getChildrenFrom(leftContainer, 0);
  this.flippedCardElement = byQuery.getChildrenFrom(leftContainer, 1);
  this.aceSpaceElement = byQuery.getChildrenFrom(this.template.topElement, 1);
  this.pileSpaceElement = byQuery.getChildrenFrom(this.template.bottomElement, 0);
};

Layout.prototype._setupHandleClicks = function () {
  var self = this;

  byQuery.addEventClickTo(self.stackCardElement, self._handleClickStackCard);
  byQuery.addEventClickTo(self.flippedCardElement, self._handleClickFlippedCard);
  byQuery.addEventClickTo(self.aceSpaceElement.children, self._handleClickAceSpace);
  byQuery.addEventClickTo(self.pileSpaceElement.children, self._handleClickPileSpace);
};

Layout.prototype.getButton = function () {
  return this.template.button;
};

Layout.prototype.getTopEement = function () {
  return this.template.topElement;
};

Layout.prototype.getBottomElement = function () {
  return this.template.bottomElement;
};

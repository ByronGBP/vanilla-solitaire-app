function Layout () {
  this.containerElement = null;
  this.template = null;
  this.aceSpaceElement = null;
  this.pileSpaceElement = null;
  this.stackCardElement = null;
  this.flippedCardElement = null;

  this._build();
}

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

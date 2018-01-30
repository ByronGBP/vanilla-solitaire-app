function Layout () {
  this.containerElement = null;
  this.template = null;

  this._build();
}

Layout.prototype._build = function () {
  this.containerElement = byQuery.generateDiv('game-element');
  this.template = new SolitaireTemplate(this.containerElement);
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

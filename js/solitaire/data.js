function Data () {
  this.stackCards = null;
  this.flippedCards = null;
  this.aceSpaceCards = null;
  this.pileSpaceCards = null;
}

Data.prototype.init = function () {
  this.stackCards = this._createDeck();
};

Data.prototype._createDeck = function () {

};

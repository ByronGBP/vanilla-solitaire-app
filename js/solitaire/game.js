function Game (mainElement) {
  this.mainElement = mainElement;

  this.layout = null;
  this.data = null;
  this.gameOver = null;

  var self = this;
  self._handleClickGameOver = function () {
    self.gameOver();
  };

  self._handleStackCardClick = function (e) {
    self._computeStackClick();
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

  this.init();
}

Game.prototype.init = function () {
  this._setupGameLayout();
  this._setupGameData();
  this._setEventListeners();
};

Game.prototype._computeStackClick = function () {
  var self = this;
  self.data.getNextCardFromStack(function (card) {
    if (card) {
      self.layout.showCardOnFlipped(card.value, card.suit);
    } else {
      self.data.restartStackCards();
      self.layout.removeCardOnFlipped();
    }
    console.log('Flipped ', self.data.flippedCards, 'Stack ', self.data.stackCards);
  });
};

Game.prototype.onGameOver = function (callback) {
  this.gameOver = callback;
};

Game.prototype._setupGameLayout = function () {
  this.layout = new Layout();
  byQuery.appendTo(this.mainElement, this.layout.containerElement);
};

Game.prototype._setupGameData = function () {
  this.data = new Data();
};

Game.prototype._setEventListeners = function () {
  byQuery.addEventClickTo(this.layout.button, this._handleClickGameOver);
  byQuery.addEventClickTo(this.layout.stackCardElement, this._handleStackCardClick);
  byQuery.addEventClickTo(this.layout.flippedCardElement, this._handleClickFlippedCard);
  byQuery.addEventClickTo(this.layout.aceSpaceElement.children, this._handleClickAceSpace);
  byQuery.addEventClickTo(this.layout.pileSpaceElement.children, this._handleClickPileSpace);
};

Game.prototype._removeEventListeners = function () {
  byQuery.removeEventClickTo(this.layout.button, this._handleClickGameOver);
  byQuery.removeEventClickTo(this.layout.stackCardElement, this._handleStackCardClick);
  byQuery.removeEventClickTo(this.layout.flippedCardElement, this._handleClickFlippedCard);
  byQuery.removeEventClickTo(this.layout.aceSpaceElement.children, this._handleClickAceSpace);
  byQuery.removeEventClickTo(this.layout.pileSpaceElement.children, this._handleClickPileSpace);
};

Game.prototype.destroy = function () {
  this._removeEventListeners();
  byQuery.remove(this.layout.containerElement);
};

function Game (mainElement) {
  this.mainElement = mainElement;

  this.layout = null;
  this.data = null;
  this.gameOver = null;
  this.previousMovement = null;
  this.previousCard = null;

  var self = this;
  self._handleClickGameOver = function () {
    self.gameOver();
  };

  self._handleStackCardClick = function (e) {
    self._computeStackClick();
  };

  self._handleMovementClick = function (e) {
    var clickId = e.currentTarget.id;
    self._computeMovementClick(clickId);
  };

  self._handleCardClick = function (e) {
    console.log(e.currentTarget.id);
    if (!self.previousCard) {
      self.previousCard = e.currentTarget.id;
    }
  };

  this.init();
}

Game.prototype.init = function () {
  this._setupGameLayout();
  this._setupGameData();
  this._setEventListeners();
};

Game.prototype._computeMovementClick = function (clickId) {
  if (this.previousMovement) {
    this._computeMovement(this.previousMovement, clickId);
    this.previousMovement = null;
    this.previousCard = null;
  } else {
    this.previousMovement = clickId;
  }
};

Game.prototype._computeMovement = function (origin, destination) {
  var self = this;
  console.log(origin, destination);
  self.data.getCardsFrom(origin, this.previousCard, function (cards, remainderCards) {
    if (cards.length > 0) {
      self.data.addCardsTo(destination, cards, function (addedCards) {
        self.layout.showCardsOn(origin, remainderCards);
        self.layout.showCardsOn(destination, addedCards);
      });
    }
  });
  console.log(self.data.flippedCards);
  console.log(self.data.pileSpaceCards);
  console.log(self.data.aceSpaceCards);
};

Game.prototype._computeStackClick = function () {
  var self = this;
  self.previousMovement = null;
  self.previousCard = null;
  self.data.getCardsFrom(TYPE.stack, '0', function (cards) {
    if (cards.length > 0) {
      self.layout.showCardsOn(TYPE.flipped, cards);
    } else {
      self.data.restartStackCards();
      self.layout.removeCardOnFlipped();
    }
  });
};

Game.prototype.onGameOver = function (callback) {
  this.gameOver = callback;
};

Game.prototype._setupGameLayout = function () {
  this.layout = new Layout(this._handleCardClick);
  byQuery.appendTo(this.mainElement, this.layout.containerElement);
};

Game.prototype._setupGameData = function () {
  this.data = new Data();
};

Game.prototype._setEventListeners = function () {
  byQuery.addEventClickTo(this.layout.button, this._handleClickGameOver);
  byQuery.addEventClickTo(this.layout.stackCardElement, this._handleStackCardClick);
  byQuery.addEventClickTo(this.layout.flippedCardElement, this._handleMovementClick);
  byQuery.addEventClickTo(this.layout.aceSpaceElement.children, this._handleMovementClick);
  byQuery.addEventClickTo(this.layout.pileSpaceElement.children, this._handleMovementClick);
};

Game.prototype._removeEventListeners = function () {
  byQuery.removeEventClickTo(this.layout.button, this._handleClickGameOver);
  byQuery.removeEventClickTo(this.layout.stackCardElement, this._handleMovementClick);
  byQuery.removeEventClickTo(this.layout.flippedCardElement, this._handleMovementClick);
  byQuery.removeEventClickTo(this.layout.aceSpaceElement.children, this._handleMovementClick);
  byQuery.removeEventClickTo(this.layout.pileSpaceElement.children, this._handleMovementClick);
};

Game.prototype.destroy = function () {
  this._removeEventListeners();
  byQuery.remove(this.layout.containerElement);
};

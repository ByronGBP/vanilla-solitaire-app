function Game (mainElement) {
  var self = this;
  self.mainElement = mainElement;

  self.layout = null;
  self.data = null;
  self.movements = null;
  self.points = null;
  self.gameOver = null;
  self.previousMovement = null;
  self.previousCard = null;
  self.clickOnFlipped = null;

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

  self._handleFlippedCardClick = function (e) {
    if (!self.previousCard) {
      self.previousCard = e.currentTarget.id;
      self.layout.selectCard(self.previousCard);
    }
  };

  self._handleCardClick = function (e) {
    var origin = e.currentTarget.id;
    if (origin.includes(TYPE.pile)) {
      self.data.flipCard(origin, function (deck, name) {
        self.layout.showCardsOn(name, deck);
      });
      self.clickOnFlipped = true;
    }
  };

  this.init();
}

Game.prototype.init = function () {
  this._setupGameLayout();
  this._setupGameData();
  this._showInitialsCards();
  this._setEventListeners();
};

Game.prototype._computeMovementClick = function (clickId) {
  var self = this;
  if (self.previousMovement) {
    self._computeMovement(self.previousMovement, clickId);
    self._resetMovement();
  } else if (self._isValidClick(clickId) && !self.clickOnFlipped) {
    self.previousMovement = clickId;
  }
  self.clickOnFlipped = false;
};

Game.prototype._isValidClick = function (clickId) {
  return bQuery.getById(clickId).children.length > 0;
};

Game.prototype._computeMovement = function (origin, destination) {
  var self = this;
  self._checkValidMovement(origin, destination, self.previousCard, function (valid, points) {
    if (!valid) {
      return;
    }
    self.data.getCardsFrom(origin, self.previousCard, function (cards, remainderCards) {
      if (cards.length > 0) {
        self.data.addCardsTo(destination, cards, function (addedCards) {
          self.layout.showCardsOn(origin, remainderCards);
          self.layout.showCardsOn(destination, addedCards);
        });
      }
    });
    self.points += points;
  });
  self._updateStateGame();
};

Game.prototype._updateStateGame = function () {
  this.movements += 1;
  if (this.data.isAceCompleted()) {
    this.gameOver();
  }
};

Game.prototype._checkValidMovement = function (origin, destination, cardId, callback) {
  var valid = false;
  var points = 0;
  var cardGoing = this.data.getCardFrom(origin, cardId);
  var cardReciving = this.data.getCardFrom(destination);

  var toPile = destination.includes(TYPE.pile);
  var toAce = destination.includes(TYPE.ace);
  if (toPile && this._isCorrectPositionPile(cardGoing, cardReciving)) {
    valid = true;
  } else if (toAce && this._isCorrectPositionAce(cardGoing, cardReciving)) {
    valid = true;
    points = cardGoing.point;
  }
  callback(valid, points);
};

Game.prototype._isCorrectPositionPile = function (cardOne, cardTwo) {
  return (!cardTwo && cardOne.point === 13) || (cardTwo && cardOne.color !== cardTwo.color && (cardTwo.point - cardOne.point) === 1);
};

Game.prototype._isCorrectPositionAce = function (cardOne, cardTwo) {
  if (!cardTwo) {
    return cardOne.point === 1;
  }
  return cardOne.suit === cardTwo.suit && (cardOne.point - cardTwo.point) === 1;
};

Game.prototype._computeStackClick = function () {
  var self = this;
  self._resetMovement();
  self.data.getCardsFrom(TYPE.stack, '0', function (cards) {
    if (cards.length > 0) {
      self.layout.showCardsOn(TYPE.flipped, cards);
    } else {
      self.data.restartStackCards();
      self.layout.removeCardOnFlipped();
    }
    var stackCards = self.data.stackCards[TYPE.stack];
    self.layout.showCardsOn(TYPE.stack, stackCards);
  });
};

Game.prototype._resetMovement = function () {
  this.layout.unselectCard(this.previousCard);
  this.previousMovement = null;
  this.previousCard = null;
};

Game.prototype._setupGameLayout = function () {
  this.layout = new Layout(this._handleFlippedCardClick, this._handleCardClick);
  bQuery.appendTo(this.mainElement, this.layout.containerElement);
};

Game.prototype._setupGameData = function () {
  this.data = new Data();
};

Game.prototype._showInitialsCards = function () {
  var self = this;
  self.data.getInitialsCards(function (pileCards, stackCards) {
    for (var key in pileCards) {
      self.layout.showCardsOn(key, pileCards[key]);
    }
    self.layout.showCardsOn(TYPE.stack, stackCards[TYPE.stack]);
  });
};

Game.prototype._setEventListeners = function () {
  bQuery.addEventClickTo(this.layout.button, this._handleClickGameOver);
  bQuery.addEventClickTo(this.layout.stackCardElement, this._handleStackCardClick);
  bQuery.addEventClickTo(this.layout.flippedCardElement, this._handleMovementClick);
  bQuery.addEventClickTo(this.layout.aceSpaceElement.children, this._handleMovementClick);
  bQuery.addEventClickTo(this.layout.pileSpaceElement.children, this._handleMovementClick);
};

Game.prototype._removeEventListeners = function () {
  bQuery.removeEventClickTo(this.layout.button, this._handleClickGameOver);
  bQuery.removeEventClickTo(this.layout.stackCardElement, this._handleMovementClick);
  bQuery.removeEventClickTo(this.layout.flippedCardElement, this._handleMovementClick);
  bQuery.removeEventClickTo(this.layout.aceSpaceElement.children, this._handleMovementClick);
  bQuery.removeEventClickTo(this.layout.pileSpaceElement.children, this._handleMovementClick);
};

Game.prototype.onGameOver = function (callback) {
  this.gameOver = callback;
};

Game.prototype.destroy = function () {
  this._removeEventListeners();
  bQuery.remove(this.layout.containerElement);
};

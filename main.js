
function Environment () {
  this.mainElement = null;
  this.splashElement = null;
  this.splashButtonElement = null;
  this.gameOverElement = null;
  this.gameOverButtonElement = null;

  this._stage = null;
  this._lastStage = null;
  this.game = null;

  var self = this;
  self.handleClickSplash = function () {
    self.destroySplash();
    self.buildGame();
    self._reportState();
  };

  self.handleClickGameOver = function () {
    self.destroyGameOver();
    self.buildSplash();
    self._reportState();
  };

  this.init();
}

Environment.prototype.init = function () {
  this._setupMainElement();
};

Environment.prototype.buildSplash = function () {
  this._stage = 'splash';

  this._setupSplashElement();
  this._setupSplashButtonElement();
  bQuery.appendTo(this.mainElement, this.splashElement);
};

Environment.prototype.destroySplash = function () {
  this._saveLastStage();
  this.splashElement.remove();
  this.splashButtonElement.removeEventListener('click', this.handleClickSplash);
};

Environment.prototype.buildGame = function () {
  var self = this;
  self._stage = 'game';

  self.game = new Game(self.mainElement);
  self.game.onGameOver(function () {
    self.destroyGame();
    self.buildGameOver();
    self._reportState();
  });
};

Environment.prototype.destroyGame = function () {
  this._saveLastStage();

  this.game.destroy();
  this.game = null;
};

Environment.prototype.buildGameOver = function () {
  this._stage = 'gameover';
  this._setupGameOverElement();
  this._setupGameOverButtonElement();
  bQuery.appendTo(this.mainElement, this.gameOverElement);
};

Environment.prototype.destroyGameOver = function () {
  this._saveLastStage();

  this.gameOverElement.remove();
  this.gameOverButtonElement.removeEventListener('click', this.handleClickGameOver);
};

Environment.prototype._reportState = function () {
  console.log('From: ' + this._lastStage + ' -> ' + this._stage);
};

Environment.prototype._saveLastStage = function () {
  this._lastStage = this._stage;
};

Environment.prototype._setupMainElement = function () {
  this.mainElement = bQuery.getById('main-element');
};

Environment.prototype._setupSplashElement = function () {
  this.splashElement = bQuery.generateDiv('splash-element');
};

Environment.prototype._setupSplashButtonElement = function () {
  this.splashButtonElement = bQuery.generateButton('Go Game');
  bQuery.addEventClickTo(this.splashButtonElement, this.handleClickSplash);
  bQuery.appendTo(this.splashElement, this.splashButtonElement);
};

Environment.prototype._setupGameOverButtonElement = function () {
  this.gameOverButtonElement = bQuery.generateButton('Restart');
  bQuery.addEventClickTo(this.gameOverButtonElement, this.handleClickGameOver);
  bQuery.appendTo(this.gameOverElement, this.gameOverButtonElement);
};

Environment.prototype._setupGameOverElement = function () {
  this.gameOverElement = bQuery.generateDiv('gameover-element');
};

window.addEventListener('DOMContentLoaded', function () {
  var environment = new Environment();
  environment.buildSplash();
});

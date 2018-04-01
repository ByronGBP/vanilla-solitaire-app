
function Environment () {
  var self = this;
  self.mainElement = null;
  self.gameOverElement = null;
  self.gameOverButtonElement = null;

  self._stage = null;
  self._lastStage = null;

  self.game = null;
  self.splash = null;

  self.handleClickGameOver = function () {
    self.destroyGameOver();
    self.buildSplash();
    self._reportState();
  };

  self._init();
}

Environment.prototype._init = function () {
  var self = this;
  self._setupMainElement();
};

Environment.prototype.buildSplash = function () {
  var self = this;
  self._stage = 'splash';

  self.splash = new Splash(self.mainElement);
  self.splash.onClick(function () {
    self.destroySplash();
    self.buildGame();
    self._reportState();
  });
};

Environment.prototype.destroySplash = function () {
  var self = this;
  self._saveLastStage();
  self.splash.destroy();
  self.splash = null;
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
  var self = this;
  self._saveLastStage();

  self.game.destroy();
  self.game = null;
};

Environment.prototype.buildGameOver = function () {
  var self = this;
  self._stage = 'gameover';
  self._setupGameOverElement();
  self._setupGameOverButtonElement();
  bQuery.appendTo(self.mainElement, self.gameOverElement);
};

Environment.prototype.destroyGameOver = function () {
  var self = this;
  self._saveLastStage();

  self.gameOverElement.remove();
  self.gameOverButtonElement.removeEventListener('click', self.handleClickGameOver);
};

Environment.prototype._reportState = function () {
  var self = this;
  console.log('From: ' + self._lastStage + ' -> ' + self._stage);
};

Environment.prototype._saveLastStage = function () {
  var self = this;
  self._lastStage = self._stage;
};

Environment.prototype._setupMainElement = function () {
  var self = this;
  self.mainElement = bQuery.getById('main-element');
};

Environment.prototype._setupSplashElement = function () {
  var self = this;
  self.splashElement = bQuery.generateDiv('splash-element');
};

Environment.prototype._setupGameOverButtonElement = function () {
  var self = this;
  self.gameOverButtonElement = bQuery.generateButton('Restart');
  bQuery.addEventClickTo(self.gameOverButtonElement, self.handleClickGameOver);
  bQuery.appendTo(self.gameOverElement, self.gameOverButtonElement);
};

Environment.prototype._setupGameOverElement = function () {
  var self = this;
  self.gameOverElement = bQuery.generateDiv('gameover-element');
};

window.addEventListener('DOMContentLoaded', function () {
  var environment = new Environment();
  environment.buildSplash();
});

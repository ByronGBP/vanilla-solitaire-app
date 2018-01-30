function Game (mainElement) {
  this.mainElement = mainElement;
  this.gameElement = null;

  this.layout = null;
  this.gameOver = null;

  var self = this;
  self._handleClickGameOver = function () {
    self.gameOver();
  };

  this.init();
}

Game.prototype.init = function () {
  this._setupGameLayout();
};

Game.prototype.onGameOver = function (callback) {
  this.gameOver = callback;
};

Game.prototype._setupGameLayout = function () {
  this._buildTemplate();
  this._setEventListeners();
};

Game.prototype._buildTemplate = function () {
  this.layout = new Layout();
  this.mainElement.appendChild(this.layout.containerElement);
};

Game.prototype._setEventListeners = function () {
  byQuery.addEventClickTo(this.layout.getButton(), this._handleClickGameOver);
};

Game.prototype.destroy = function () {
  this.layout.containerElement.remove();
  byQuery.removeEventClickTo(this.layout.getButton(), this._handleClickGameOver);
};

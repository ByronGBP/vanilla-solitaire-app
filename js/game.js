function Game (mainElement) {  

    this.mainElement = mainElement;
    this.gameElement;

    this.gameOver;

    var self = this;
    self._handleClickGameOver =  function () {
        self.gameOver();
    }

    this.init();
}

Game.prototype.init = function () {
    this._setupGameElement();
    this._buildGame();
}

Game.prototype.onGameOver = function (callback) {
    this.gameOver = callback;
}

Game.prototype._setupGameElement = function () {
    this.gameElement = byQuery.createDiv();
    this.mainElement.appendChild(this.gameElement);
}

Game.prototype._buildGame = function () {
    var button = byQuery.createButton();
    byQuery.setTextTo(button, 'Game Over');
    byQuery.addEventClickTo(button, this._handleClickGameOver);
    this.gameElement.appendChild(button);

}

Game.prototype.destroy = function () {
    this.gameElement.remove();
}
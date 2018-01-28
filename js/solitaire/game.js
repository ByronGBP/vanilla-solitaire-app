function Game (mainElement) {  

    this.mainElement = mainElement;
    this.gameElement;
    this.buttonGameOverElement;

    this.solitaireLayaout;
    this.gameOver;

    var self = this;
    self._handleClickGameOver =  function () {
        self.gameOver();
    }

    this.init();
}

Game.prototype.init = function () {
    this.solitaireLayaout = new Layaout;
    this._setupGameElement();
    this._buildGame();
}

Game.prototype.onGameOver = function (callback) {
    this.gameOver = callback;
}

Game.prototype._setupGameElement = function () {
    this.gameElement = byQuery.createDiv();
    byQuery.setIdTo(this.gameElement, 'game-element');
    this.mainElement.appendChild(this.gameElement);
}

Game.prototype._buildGame = function () {

    this._setupButtonGameOverElement();

}

Game.prototype._setupButtonGameOverElement =  function () {
    this.buttonGameOverElement = byQuery.createButton();
    byQuery.setTextTo(this.buttonGameOverElement, 'Game Over');
    byQuery.addEventClickTo(this.buttonGameOverElement, this._handleClickGameOver);
    this.gameElement.appendChild(this.buttonGameOverElement);
}

Game.prototype.destroy = function () {
    this.gameElement.remove();
    this.buttonGameOverElement.removeEventListener('click', this._handleClickGameOver);
}

function Environment () {
    
    this.mainElement;
    this.splashElement;
    this.splashButtonElement;
    this.gameOverElement;
    this.gameOverButtonElement;

    this._stage;
    this._lastStage;
    this.game;

    var self = this;
    self.handleClickSplash = function () {
        self.destroySplash();
        self.buildGame();
        self._reportState();
    }

    self.handleClickGameOver = function () {
        self.destroyGameOver();
        self.buildSplash();
        self._reportState();
    }

    this.init();
}

Environment.prototype.init =  function () {
    this._setupMainElement();
}

Environment.prototype.buildSplash = function () {
    this._stage = 'splash';

    this._setupSplashElement();
    this._setupSplashButtonElement();
    this.mainElement.appendChild(this.splashElement);
}

Environment.prototype.destroySplash = function () {
    this._saveLastStage();
    this.splashElement.remove();
    this.splashButtonElement.removeEventListener('click', this.handleClickSplash);
}

Environment.prototype.buildGame = function () {
    var self = this;
    self._stage = 'game';

    self.game = new Game(self.mainElement);
    self.game.onGameOver(function () {
        self.destroyGame();
        self.buildGameOver();
        self._reportState();
    });
}   

Environment.prototype.destroyGame = function () {
    this._saveLastStage();

    this.game.destroy();
    this.game = null;
}

Environment.prototype.buildGameOver = function () {
    this._stage = 'gameover';
    this._setupGameOverElement();
    this._setupGameOverButtonElement();
    this.mainElement.appendChild(this.gameOverElement);
}

Environment.prototype.destroyGameOver = function () {
    this._saveLastStage();

    this.gameOverElement.remove();
    this.gameOverButtonElement.removeEventListener('click', this.handleClickGameOver);
}

Environment.prototype._reportState = function () {
    console.log('From: ' + this._lastStage + ' -> ' + this._stage);
}

Environment.prototype._saveLastStage = function () {
    this._lastStage = this._stage;
}

Environment.prototype._setupMainElement = function () {
    this.mainElement = byQuery.getById('main-element');
}

Environment.prototype._setupSplashElement = function () {
    this.splashElement = byQuery.createDiv();
    byQuery.setIdTo(this.splashElement, 'splash-element');
}

Environment.prototype._setupSplashButtonElement = function () {
    this.splashButtonElement = byQuery.createButton();
    byQuery.setTextTo(this.splashButtonElement, 'Go Game');
    byQuery.addEventClickTo(this.splashButtonElement, this.handleClickSplash);
    this.splashElement.appendChild(this.splashButtonElement);
}

Environment.prototype._setupGameOverButtonElement = function () {
    this.gameOverButtonElement = byQuery.createButton();
    byQuery.setTextTo(this.gameOverButtonElement, 'Restart');
    byQuery.addEventClickTo(this.gameOverButtonElement, this.handleClickGameOver);
    this.gameOverElement.appendChild(this.gameOverButtonElement);
}

Environment.prototype._setupGameOverElement = function () {
    this.gameOverElement = byQuery.createDiv();
    byQuery.setIdTo(this.gameOverElement, 'gameover-element');
}

window.addEventListener('DOMContentLoaded', function() {
    var environment = new Environment();
    environment.buildSplash();
})
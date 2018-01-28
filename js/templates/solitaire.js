
function SolitaireTemplate (contianerElement) {
    this.contianerElement = contianerElement;
    this.topElement;
    this.bottomElement;
    this.button;

    this._buildTemplate();
}

SolitaireTemplate.prototype._buildTemplate = function() {
    this._buildTopElement();
    this._buildBottomElement();
    this._buildButton();
}

SolitaireTemplate.prototype._buildTopElement = function () {   
    this.topElement = byQuery.createDivWithId('top-element');
    this._addChildToContainer(this.topElement);
}

SolitaireTemplate.prototype._buildBottomElement = function () {
    this.bottomElement =  byQuery.createDivWithId('bottom-element');
    this._addChildToContainer(this.bottomElement);
}

SolitaireTemplate.prototype._buildButton = function () {
    this.button = byQuery.createButtonWithIdAndText('game-over', 'Game Over')
    this._addChildToContainer(this.button);
}

SolitaireTemplate.prototype._addChildToContainer = function (elem) {
    this.contianerElement.appendChild(elem);
}
function Layout () {
    this.containerElement;
    this.template;

    this._build();
}

Layout.prototype._build = function () {
    this.containerElement = byQuery.createDivWithId('game-element');
    this.template = new SolitaireTemplate(this.containerElement);
}

Layout.prototype.getButton = function() {
    return this.template.button;
}

Layout.prototype.getTopEement = function() {
    return this.template.topElement;
}

Layout.prototype.getBottomElement = function() {
    return this.template.bottomElement;
}




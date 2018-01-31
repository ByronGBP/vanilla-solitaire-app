
function SolitaireTemplate (contianerElement) {
  this.contianerElement = contianerElement;
  this.topElement = null;
  this.bottomElement = null;
  this.button = null;
  this.NUMBER_ACE = 4;
  this.NUMBER_PILE = 7;

  this._buildTemplate();
}

SolitaireTemplate.prototype._buildTemplate = function () {
  this._buildTopElement();
  this._buildBottomElement();
  this._buildButton();
};

SolitaireTemplate.prototype._buildTopElement = function () {
  this.topElement = byQuery.generateDiv('top-element');
  var leftElement = this._buildTopLeftElement();
  var rightElement = this._buildTopRighttElement();
  byQuery.appendTo(this.topElement, [leftElement, rightElement]);
  this._addChildToContainer(this.topElement);
};

SolitaireTemplate.prototype._buildBottomElement = function () {
  this.bottomElement = byQuery.generateDiv('bottom-element');
  var pileContainer = byQuery.generateDiv('bottom-center-element');
  var arrayDivs = this._generateDivs(this.NUMBER_PILE, 'pile-card-', 'card');
  byQuery.appendTo(pileContainer, arrayDivs);
  byQuery.appendTo(this.bottomElement, pileContainer);
  this._addChildToContainer(this.bottomElement);
};

SolitaireTemplate.prototype._buildButton = function () {
  this.button = byQuery.generateButton('game-over', 'Game Over');
  this._addChildToContainer(this.button);
};

SolitaireTemplate.prototype._buildTopLeftElement = function () {
  var leftElement = byQuery.generateDiv('top-left-element');
  var stackElement = byQuery.generateDiv('stack-cards', 'card');
  var flippedElement = byQuery.generateDiv('flipped-cards', 'card');
  byQuery.appendTo(leftElement, [stackElement, flippedElement]);

  return leftElement;
};

SolitaireTemplate.prototype._buildTopRighttElement = function () {
  var rightElement = byQuery.generateDiv('top-right-element');
  var arrayDivs = this._generateDivs(this.NUMBER_ACE, 'ace-space-', 'card');
  byQuery.appendTo(rightElement, arrayDivs);

  return rightElement;
};

SolitaireTemplate.prototype._addChildToContainer = function (elem) {
  byQuery.appendTo(this.contianerElement, elem);
};

SolitaireTemplate.prototype._generateDivs = function (numberDivs, baseId, className) {
  var arrayDivs = [];
  for (var i = 0; i < numberDivs; i++) {
    var newDiv = byQuery.generateDiv(baseId + i, className);
    arrayDivs.push(newDiv);
  }

  return arrayDivs;
};

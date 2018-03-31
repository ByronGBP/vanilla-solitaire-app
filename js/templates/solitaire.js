
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
  this._buildButton();
  this._buildTopElement();
  this._buildBottomElement();
};

SolitaireTemplate.prototype._buildTopElement = function () {
  this.topElement = bQuery.generateDiv('top-element', 'flex');
  var leftElement = this._buildTopLeftElement();
  var rightElement = this._buildTopRighttElement();
  bQuery.appendTo(this.topElement, [leftElement, rightElement]);
  this._addChildToContainer(this.topElement);
};

SolitaireTemplate.prototype._buildBottomElement = function () {
  this.bottomElement = bQuery.generateDiv('bottom-element');
  var pileContainer = bQuery.generateDiv('bottom-center-element', 'flex');
  var arrayDivs = this._generateDivs(this.NUMBER_PILE, TYPE.pile, TYPE.card);
  bQuery.appendTo(pileContainer, arrayDivs);
  bQuery.appendTo(this.bottomElement, pileContainer);
  this._addChildToContainer(this.bottomElement);
};

SolitaireTemplate.prototype._buildButton = function () {
  this.button = bQuery.generateButton('game-over', 'Game Over');
  this._addChildToContainer(this.button);
};

SolitaireTemplate.prototype._buildTopLeftElement = function () {
  var leftElement = bQuery.generateDiv('top-left-element', 'flex');
  var stackElement = bQuery.generateDiv(TYPE.stack, TYPE.card);
  var flippedElement = bQuery.generateDiv(TYPE.flipped, TYPE.card);
  bQuery.appendTo(leftElement, [stackElement, flippedElement]);

  return leftElement;
};

SolitaireTemplate.prototype._buildTopRighttElement = function () {
  var rightElement = bQuery.generateDiv('top-right-element', 'flex');
  var arrayDivs = this._generateDivs(this.NUMBER_ACE, TYPE.ace, TYPE.card);
  bQuery.appendTo(rightElement, arrayDivs);

  return rightElement;
};

SolitaireTemplate.prototype._addChildToContainer = function (elem) {
  bQuery.appendTo(this.contianerElement, elem);
};

SolitaireTemplate.prototype._generateDivs = function (numberDivs, baseId, className) {
  var arrayDivs = [];
  for (var i = 0; i < numberDivs; i++) {
    var newDiv = bQuery.generateDiv(baseId + i, className);
    arrayDivs.push(newDiv);
  }

  return arrayDivs;
};

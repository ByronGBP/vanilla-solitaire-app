
function SolitaireTemplate (parentElement, stage) {
  var self = this;
  self.parentElement = parentElement;
  self.stage = stage;
  self.topElement = null;
  self.bottomElement = null;
  self.buttonElement = null;
  self.NUMBER_ACE = 4;
  self.NUMBER_PILE = 7;

  self._buildTemplate();
}

SolitaireTemplate.prototype._buildTemplate = function () {
  var self = this;
  self._buildButton();
  self._buildTopElement();
  self._buildBottomElement();
};

SolitaireTemplate.prototype._buildTopElement = function () {
  var self = this;
  self.topElement = bQuery.generateDiv('top-element', 'flex');
  var leftElement = self._buildTopLeftElement();
  var rightElement = self._buildTopRighttElement();
  bQuery.appendTo(self.topElement, [leftElement, rightElement]);
  self._addChildToContainer(self.topElement);
};

SolitaireTemplate.prototype._buildBottomElement = function () {
  var self = this;
  self.bottomElement = bQuery.generateDiv('bottom-element');
  var pileContainer = bQuery.generateDiv('bottom-center-element', 'flex');
  var arrayDivs = self._generateDivs(self.NUMBER_PILE, TYPE.pile, TYPE.card);
  bQuery.appendTo(pileContainer, arrayDivs);
  bQuery.appendTo(self.bottomElement, pileContainer);
  self._addChildToContainer(self.bottomElement);
};

SolitaireTemplate.prototype._buildButton = function () {
  var self = this;
  if (!self.stage) {
    self.buttonElement = bQuery.generateButton('game-over', 'Game Over');
    self._addChildToContainer(self.buttonElement);
  }
};

SolitaireTemplate.prototype._buildTopLeftElement = function () {
  var leftElement = bQuery.generateDiv('top-left-element', 'flex');
  var stackElement = bQuery.generateDiv(TYPE.stack, TYPE.card);
  var flippedElement = bQuery.generateDiv(TYPE.flipped, TYPE.card);
  bQuery.appendTo(leftElement, [stackElement, flippedElement]);

  return leftElement;
};

SolitaireTemplate.prototype._buildTopRighttElement = function () {
  var self = this;
  var rightElement = bQuery.generateDiv('top-right-element', 'flex');
  var arrayDivs = self._generateDivs(self.NUMBER_ACE, TYPE.ace, TYPE.card);
  bQuery.appendTo(rightElement, arrayDivs);

  return rightElement;
};

SolitaireTemplate.prototype._addChildToContainer = function (elem) {
  var self = this;
  bQuery.appendTo(self.parentElement, elem);
};

SolitaireTemplate.prototype._generateDivs = function (numberDivs, baseId, className) {
  var arrayDivs = [];
  for (var i = 0; i < numberDivs; i++) {
    var newDiv = bQuery.generateDiv(baseId + i, className);
    arrayDivs.push(newDiv);
  }

  return arrayDivs;
};

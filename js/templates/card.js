function CardTemplate (suit, value, color) {
  var self = this;
  self.suit = suit;
  self.value = value;
  self.color = color;
  self.elements = null;

  self._build();
}

CardTemplate.prototype._build = function () {
  var self = this;
  var suitShadowElem = bQuery.generateText('h3', self.suit, TYPE.shadowSuit + self.color);
  var suitElem = bQuery.generateText('h3', self.suit);
  self.elements = {
    shadow: suitShadowElem,
    suit: suitElem
  };
};

CardTemplate.prototype.appendCardTo = function (parent) {
  var self = this;
  var elements = [self.elements.shadow, self.elements.suit];
  bQuery._setAttribute(parent, 'number', self.value);
  bQuery.appendTo(parent, elements);
};

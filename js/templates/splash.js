function SplashTemplate (parentElement) {
  var self = this;
  SolitaireTemplate.call(self, parentElement, 'SplashTemplate');
  self.startElement = null;
  self.solitaireElement = null;
  self.buttonElement = null;
  self._build();
}

SplashTemplate.prototype = Object.create(SolitaireTemplate.prototype);
SplashTemplate.prototype.constructor = SplashTemplate;

SplashTemplate.prototype._build = function () {
  var self = this;
  self._reset();
  self._buildSolitaire();
  self._buildStart();
};

SplashTemplate.prototype._buildStart = function () {
  var self = this;
  self.startElement = bQuery.generateDiv('splash-start', ['flex', 'georgia-font']);
  self.buttonElement = bQuery.generateButton('Start', 'btn-splash');
  bQuery.appendTo(self.startElement, self.buttonElement);
  self._addChildToParent(self.startElement);
};

SplashTemplate.prototype._buildSolitaire = function () {
  var self = this;
  self.solitaireElement = bQuery.generateDiv('splash-solitaire');
  bQuery.appendTo(self.solitaireElement, [self.topElement, self.bottomElement]);
  self._addChildToParent(self.solitaireElement);
};

SplashTemplate.prototype._addChildToParent = function (elem) {
  var self = this;
  bQuery.appendTo(self.parentElement, elem);
};

SplashTemplate.prototype._reset = function () {
  var self = this;
  bQuery.removeChildrenFrom(self.parentElement);
};

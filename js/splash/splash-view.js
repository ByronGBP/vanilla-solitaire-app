function SplashView () {
  var self = this;
  self.containerElement = null;
  self.template = null;
  self.aceSpaceElement = null;
  self.pileSpaceElement = null;
  self.stackCardElement = null;
  self.flippedCardElement = null;
  self.buttonElement = null;

  self._init();
}

SplashView.prototype._init = function () {
  var self = this;
  self._build();
  self._declareElements();
};

SplashView.prototype._build = function () {
  var self = this;
  self.containerElement = bQuery.generateDiv('splash-element');
  self.template = new SplashTemplate(self.containerElement);
};

SplashView.prototype._declareElements = function () {
  var self = this;
  var leftContainer = bQuery.getChildrenFrom(self.template.topElement, 0);
  self.stackCardElement = bQuery.getChildrenFrom(leftContainer, 0);
  self.flippedCardElement = bQuery.getChildrenFrom(leftContainer, 1);
  self.aceSpaceElement = bQuery.getChildrenFrom(self.template.topElement, 1);
  self.pileSpaceElement = bQuery.getChildrenFrom(self.template.bottomElement, 0);
  self.buttonElement = self.template.buttonElement;
};

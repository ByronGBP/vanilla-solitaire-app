function Splash (mainElement) {
  var self = this;
  self.mainElement = mainElement;
  self._buttonCallback = null;

  self._handleClick = function () {
    self._buttonCallback();
  };

  self._init();
}

Splash.prototype._init = function () {
  var self = this;
  self._setupAnimation();
  self._setEventListeners();
};

Splash.prototype._setupAnimation = function () {
  var self = this;
  self.animation = new SplashView();
  bQuery.appendTo(self.mainElement, self.animation.containerElement);
};

Splash.prototype.onClick = function (callback) {
  var self = this;
  self._buttonCallback = callback;
};

Splash.prototype._setEventListeners = function () {
  var self = this;
  bQuery.addEventClickTo(self.animation.buttonElement, self._handleClick);
};

Splash.prototype._removeEventListeners = function () {
  var self = this;
  bQuery.removeEventClickTo(self.animation.buttonElement, self._handleClick);
};

Splash.prototype.destroy = function () {
  var self = this;
  self._removeEventListeners();
  bQuery.remove(self.animation.containerElement);
};

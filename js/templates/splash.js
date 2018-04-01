function Splash (parentElement) {
  Solitaire.call(this, parentElement);
}

Splash.prototype = Object.create(Solitaire.prototype);
Splash.prototype.constructor = Splash;


function byQuery () {

}

byQuery.prototype.generateButton = function (text, id, className) {
  var button = this._createButton();
  this._setTextTo(button, text);
  this._setIdTo(button, id);
  this._addClassTo(button, className);
  return button;
};

byQuery.prototype.generateText = function (elemType, text, className, id) {
  var elem = this._createNew(elemType);
  this._setTextTo(elem, text);
  this._addClassTo(elem, className);
  this._setIdTo(elem, id);
  return elem;
};

byQuery.prototype.generateDiv = function (id, className) {
  var div = this._createDiv();
  this._setIdTo(div, id);
  this._addClassTo(div, className);
  return div;
};

byQuery.prototype.appendTo = function (elem, childs) {
  childs = this._parseToArray(childs);

  for (var i = 0; i < childs.length; i++) {
    elem.appendChild(childs[i]);
  }
};

byQuery.prototype.removeChildrenFrom = function (elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

byQuery.prototype.remove = function (elem) {
  elem.remove();
};

byQuery.prototype.addEventClickTo = function (elems, callback) {
  elems = this._parseToArray(elems);
  for (var i = 0; i < elems.length; i++) {
    this._addEventTo(elems[i], 'click', callback);
  }
};

byQuery.prototype.removeEventClickTo = function (elems, callback) {
  elems = this._parseToArray(elems);
  for (var i = 0; i < elems.length; i++) {
    this._removeEventTo(elems[i], 'click', callback);
  }
};

byQuery.prototype.getChildrenFrom = function (elem, pos) {
  return elem.children[pos];
};

byQuery.prototype.getById = function (id) {
  return document.getElementById(id);
};

byQuery.prototype._createNew = function (elem) {
  return document.createElement(elem);
};

byQuery.prototype._createButton = function () {
  return this._createNew('button');
};

byQuery.prototype._createDiv = function () {
  return this._createNew('div');
};

byQuery.prototype._setTextTo = function (elem, text) {
  if (!text) {
    text = '';
  }
  elem.innerText = text;
};

byQuery.prototype._setIdTo = function (elem, id) {
  if (id) {
    this._setAttribute(elem, 'id', id);
  }
};

byQuery.prototype._addClassTo = function (elem, classNames) {
  if (classNames) {
    classNames = this._parseToArray(classNames);
    for (var i = 0; i < classNames.length; i++) {
      elem.classList.add(classNames[i]);
    }
  }
};

byQuery.prototype._setAttribute = function (elem, att, value) {
  elem.setAttribute(att, value);
};

byQuery.prototype._addEventTo = function (elem, event, callback) {
  elem.addEventListener(event, callback);
};

byQuery.prototype._removeEventTo = function (elem, event, callback) {
  elem.removeEventListener(event, callback);
};

byQuery.prototype._parseToArray = function (item) {
  return item.length && typeof item === 'object' ? item : [item];
};

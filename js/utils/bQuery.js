
function bQuery () {

}

bQuery.prototype.generateButton = function (text, id, className) {
  var button = this._createButton();
  this._setTextTo(button, text);
  this._setIdTo(button, id);
  this._addClassTo(button, className);
  return button;
};

bQuery.prototype.generateText = function (elemType, text, className, id) {
  var elem = this._createNew(elemType);
  this._setTextTo(elem, text);
  this._addClassTo(elem, className);
  this._setIdTo(elem, id);
  return elem;
};

bQuery.prototype.generateDiv = function (id, className) {
  var div = this._createDiv();
  this._setIdTo(div, id);
  this._addClassTo(div, className);
  return div;
};

bQuery.prototype.appendTo = function (elem, childs) {
  childs = this._parseToArray(childs);

  for (var i = 0; i < childs.length; i++) {
    elem.appendChild(childs[i]);
  }
};

bQuery.prototype.removeChildrenFrom = function (elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

bQuery.prototype.remove = function (elem) {
  elem.remove();
};

bQuery.prototype.addEventClickTo = function (elems, callback) {
  elems = this._parseToArray(elems);
  for (var i = 0; i < elems.length; i++) {
    this._addEventTo(elems[i], 'click', callback);
  }
};

bQuery.prototype.removeEventClickTo = function (elems, callback) {
  elems = this._parseToArray(elems);
  for (var i = 0; i < elems.length; i++) {
    this._removeEventTo(elems[i], 'click', callback);
  }
};

bQuery.prototype.getChildrenFrom = function (elem, pos) {
  return elem.children[pos];
};

bQuery.prototype.getById = function (id) {
  return document.getElementById(id);
};

bQuery.prototype.removeClass = function (elemId, className) {
  var element = this.getById(elemId);
  if (element) {
    element.classList.remove(className);
  }
};

bQuery.prototype.addClass = function (elemId, className) {
  var element = this.getById(elemId);
  if (element) {
    element.classList.add(className);
  }
};

bQuery.prototype._createNew = function (elem) {
  return document.createElement(elem);
};

bQuery.prototype._createButton = function () {
  return this._createNew('button');
};

bQuery.prototype._createDiv = function () {
  return this._createNew('div');
};

bQuery.prototype._setTextTo = function (elem, text) {
  if (!text) {
    text = '';
  }
  elem.innerText = text;
};

bQuery.prototype._setIdTo = function (elem, id) {
  if (id) {
    this._setAttribute(elem, 'id', id);
  }
};

bQuery.prototype._addClassTo = function (elem, classNames) {
  if (classNames) {
    classNames = this._parseToArray(classNames);
    for (var i = 0; i < classNames.length; i++) {
      elem.classList.add(classNames[i]);
    }
  }
};

bQuery.prototype._setAttribute = function (elem, att, value) {
  elem.setAttribute(att, value);
};

bQuery.prototype._addEventTo = function (elem, event, callback) {
  elem.addEventListener(event, callback);
};

bQuery.prototype._removeEventTo = function (elem, event, callback) {
  elem.removeEventListener(event, callback);
};

bQuery.prototype._parseToArray = function (item) {
  return item.length && typeof item === 'object' ? item : [item];
};


function byQuery () {

}

byQuery.prototype.createButtonWithIdAndText = function (id, text) {
    var button = this.createButton();
    this.setIdTo(button, id);
    this.setTextTo(button, text);
    return button;
}

byQuery.prototype.createButton = function () {
    return this.createNew('button');
}

byQuery.prototype.createDivWithClass = function (className) {
    var div = this.createDiv();
    this.addClassTo(div, className);
    return div;
}

byQuery.prototype.createDivWithId = function (id) {
    var div = this.createDiv();
    this.setIdTo(div, id);
    return div;
}

byQuery.prototype.createDiv = function () {
    return this.createNew('div');
}

byQuery.prototype.setIdTo = function (elem, id) {
    this.addAttribute(elem, 'id', id);
}

byQuery.prototype.addClassTo = function (elem, className) {
    elem.classList.add(className);
}

byQuery.prototype.createNew = function (elem) {
    return document.createElement(elem);
}

byQuery.prototype.setTextTo = function (elem, text) {
    elem.innerText = text;
}

byQuery.prototype.addAttribute = function (elem, att, value) {
    elem.setAttribute(att, value);
}

byQuery.prototype.getById = function (id) {
    return document.getElementById(id);
}

byQuery.prototype.addEventClickTo = function (elem, callback){
    this.addEventTo(elem, 'click', callback);
}

byQuery.prototype.addEventTo =  function (elem, event, callback) {
    elem.addEventListener(event, callback);
}

byQuery.prototype.removeEventClickTo = function (elem, callback){
    this.removeEventTo(elem, 'click', callback);
}

byQuery.prototype.removeEventTo =  function (elem, event, callback) {
    elem.removeEventListener(event, callback);
}

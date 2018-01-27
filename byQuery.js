
function byQuery () {

}

byQuery.prototype.createButton = function () {
    return this.createNew('button');
}

byQuery.prototype.createDiv = function () {
    return this.createNew('div');
}

byQuery.prototype.setIdTo = function (elem, id) {
    this.addAttribute(elem, 'id', id);
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

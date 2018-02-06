
var byQuery = new byQuery();

var CARDS = [
  {suit: 'spades', value: '2', color: 'black'},
  {suit: 'spades', value: '3', color: 'black'},
  {suit: 'spades', value: '4', color: 'black'},
  {suit: 'spades', value: '5', color: 'black'},
  {suit: 'spades', value: '6', color: 'black'},
  {suit: 'spades', value: '7', color: 'black'},
  {suit: 'spades', value: '8', color: 'black'},
  {suit: 'spades', value: '9', color: 'black'},
  {suit: 'spades', value: '10', color: 'black'},
  {suit: 'spades', value: 'J', color: 'black'},
  {suit: 'spades', value: 'Q', color: 'black'},
  {suit: 'spades', value: 'K', color: 'black'},
  {suit: 'spades', value: 'A', color: 'black'},

  {suit: 'clubs', value: '2', color: 'black'},
  {suit: 'clubs', value: '3', color: 'black'},
  {suit: 'clubs', value: '4', color: 'black'},
  {suit: 'clubs', value: '5', color: 'black'},
  {suit: 'clubs', value: '6', color: 'black'},
  {suit: 'clubs', value: '7', color: 'black'},
  {suit: 'clubs', value: '8', color: 'black'},
  {suit: 'clubs', value: '9', color: 'black'},
  {suit: 'clubs', value: '10', color: 'black'},
  {suit: 'clubs', value: 'J', color: 'black'},
  {suit: 'clubs', value: 'Q', color: 'black'},
  {suit: 'clubs', value: 'K', color: 'black'},
  {suit: 'clubs', value: 'A', color: 'black'},

  {suit: 'diamonds', value: '2', color: 'red'},
  {suit: 'diamonds', value: '3', color: 'red'},
  {suit: 'diamonds', value: '4', color: 'red'},
  {suit: 'diamonds', value: '5', color: 'red'},
  {suit: 'diamonds', value: '6', color: 'red'},
  {suit: 'diamonds', value: '7', color: 'red'},
  {suit: 'diamonds', value: '8', color: 'red'},
  {suit: 'diamonds', value: '9', color: 'red'},
  {suit: 'diamonds', value: '10', color: 'red'},
  {suit: 'diamonds', value: 'J', color: 'red'},
  {suit: 'diamonds', value: 'Q', color: 'red'},
  {suit: 'diamonds', value: 'K', color: 'red'},
  {suit: 'diamonds', value: 'A', color: 'red'},

  {suit: 'hearts', value: '2', color: 'red'},
  {suit: 'hearts', value: '3', color: 'red'},
  {suit: 'hearts', value: '4', color: 'red'},
  {suit: 'hearts', value: '5', color: 'red'},
  {suit: 'hearts', value: '6', color: 'red'},
  {suit: 'hearts', value: '7', color: 'red'},
  {suit: 'hearts', value: '8', color: 'red'},
  {suit: 'hearts', value: '9', color: 'red'},
  {suit: 'hearts', value: '10', color: 'red'},
  {suit: 'hearts', value: 'J', color: 'red'},
  {suit: 'hearts', value: 'Q', color: 'red'},
  {suit: 'hearts', value: 'K', color: 'red'},
  {suit: 'hearts', value: 'A', color: 'red'}

];

var TYPE = {
  flipped: 'flipped-cards',
  stack: 'stack-cards',
  ace: 'ace-space-',
  pile: 'pile-space-',
  card: 'card'
};

/* eslint-disable */

var bQuery = new bQuery();

var CARDS = [
  { suit: 'spades', value: 'A', color: 'black', point: 1 },
  {suit: 'spades', value: '2', color: 'black', point: 2},
  {suit: 'spades', value: '3', color: 'black', point: 3},
  {suit: 'spades', value: '4', color: 'black', point: 4},
  {suit: 'spades', value: '5', color: 'black', point: 5},
  {suit: 'spades', value: '6', color: 'black', point: 6},
  {suit: 'spades', value: '7', color: 'black', point: 7},
  {suit: 'spades', value: '8', color: 'black', point: 8},
  {suit: 'spades', value: '9', color: 'black', point: 9},
  {suit: 'spades', value: '10', color: 'black', point: 10},
  {suit: 'spades', value: 'J', color: 'black', point: 11},
  {suit: 'spades', value: 'Q', color: 'black', point: 12},
  {suit: 'spades', value: 'K', color: 'black', point: 13},

  { suit: 'clubs', value: 'A', color: 'black', point: 1 },
  {suit: 'clubs', value: '2', color: 'black', point: 2},
  {suit: 'clubs', value: '3', color: 'black', point: 3},
  {suit: 'clubs', value: '4', color: 'black', point: 4},
  {suit: 'clubs', value: '5', color: 'black', point: 5},
  {suit: 'clubs', value: '6', color: 'black', point: 6},
  {suit: 'clubs', value: '7', color: 'black', point: 7},
  {suit: 'clubs', value: '8', color: 'black', point: 8},
  {suit: 'clubs', value: '9', color: 'black', point: 9},
  {suit: 'clubs', value: '10', color: 'black', point: 10},
  {suit: 'clubs', value: 'J', color: 'black', point: 11},
  {suit: 'clubs', value: 'Q', color: 'black', point: 12},
  {suit: 'clubs', value: 'K', color: 'black', point: 13},

  { suit: 'diamonds', value: 'A', color: 'red', point: 1 },
  {suit: 'diamonds', value: '2', color: 'red', point: 2},
  {suit: 'diamonds', value: '3', color: 'red', point: 3},
  {suit: 'diamonds', value: '4', color: 'red', point: 4},
  {suit: 'diamonds', value: '5', color: 'red', point: 5},
  {suit: 'diamonds', value: '6', color: 'red', point: 6},
  {suit: 'diamonds', value: '7', color: 'red', point: 7},
  {suit: 'diamonds', value: '8', color: 'red', point: 8},
  {suit: 'diamonds', value: '9', color: 'red', point: 9},
  {suit: 'diamonds', value: '10', color: 'red', point: 10},
  {suit: 'diamonds', value: 'J', color: 'red', point: 11},
  {suit: 'diamonds', value: 'Q', color: 'red', point: 12},
  {suit: 'diamonds', value: 'K', color: 'red', point: 13},

  { suit: 'hearts', value: 'A', color: 'red', point: 1 },
  {suit: 'hearts', value: '2', color: 'red', point: 2},
  {suit: 'hearts', value: '3', color: 'red', point: 3},
  {suit: 'hearts', value: '4', color: 'red', point: 4},
  {suit: 'hearts', value: '5', color: 'red', point: 5},
  {suit: 'hearts', value: '6', color: 'red', point: 6},
  {suit: 'hearts', value: '7', color: 'red', point: 7},
  {suit: 'hearts', value: '8', color: 'red', point: 8},
  {suit: 'hearts', value: '9', color: 'red', point: 9},
  {suit: 'hearts', value: '10', color: 'red', point: 10},
  {suit: 'hearts', value: 'J', color: 'red', point: 11},
  {suit: 'hearts', value: 'Q', color: 'red', point: 12},
  {suit: 'hearts', value: 'K', color: 'red', point: 13}
];

var TYPE = {
  flipped: 'flipped-cards',
  stack: 'stack-cards',
  ace: 'ace-space-',
  pile: 'pile-space-',
  card: 'card'
};

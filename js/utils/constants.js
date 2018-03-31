/* eslint-disable */

var bQuery = new bQuery();

var CARDS = [
  { suit: '♠', value: 'A', color: 'black', point: 1 },
  {suit: '♠', value: '2', color: 'black', point: 2},
  {suit: '♠', value: '3', color: 'black', point: 3},
  {suit: '♠', value: '4', color: 'black', point: 4},
  {suit: '♠', value: '5', color: 'black', point: 5},
  {suit: '♠', value: '6', color: 'black', point: 6},
  {suit: '♠', value: '7', color: 'black', point: 7},
  {suit: '♠', value: '8', color: 'black', point: 8},
  {suit: '♠', value: '9', color: 'black', point: 9},
  {suit: '♠', value: '10', color: 'black', point: 10},
  {suit: '♠', value: 'J', color: 'black', point: 11},
  {suit: '♠', value: 'Q', color: 'black', point: 12},
  {suit: '♠', value: 'K', color: 'black', point: 13},

  { suit: '♣', value: 'A', color: 'black', point: 1 },
  {suit: '♣', value: '2', color: 'black', point: 2},
  {suit: '♣', value: '3', color: 'black', point: 3},
  {suit: '♣', value: '4', color: 'black', point: 4},
  {suit: '♣', value: '5', color: 'black', point: 5},
  {suit: '♣', value: '6', color: 'black', point: 6},
  {suit: '♣', value: '7', color: 'black', point: 7},
  {suit: '♣', value: '8', color: 'black', point: 8},
  {suit: '♣', value: '9', color: 'black', point: 9},
  {suit: '♣', value: '10', color: 'black', point: 10},
  {suit: '♣', value: 'J', color: 'black', point: 11},
  {suit: '♣', value: 'Q', color: 'black', point: 12},
  {suit: '♣', value: 'K', color: 'black', point: 13},

  { suit: '♦', value: 'A', color: 'red', point: 1 },
  {suit: '♦', value: '2', color: 'red', point: 2},
  {suit: '♦', value: '3', color: 'red', point: 3},
  {suit: '♦', value: '4', color: 'red', point: 4},
  {suit: '♦', value: '5', color: 'red', point: 5},
  {suit: '♦', value: '6', color: 'red', point: 6},
  {suit: '♦', value: '7', color: 'red', point: 7},
  {suit: '♦', value: '8', color: 'red', point: 8},
  {suit: '♦', value: '9', color: 'red', point: 9},
  {suit: '♦', value: '10', color: 'red', point: 10},
  {suit: '♦', value: 'J', color: 'red', point: 11},
  {suit: '♦', value: 'Q', color: 'red', point: 12},
  {suit: '♦', value: 'K', color: 'red', point: 13},

  { suit: '♥', value: 'A', color: 'red', point: 1 },
  {suit: '♥', value: '2', color: 'red', point: 2},
  {suit: '♥', value: '3', color: 'red', point: 3},
  {suit: '♥', value: '4', color: 'red', point: 4},
  {suit: '♥', value: '5', color: 'red', point: 5},
  {suit: '♥', value: '6', color: 'red', point: 6},
  {suit: '♥', value: '7', color: 'red', point: 7},
  {suit: '♥', value: '8', color: 'red', point: 8},
  {suit: '♥', value: '9', color: 'red', point: 9},
  {suit: '♥', value: '10', color: 'red', point: 10},
  {suit: '♥', value: 'J', color: 'red', point: 11},
  {suit: '♥', value: 'Q', color: 'red', point: 12},
  {suit: '♥', value: 'K', color: 'red', point: 13}
];

var TYPE = {
  flipped: 'flipped-cards',
  stack: 'stack-cards',
  ace: 'ace-space-',
  pile: 'pile-space-',
  card: 'card',
  shadowSuit: 'shadow-suit-'
};

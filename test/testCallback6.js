const callback1 = require('../callback1');
const callback2 = require('../callback2');
const callback3 = require('../callback3');
const callback6 = require('../callback6');
const boards = require('../jsonfiles/boards.json');
const lists = require('../jsonfiles/lists.json');
const cards = require('../jsonfiles/cards.json');

callback6(callback1, callback2, callback3, boards, lists, cards);
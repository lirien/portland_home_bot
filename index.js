const tracery = require('tracery-grammar');
const json = require('./grammar.json');

let grammar = tracery.createGrammar(json);

grammar.addModifiers(tracery.baseEngModifiers);

console.log(grammar.flatten('#origin#'));

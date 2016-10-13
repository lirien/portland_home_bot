const tracery = require('tracery-grammar');
const { readFileSync } = require('fs');

let json = JSON.parse(readFileSync('./grammar.json'));
let grammar = tracery.createGrammar(json);

grammar.addModifiers(tracery.baseEngModifiers);

console.log(grammar.flatten('#origin#'));

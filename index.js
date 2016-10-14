const Tracery = require('tracery-grammar');
const Twitter = require('twitter');
const config = require('./config.json')
const json = require('./grammar.json');

let grammar = Tracery.createGrammar(json);
grammar.addModifiers(Tracery.baseEngModifiers);

let client = new Twitter(config);
let status = grammar.flatten('#origin#');
client.post('statuses/update', { status }, (error, tweet, response) => {
  if(error) throw error;
  console.log(tweet);
  console.log(response);
});

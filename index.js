const Tracery = require('tracery-grammar');
const Twitter = require('twitter');
const fs = require('fs')
const config = require('./config.json')
const json = require('./grammar.json');

let grammar = Tracery.createGrammar(json);
grammar.addModifiers(Tracery.baseEngModifiers);

let client = new Twitter(config);
let images = fs.readdirSync('./images');
let path = './images/'.concat(images[Math.floor(Math.random() * images.length)])
let image = fs.readFileSync(path);

client.post('media/upload', {media: image}, function(error, media, response) {
  if (!error) {
    console.log(media);
    let status = {
      status: grammar.flatten('#origin#'),
      media_ids: media.media_id_string
    }

    client.post('statuses/update', status, function(error, tweet, response) {
      if (!error) {
        console.log(tweet);
      }
    });
  }
});

const express = require('express');

const Characters = require('../characters/charactersModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running!' })
});

server.get('/characters', (req, res) => {
  Characters.find()
    .then(character => {
      res.status(200).json(character);
    })
    .catch(error => {
      res.status(500).json(error);
    })    
})

server.post('/characters', (req, res) => {
  Characters.insert(req.body)
    .then(character => {
      res.status(201).json(character);
    })
    .catch(error => {
      res.status(500).json(error);
    })
})

server.delete('/characters/:id', (req, res) => {
  Characters.remove(req.params.id)
    .then(count => {
      if(count>0){
        const unit = count > 1 ? 'records' : 'record';
        res.status(200).json({ message: `${count} ${unit} deleted` })
      } else {
        res.status(404).json({ message: 'Character not found' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})



module.exports = server;
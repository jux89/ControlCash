const express = require('express');

const mongoose = require('mongoose');

const requireDir = require('require-dir');

const cors = require('cors');

const app = express();

app.use(express.static(__dirname + '/'))
.listen(process.env.PORT || 5000);

app.use(express.json());

app.use(cors());
// Após porta do servidor do mongoose, informa o nome do banco de dados
mongoose.connect('mongodb://juliana:teste123@ds343127.mlab.com:43127/controlcash', {useNewUrlParser: true}); 

requireDir('./src/models');

app.use('/ControlCash', require('./src/routes/index'));


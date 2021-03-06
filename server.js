require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'))

//conexão com o banco de dados
mongoose.connect(process.env.MONGO_CON, { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models');

console.log('mongoose connected');

//rotas
app.use('/api', require("./src/routes"));

app.listen(process.env.PORT || 3001);
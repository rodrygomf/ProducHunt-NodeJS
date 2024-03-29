const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect("mongodb://localhost:27018/nodeapi", {
  useNewUrlParser: true
});

requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);

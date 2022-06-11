
var invidiousApi = require('./invidiousApiConnector.js');

const express = require("express");
const path = require("path");

const port = process.env.PORT || "8080";
const app = express();

invidiousApi.getPlaylist();

app.get('/', function(req, res) {
  app.use(express.static(__dirname + '/public'));
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.listen(port);

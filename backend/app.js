
var invidiousApi = require('./invidiousApiConnector.js');

const express = require("express");
const path = require("path");

const player = require("plyr");
const port = process.env.PORT || "8080";
const app = express();
var playlistId = "PLWm-WkLx_aUXlvoxHtPKDkPV4m48qXvBR";
var videoData = invidiousApi.getPlaylist(playlistId);








app.get('/', function(req, res) {
  app.use(express.static(__dirname + '/public'));
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.listen(port);

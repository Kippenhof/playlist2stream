
// Used for Communication with Youtube-API & Random Picking of a Video
const axios = require("axios");


function getPlaylist(){
    
    var instance = "invidious.lunar.icu";
    var playlistId = "PLWm-WkLx_aUXlvoxHtPKDkPV4m48qXvBR";
    var rqurl = "https://" + instance + "/api/v1/playlists/" + playlistId + "?fields=videoCount,viewCount,title,author,videos(title,videoId,author,videoThumbnails(url))" ;
    axios({
        method: 'GET',
        url: rqurl,
        responseType: 'JSON'

    })
    .then(function (response) {
        return response.data;
     })

    }

module.exports = {
      getPlaylist: function() {
          getPlaylist()
      }
}
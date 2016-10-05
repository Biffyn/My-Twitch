$(document).ready(function() {

  var streamer = [ // array of streamer
      "ESL_SC2",
      "OgamingSC2",
      "cretetion",
      "freecodecamp",
      "storbeck",
      "habathcx",
      "RobotCaleb",
      "noobs2ninjas"
    ],
    stream_url = 'https://api.twitch.tv/kraken/streams/',
    channel_url = 'https://api.twitch.tv/kraken/channel/',
    clientID = '?client_id=n9ilovhcd0k79pt99zkmffzp0au9gw1&callback=?';

  // make an ajax call to the twitch api for each of the streamers in the array
  streamer.forEach(function(val) {
    $.ajax({
      type: 'GET',
      url: stream_url + val,
      headers: {
        'Client-ID': 'n9ilovhcd0k79pt99zkmffzp0au9gw1'
      },
      success: function(res) {
          console.log(res);
          if (res.stream != null) {
            $('#online').show();
            $('#online').append(`<div class="col-xs-12 col-md-4">
                                <div id="card" class="ui centered card">
                                    <a class="image" href="` + res.stream.channel.url + `" target="_blank" rel="noopener noreferrer">
                                        <img src="` + res.stream.preview.large + `">
                                    </a>
                                    <div class="content">
                                        <a class="header" href="` + res.stream.channel.url + ` " target="_blank" rel="noopener noreferrer">` + res.stream.channel.display_name + `</a>
                                        <div class="description"> ` + res.stream.channel.status.substring(0, 40) + ` ... </div>
                                    </div>
                                    <div class="extra content">
                                        <span class="right floated">
                                            Online
                                        </span>
                                        <span>
                                        <i class="user icon"></i>
                                            ` + res.stream.viewers + ` Viewers
                                      </span>
                                    </div>
                                </div>`);
          } else if (res.stream === null) {
            $('#offline').show();

          } else if (error) {

          }
        } // end response
    }); //end ajax call
  }); // end forEach
}); //end doc.ready

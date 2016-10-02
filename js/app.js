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
        stram_url = "https://api.twitch.tv/kraken/streams/",
        user_url = "https://api.twitch.tv/kraken/users/";


    // make an ajax call to the twitch api for each of the streamers in the array
    streamer.forEach(function(val) {
        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/streams/' + val,
            headers: {
                'Client-ID': 'n9ilovhcd0k79pt99zkmffzp0au9gw1'
            },
            success: function(res) {
                    console.log(res);
                } // end response
        }); //end ajax call
    }); // end forEach
}); //end doc.ready

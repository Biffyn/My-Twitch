$(document).ready(function() {
    
    var userNames = [       // array of streamer
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


    // make an ajax call to the twitch api
    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/channels/twitch',
        headers: {
            'Client-ID': 'axjhfp777tflhy0yjb5sftsil'
        },
        success: function(data) {
            console.log(data);
        }
    }); //end ajax call
}); //end doc.ready

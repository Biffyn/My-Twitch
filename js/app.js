$(document).ready(function () {
    var streamer = [
            'ESL_SC2',
            'OgamingSC2',
            'nonplayercat',
            'cretetion',
            'freecodecamp',
            'riotgames',
            'luxxbunny',
            'strictoaster',
            'master_hellish',
            'tidmouthmilk12',
            'narcosvszombies',
            'bobross',
            'esl_csgo',
            'Nightblue3',
            'PhantomL0rd',
            'tahliaplays',
            'noobs2ninjas'
        ], stream_url = 'https://api.twitch.tv/kraken/streams/', user_url = 'https://api.twitch.tv/kraken/users/', clientID = '?client_id=n9ilovhcd0k79pt99zkmffzp0au9gw1&callback=?';
    streamer.forEach(function (val) {
        $.getJSON(stream_url + val + clientID, function (res) {
            if (res.stream != null) {
                var random = res.stream;
                console.log(random);
                $('#online').show();
                $('#online').append('<div class="col-xs-12 col-md-4">\n<div id="card" class="ui centered card">\n<a class="image" href="' + res.stream.channel.url + '" target="_blank" rel="noopener noreferrer">\n<img src="' + res.stream.preview.large + '">\n</a>\n<div class="content">\n<a class="header" href="' + res.stream.channel.url + ' " target="_blank" rel="noopener noreferrer">' + res.stream.channel.display_name + '</a>\n<div class="meta">' + res.stream.channel.game + '</div>\n<div class="description"> ' + res.stream.channel.status.substring(0, 35) + ' ... </div>\n</div>\n<div class="extra content">\n<span class="right floated">\n<i id="blink" class="circle green icon"></i>\nOnline\n</span>\n<span>\n<i class="user icon"></i>\n' + res.stream.viewers + ' Viewers\n</span>\n</div>\n</div>');
            } else if (res.stream === null) {
                $.getJSON(res._links.channel + clientID, function (data) {
                    $('#offline').show();
                    $('#offline').append('<div class="col-xs-12 col-md-4">\n<div id="card" class="ui centered card">\n<a class="image" href="' + data.url + '" target="_blank" rel="noopener noreferrer">\n<img id="bannerIMG" src="' + data.video_banner + '">\n</a>\n<div class="content">\n<a class="header" href="' + data.url + ' " target="_blank" rel="noopener noreferrer">' + data.display_name + '</a>\n<div id="bio" class="description"> Aww snap ... I\'m currently offline </div>\n</div>\n<div class="extra content">\n<span class="right floated">\n<i class="circle red icon"></i> \nOffline\n</span>\n<span>\n<i class="user icon"></i>\n' + data.followers + ' Followers\n</span>\n</div>\n</div>');
                });
            } else if (res.status === 422) {
                $('#deleted').show();
                $('#deleted').append('<h1 class="text-center dark">Deleted or Missing</h1>\n<div class="col-xs-12 col-md-4">\n<div id="card" class="ui centered card">\n<a class="image" href="href="https://giphy.com/gifs/gngO1gmBhS9na" target="_blank" rel="noopener noreferrer">\n<img src="http://i.giphy.com/gngO1gmBhS9na.gif">\n</a>\n<div class="content">\n<div class="description"> ' + res.message + ' </div>\n</div>\n<div class="extra content">\n<span class="right floated">\n<i class="circle red icon"></i> \nLost in space and time\n</span>\n<div>\n</div>');
            }
        });
    });
});

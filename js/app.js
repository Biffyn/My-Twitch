$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/channels/twitch',
        headers: {
            'Client-ID': 'axjhfp777tflhy0yjb5sftsil'
        },
        success: function(data) {
            console.log(data);
        }
    });
}); //end doc.ready

$(document).ready(function() {
  var searchQuery = $("#search").val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchQuery + "&callback=?";

  function search() {
    $("#search").click(function() {
      searchQuery = encodeURIComponent($("#input").val());
      // make ajax call to api
      $.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: "jsonp",
        data: {
          "action": "opensearch",
          "format": "json",
          "limit": 10,
          "search": searchQuery
        },
        success: function(res) {
          res[1].reverse();
          res[2].reverse();
          res[3].reverse();
          $("#img").hide(); // hide the img
          $("#output").empty(); // clear the output
          // loop through response and prepend to frontend
          for (var i = 0; i < res[1].length; i++) {
            $("#output").prepend(`<div class="ui one column grid">
                                                <div class="column">
                                                    <div id="card" class="ui fluid centered card">
                                                        <div class="content">
                                                            <div id="title" class="header">` + res[1][i] + `</div>
                                                            <div id="extract" class="description"><p>` + res[2][i] + `</p></div>
                                                        </div>
                                                        <div class="extra content">
                                                            <a id="link" class="ui inverted pink button" href="` + res[3][i] + `" target="_blank" rel="noopener noreferrer">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`);
          }
        },
        error: function(err) {
          console.log(err);
        }
      });

    }); // end search.on()click

    //Trigger search click event when enter is pressed
    $('#input').keypress(function(e) {
      if (e.which == 13) {
        $('#search').click();
      }
    });
  } // end search()
  search();
}); //end doc.ready

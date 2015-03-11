var soundSearch = {
 // url: "http://api.rottentomatoes.com/api/public/v1.0/",
    url: "http://api.soundcloud.com",
     id : '5dd5de61d81b6180fad7d95a8e31df10',
    first: function () {
      soundSearch.start();
    },

    start: function() {
      $("#trackSearch").click(function(){
        var trackName = $("#trackVal").val();
        console.log(trackName);
        soundSearch.search(trackName);   
      });
    },

    search: function(trackName) {
      
      $.getJSON(this.url+"/tracks.json?q="+trackName+"?&amp;client_id="+this.id, {limit: 30}, function (response) {
        console.log(response);
        
      
        var view = '<span>';
        $.each(response, function (index, track) {
           view += '<div class="col-md-4">';
          var play = track.stream_url+ "?client_id=" + soundSearch.id;
          if (typeof(track.artwork_url) != 'string') {
            view += "<img class='img-thumbnail'  src='img/not_found.jpg'>";
          }
          else {
            view += "<img class='img-thumbnail img-responsive' src="+track.artwork_url+">";
          }
          view += "<h6>"+"Title : "+track.title.substr(0, 26).toLowerCase() + "...</h6>" +
          "<h5>"+"Genre : " +track.genre+"</h5>" +
          "<audio controls><source src="+play+" type=audio/mpeg></audio></div></span>";
        })
        $(".result").html(view);
      });

    }

};
 $(document).ready(function() {
   soundSearch.first();
 });
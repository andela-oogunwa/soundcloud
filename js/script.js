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
        
      
        var view = '<h2>' + 'MATCHES:' + '</h2>';
        $.each(response, function (index, track) {
          var play = track.stream_url+ "?client_id=" + soundSearch.id;
          if (typeof(track.artwork_url) != 'string') {
            view += "<img src="+'img/not_found.jpg'+">";
          }
          else {
            view += "<img class='img-thumbnail img-responsive' style='width:250px;height:150px' src="+track.artwork_url+">";
          }
          view += "<h6>"+"Title : "+track.title +"</h6>";
          view +="<h5>"+"Genre : " +track.genre+"<h5>";
          view +="<audio controls><source src="+play+" type=audio/mpeg></audio>";
        })
        //u should be adding(appending) this next line to your div that has class "row", and remove the elements inside that row
        // "<div class='col-md-4'><div class=result><img class='img-thumbnail img-responsive' style='width:250px;height:150px' src="+track.artwork_url+"><br><h6>"+track.title+"</h6><br><h5>"+track.genre+"</h5><br><audio controls><br><source src="+play+" type=audio/mpeg></audio></div></div"
        $(".result").html(view);
      });

    }

};
 $(document).ready(function() {
   soundSearch.first();
 });
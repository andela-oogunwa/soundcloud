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
          view += "<h6>"+"Title : "+track.title +"</h6>";
          if (typeof(track.artwork_url) != 'string') {
            view += "<img src="+'img/not_found.jpg'+">";
          }
          else {
            view += "<img src="+track.artwork_url+">";
          }
          view += '<a href="'+track.permalink_url+'" target="_blank">'+ "Play" + '</a>';
          view +="<h5>"+"Genre : " +track.genre+"<h5>";
        })
        $(".result").html(view);
      });
    }

};
 $(document).ready(function() {
   soundSearch.first();
 });
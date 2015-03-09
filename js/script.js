var soundSearch = {
 // url: "http://api.rottentomatoes.com/api/public/v1.0/",
    url: "http://api.soundcloud.com",
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
      var id = '5dd5de61d81b6180fad7d95a8e31df10';
      $.getJSON(this.url+"/tracks.json?q="+trackName+"?&amp;client_id="+id, {limit: 10}, function (response) {
        console.log(response);
      
        var view = '<h1>' + 'MATCHES:' + '</h1>';
        $.each(response, function (index, track) {
          view += "<h3>"+ track.title +"</h3>";
          if (typeof(track.artwork_url) != 'string') {
            view += "<img src="+'img/not_found.jpg'+">";
          }
          else {
            view += "<img src="+track.artwork_url+">";
          }
          view += '<a href="'+track.permalink_url+'" target="_blank">'+ "Open" + '</a>'
        })
        $(".result").html(view);
      });
    }

};
 $(document).ready(function() {
   soundSearch.first();
 });
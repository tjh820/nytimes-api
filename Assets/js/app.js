$("#submit-search").on("click", function () {
    var movie = $("#movie-search").val().trim();

    $.get( "http://www.omdbapi.com/?t="+movie+"&apikey=29c21804", function( data ) {
       
       console.log(data)
      });
})

$('.dropdown-trigger').dropdown();


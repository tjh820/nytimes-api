var data;
//randomMovie(35) this is a test call

function randomMovie(genre){
    
    genre.toString()
    page = Math.floor(Math.random()*5)+1
    console.log("page:"+ page)
    var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=5d8a72f0ec806bdf05499ec28669388f&language=en-US&vote_average.gte=6.5&with_genres="+genre+"&page="+page

    $.ajax({
        url: queryURL,
        method: "GET",
        async: "false"
    }).then(function(response){
        console.log(response)
        // return response
        var num = Math.floor(Math.random()*20)
        data = response.results[num].title
        console.log(num)
        console.log(data)
        utellyAPI(data) //where to call streaming service handler
    })
    // console.log("outside promise:"+data)

}

function writeInfo(data){
    document.write(data)
}
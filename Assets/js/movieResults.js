movieResults(localStorage.getItem("movieToWatch"));

function movieResults(input){
    console.log(input);
  var movie = input;
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=cde1759c";
 
  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
 
    // Creating a div to hold the movie
    var movieDiv = $("<div class=‘movie’>");
    var imgDiv = $("<div class='img'>");
    
    // Storing the rating data
    var imdbRating = response.imdbRating;

    // var imdbImg = <img src="assets/images/imdb-logo.png"></img>;
 
    var title = response.Title;
    var year = response.Year;

 
    var hOne = $("<h4 style='text-align:left;float:left;'>").text(title+" ");
    var hOne2 = $("<h7 style='text-align:left;float:left;'>").text("("+year+")");
 
    movieDiv.append(hOne);
    movieDiv.append(hOne2);

 
    // // Storing the release year
    // var released = response.Released;
 
    // // Creating an element to hold the release year
    // var pTwo = $("<h6>").text("Released: " + released);
 
    // // Displaying the release year
    // movieDiv.append(pTwo);
 
    // Storing the cast
    var cast = response.Actors;
 
    // Creating an element to hold the plot
    var pThree = $("<h6>").text(cast);
 
    // Appending the plot
    movieDiv.append(pThree);    
    
    // Storing the plot
    var plot = response.Plot;
 
    // Creating an element to hold the plot
    var pFour = $("<h6>").text(plot);

 
    // Retrieving the URL for the image
    var imgURL = response.Poster;
 

    // Creating an element to hold the image
    var image = $("<img>").attr("src", imgURL);
 
    // Appending the image
    imgDiv.append(image);

    // Creating an element to have the rating displayed
    var pOne = $("<h6>").text(imdbRating);

     // Displaying the rating
     imgDiv.append(pOne);


    // Creating an element to have the genres displayed
    var pFive = $("<h6>").text(response.Genre);

    // Displaying the genres
    imgDiv.append(pFive);

    // Creating an element to have the runtime displayed
    var pSix = $("<h6>").text(response.Runtime);

    // Displaying the runtime
    imgDiv.append(pSix);

    // Creating an element to have the runtime displayed
    var pSeven = $("<h6>").text(response.Rated);

    // Displaying the runtime
    imgDiv.append(pSeven);

    // Putting the entire movie above the previous movies
    $("#movies-view").prepend(movieDiv);
    $("#poster").append(imgDiv);
    $("#imdbrating").append(pOne);
    $("#genre").append(pFive);
    $("#runtime").append(pSix);
    $("#rating").append(pSeven);
    $("#cast").append(pThree);
    $("#synopsis").append(pFour);

    services = JSON.parse(localStorage.getItem("validSer"));
    movieObj = JSON.parse(localStorage.getItem("movieObj"));
    console.log(movieObj)
    // services = ["Netflix","Amazon Prime", "iTunes"]
    var netflixImg = $("<img class='imageSize'>").attr("src", "Assets/images/netflix.png");
    var amazonImg = $("<img class='imageSize'>").attr("src", "Assets/images/amazon.png");
    var itunesImg = $("<img class='imageSize'>").attr("src", "Assets/images/itunes.png");

    console.log(services);
    let arr = movieObj.results[0].locations
    console.log(arr)
    
    for (i=0; i<services.length; i++) {
      
      if (services[i] == "Netflix")
      { 
        let link
        for(j=0;j<arr.length;j++){
          if(arr[i].display_name == services[i]){
            link = arr[i].url
          }
        }
        
        let linkTag = $("<a>").attr("href",link)
        $(linkTag).append(netflixImg)
        $("#service").append(linkTag);
  
      }
      else if (services[i]== "Amazon Prime")
      {
        let link
        for(j=0;j<arr.length;j++){
          if(arr[i].display_name == services[i]){
            link = arr[i].url
          }
        }
        
        let linkTag = $("<a>").attr("href",link)
        $(linkTag).append(amazonImg)
        $("#service").append(linkTag);
  
      }
      else if (services[i]== "iTunes")
      {
        let link
        for(j=0;j<arr.length;j++){
          if(arr[i].display_name == services[i]){
            link = arr[i].url
          }
        }
        
        let linkTag = $("<a>").attr("href",link)
        $(linkTag).append(itunesImg)
        $("#service").append(linkTag);
  
      }else{}

    
   
    }




  });
 
  }

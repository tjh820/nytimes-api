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
 
    var hOne = $("<h3>").text(title);
 
 
    movieDiv.append(hOne);
 
 
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





  });
 
  }
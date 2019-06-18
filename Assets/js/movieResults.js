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
 
    // Storing the rating data
    var rating = response.imdbRating;
 
    var title = response.Title;
 
    var hOne = $("<h1>").text(title);
 
    // Creating an element to have the rating displayed
    var pOne = $("<p>").text("IMDB Rating: " + rating);
 
    movieDiv.append(hOne);
 
    // Displaying the rating
    movieDiv.append(pOne);
 
    // Storing the release year
    var released = response.Released;
 
    // Creating an element to hold the release year
    var pTwo = $("<p>").text("Released: " + released);
 
    // Displaying the release year
    movieDiv.append(pTwo);
 
    // Storing the plot
    var plot = response.Plot;
 
    // Creating an element to hold the plot
    var pThree = $("<p>").text("Plot: " + plot);
 
    // Appending the plot
    movieDiv.append(pThree);
 
    // Retrieving the URL for the image
    var imgURL = response.Poster;
 
    // Creating an element to hold the image
    var image = $("<img>").attr("src", imgURL);
 
    // Appending the image
    movieDiv.append(image);
 
    // Putting the entire movie above the previous movies
    $("#movies-view").prepend(movieDiv);
  });
 
  }
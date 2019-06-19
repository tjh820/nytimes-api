<<<<<<< HEAD
var genre
var successCallback = function (data, emotion) {
 
  console.log(data);
  if(emotion){
    greatestEmotion = emotion
  }
  
  else{
    var results = data.people[0].emotions
     var greatestEmotion = "anger"
  var greatestEmotionNum = results.anger
  for (keys in results) {
    if (results[keys] > greatestEmotionNum) {
      greatestEmotionNum = results[keys]
      greatestEmotion = keys

    }

  }
  console.log(greatestEmotion, greatestEmotionNum)
  }
 
 
  
  switch (greatestEmotion) {
    case "anger":
      genre = 12,37;
      break;
    case "happiness":
      genre = 28,16;
      break;
    case "disgust":
      genre = 80,35,99,14;
      break;
    case "fear":
      genre = 878,12;
      break;
    case "sadness":
      genre = 10749,36;
    break;
    case "surprise":
      genre = 10752,9648;
=======

var successCallback = function (greatestEmotion) {
  
  console.log("Emotion is =",greatestEmotion);
 //Once we have the emotion, find the correct genre..
  var genre;
  switch (greatestEmotion) {
    case "anger":
      genre = '12,37'
      break;
    case "happiness":
      genre = '28,16'
      break;
    case "disgust":
      genre = '80,35,99,14'
      break;
    case "fear":
      genre = '878,12'
      break;
    case "sadness":
    genre = '10749,36'
    break;
    case "surprise":
    genre = '10752,9648'
>>>>>>> 6703e42de0407dbdbc514d7958eb538c47126a3a
    break;
  }
<<<<<<< HEAD
  console.log(greatestEmotion, genre)


  randomMovie(35)
  localStorage.setItem("genreNum", genre);
=======
  console.log("Genre after the switch", genre);
 //Then find a movie
  randomMovie(genre);
>>>>>>> 6703e42de0407dbdbc514d7958eb538c47126a3a
};

var failCallback = function (jqXHR, textStatus, errorThrown) {
  alert("There has been an error!");
};

$("#faceOnly").on("click", function (e) {
  console.log("button clicked");
    e.preventDefault();
    var formdata = new FormData(document.getElementById("myform"));
    
    $.ajax({
      url: 'https://cors.io?https://api-face.sightcorp.com/api/detect/',
      type: "POST",
      data: formdata,
      // success: successCallback,
      error: failCallback,
      processData: false,
      contentType: false,
      ethnicity: false

    }).then(function (data) {
      //Go into the data and get the emotion
      data = JSON.parse(data);
      console.log(data);
      console.log(data.people);
      var results = data.people[0].emotions
      var greatestEmotion = "anger"
      var greatestEmotionNum = results.anger
      //loop over the objects to get the greatest emotion
      for (keys in results) {
        if (results[keys] > greatestEmotionNum) {
          greatestEmotionNum = results[keys]
          greatestEmotion = keys
  
        }
        //Go to the results page
       
      }
      //Make sure we have either
      console.log("greatest emotion= ",greatestEmotion,"Number is = ", greatestEmotionNum);
      // call the function and pass it the emotion
      successCallback(greatestEmotion)
    });
  });

 

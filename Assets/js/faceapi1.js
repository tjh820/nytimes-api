var storedGenre
var successCallback = function (greatestEmotion) {
  
  console.log("Emotion is =",greatestEmotion);
 //Once we have the emotion, find the correct genre..
  var genre;
  switch (greatestEmotion) {
    case "anger":
      genre = ['12']
      break;
    case "happiness":
      genre = ['28']
      break;
    case "disgust":
      genre = ['80']
      break;
    case "fear":
      genre = ['878']
      break;
    case "sadness":
    genre = ['10749']
    break;
    case "surprise":
    genre = ['10752']
    break;
  }
  chosenGenre = genre[Math.floor(Math.random()*genre.length)]
  console.log("Genre after the switch", chosenGenre);
 //Then find a movie
  storedGenre = chosenGenre
  randomMovie(chosenGenre);
};

function choiceCallback(greatestEmotion) {
  
  console.log("Emotion is =",greatestEmotion);
  let emo = greatestEmotion
 //Once we have the emotion, find the correct genre..
  var genre;
  switch (emo) {
    case "anger":
      genre = ['12']
      break;
    case "happiness":
      genre = ['28']
      break;
    case "disgust":
      genre = ['80']
      break;
    case "fear":
      genre = ['878']
      break;
    case "sadness":
    genre = ['10749']
    break;
    case "surprise":
    genre = ['10752']
    break;
  }
  chosenGenre = genre[Math.floor(Math.random()*genre.length)]
  console.log("Genre after the switch", chosenGenre);
 //Then find a movie
  storedGenre = chosenGenre
  randomMovie(chosenGenre);
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

 

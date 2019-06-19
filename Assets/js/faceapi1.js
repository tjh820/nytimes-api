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
    break;


  }
  console.log(greatestEmotion, genre)


  randomMovie(35)
  localStorage.setItem("genreNum", genre);
};

var failCallback = function (jqXHR, textStatus, errorThrown) {
  alert("There has been an error!");
};

$("#myform").submit(
  function (e) {
    e.preventDefault();
    var formdata = new FormData(document.getElementById("myform"));
    $.ajax({
      url: $(this).attr('action'),
      type: "POST",
      data: formdata,
      success: successCallback,
      error: failCallback,
      processData: false,
      contentType: false,
      ethnicity: false

    });
  });

 

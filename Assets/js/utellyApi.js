function utellyAPI(input) {
    obj = JSON.parse(localStorage.getItem("userSer"))
    console.log(obj)

    var userSerArr = []
    var cpuSerArr = []
    var validSerArr = []

    if(obj.amazon== true){
      userSerArr.push("Amazon Prime")
    }
    if(obj.itunes== true){
      userSerArr.push("iTunes")
    }
    if(obj.netflix== true){
      userSerArr.push("Netflix")
    }

    console.log(userSerArr)
    

    var title = input;
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="+title+"&country=us",
    "method": "GET",
    "headers": {
    "X-RapidAPI-Key": "e349b454d6msh2af77a7636ddc0cp1f2574jsnb88c6b6a2190",
    "Accept": "*/*",
    "Cache-Control": "no-cache",
    "Postman-Token": "51f0ded3-4f98-4a87-bbf6-819afca124a8,47437821-8a08-4745-9296-a36c0f1bccb0",
    "cache-control": "no-cache"
    }
  }

$.ajax(settings).done(function (response) {
  console.log(response);
  if (response.results[0] == undefined){
    randomMovie(storedGenre)
    }
  cpuSerArr = response.results[0].locations
  
  console.log(cpuSerArr)
  
  for(i=0;i<cpuSerArr.length;i++){
    
    for(j=0;j<userSerArr.length;j++){
      if(cpuSerArr[i].display_name == userSerArr[j]){
        validSerArr.push(cpuSerArr[i].display_name)
        console.log(validSerArr)
      }
    }
  }

  if(validSerArr.length == 0){
    console.log("recall")
    recall()
  }

  localStorage.setItem("validSer",JSON.stringify(validSerArr))
});

}


function recall(){
  console.log(storedGenre)
  randomMovie(storedGenre)
}

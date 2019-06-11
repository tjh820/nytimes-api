

$(document).ready(function(){
    var query = "ducks"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+query+"&api-key=sSnQzhFdiinAvUprWIAuZIYfZQ3g2r6L"

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        var arr = response.response.docs
        for(i=0;i<arr.length;i++){
            let image = $("<p>")
            let imgurl = response.response.docs[i].abstract
            $(image).text(imgurl)
            $(".results").append(image)
        }

    })

})
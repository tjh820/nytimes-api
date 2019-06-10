

$(document).ready(function(){

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=sSnQzhFdiinAvUprWIAuZIYfZQ3g2r6L"

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
    })

})
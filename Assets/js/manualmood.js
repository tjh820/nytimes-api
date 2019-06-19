$("#selectorSub").on("click", function(){
    let e = $("#selector :selected")
    console.log(e)
    let emoStr = e[0].value
    console.log(emoStr)

    choiceCallback(emoStr)

})
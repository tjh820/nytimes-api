function selectorSub(){
    let e = $("#selector :selected")
    console.log(e)
    let emoStr = e[0].value
    console.log(emoStr)

    choiceCallback(emoStr)

}
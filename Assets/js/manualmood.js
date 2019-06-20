function selectorSub(){
    let e = $("#selector :selected")
    let userSer = JSON.parse(localStorage.getItem("userSer"))
    console.log(e)
    if(e[0].value == ""){
        //modul goes here
        console.log("oops")

    }
    else if(userSer.amazon == false && userSer.netflix == false && userSer.itunes == false){
        console.log("oops")
    }
    else{

    let emoStr = e[0].value
    
    console.log(emoStr)
    choiceCallback(emoStr)
    }
}
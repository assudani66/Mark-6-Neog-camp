// minion server URL

var ServerURL = "https://api.funtranslations.com/translate/minion.json?text=Hello%2C%20I%20am%20hungry%21"

//queryselecting terms

var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-translate");
var txtoutput = document.querySelector("#txt-translated")

//creating translation link
function getTranslationURL(usertext){
    return ServerURL + "?" + "text=" + usertext;
}

function errorhandler(){
    alert("App has been used for more than 5 times Please come after a hour")
    console.error(error)
}

btntranslate.addEventListener("click" , function clickresposer(){
    var text = txtinput.value ;
    
    fetch(getTranslationURL(text))   
    .then(response => response.json())
    .then(json => {txtoutput.innerText = json.contents.translated})
    .then(console.log(txtoutput.innerText))
    .catch(errorhandler)
})
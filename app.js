var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/wow.json";

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server try again after some time");
}

function clickHandler(){
    var inputText = textInput.value;  //taking input
    // calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translateText = json.contents.translate;
        outputDiv.innerText = translateText; //output
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
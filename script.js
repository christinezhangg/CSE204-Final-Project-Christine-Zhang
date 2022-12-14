document.getElementById("ViewSavedAdviceButton").addEventListener("click", savedAdvice);
document.getElementById("NewAdviceButton").addEventListener("click", newAdvice);
document.getElementById("AbouttheCreatorButton").addEventListener("click", goAbout);
// document.getElementById("veryhomey").addEventListener("click", goHome);
var url = "https://api.adviceslip.com/advice";
var advice = [];

function getAdvice(i) {
    var xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var advice = JSON.parse(this.responseText);
            getNewAdvice(advice);
        }
    };
    xhttp1.open("GET", url, true);
    xhttp1.send();
}

function newAdvice(e){
    e.preventDefault();
    var newpage1 = document.createElement("div");
    newpage1.id = "HoldsNewAdvice";
    document.getElementById("NewAdvicePage").appendChild(newpage1);
    // all the stuff in this new page
    var NA = document.createElement("button");
    NA.className = "generateNewAdvice";
    NA.addEventListener("click", getNewAdvice);
    NA.innerHTML = "Discover New Advice";
    newpage1.appendChild(NA);

    var words = document.createElement("p");
    words.className = "advicearewords";
    words.innerHTML = "Please Assign Your Advice a Date or Name Before Saving";
    newpage1.appendChild(words);
    var name = document.createElement("input");
    name.className = "nameofinput";
    newpage1.appendChild(name);
    var save = document.createElement("button")
    save.className = "gosaveadvice";
    save.innerHTML = "Save Advice";
    newpage1.appendChild(save);
    var home = document.createElement("button");
    home.id = "veryhomey";
    home.innerHTML = "Go Back to Home Page";
    newpage1.appendChild(home);
    home.addEventListener("click", goHome);

    document.getElementById("homepage").style.display = "none";
    document.getElementById("NewAdviceButton").style.display = "none";
    document.getElementById("AbouttheCreatorButton").style.display = "none";
    document.getElementById("SavedAdvicePage").style.display = "none";
    document.getElementById("ViewSavedAdviceButton").style.display = "";
    document.getElementById("NewAdvicePage").style.display = "";

}

//this is not working and idk why.
function goHome(){
    e.preventDefault();
    // var newpage2 = document.getElementById("HoldsNewAdvice");
    // newpage2.id = "backhome"
    // document.getElementById("backhome").removeChild(newpage2);
    
    document.getElementById("HoldsNewAdvice").style.display = "none";
    document.getElementById("NewAdvicePage").style.display = "none";
    document.getElementById("homepage").style.display = '';
}

//not exactly sure what to do here.
function getNewAdvice(){

}

function savedAdvice(e){
    e.preventDefault();
    var newpage2 = document.createElement("div");
    newpage2.id = "HoldsSavedAdvice";
    document.getElementById("SavedAdvicePage").appendChild(newpage2);
    var home = document.createElement("button");
    home.id = "veryhomey";
    home.innerHTML = "Go Back to Home Page";
    newpage2.appendChild(home);

    document.getElementById("homepage").style.display = "none";
    document.getElementById("AbouttheCreatorButton").style.display = "none";
    document.getElementById("ViewSavedAdviceButton").style.display = "none";
    document.getElementById("NewAdvicePage").style.display = "none";
    document.getElementById("NewAdviceButton").style.display = "";
    document.getElementById("SavedAdvicePage").style.display = "";

}

function goAbout(){
    e.preventDefault();
    var newpage3 = document.createElement("div");
    newpage3.id = "HoldsAboutStuff";
    document.getElementById("AboutPage").appendChild(newpage3);
    var home = document.createElement("button");
    home.id = "veryhomey";
    home.innerHTML = "Go Back to Home Page";
    newpage3.appendChild(home);
    document.getElementById("homepage").style.display = "none";
    document.getElementById("AbouttheCreatorButton").style.display = "none";
}


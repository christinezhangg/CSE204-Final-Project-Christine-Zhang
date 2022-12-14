var url = "https://api.adviceslip.com/advice";
var advice = [];
document.getElementById("NewAdviceButton").addEventListener("click", newAdvice);

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
    newpage1.className = "HoldsNewAdvice";
    document.getElementById("NewAdvicePage").appendChild(newpage1);
    // all the stuff in this new page

    var NA = document.createElement("button");
    NA.className = "generateNewAdvice";
    NA.addEventListener("click", getAdvice);
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
    home.className = "veryhomey";
    home.innerHTML = "Go Back to Home Page";
    newpage1.appendChild(home);

    document.getElementById("NewAdviceButton").style.display = "none";
    document.getElementById("AbouttheCreatorButton").style.display = "none";

}

function goHome(){
    
}


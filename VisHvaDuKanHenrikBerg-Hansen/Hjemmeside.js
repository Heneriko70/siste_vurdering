// Lager variabler som inneholder elementer fra html
var dyrEl = document.querySelector("#dyr");
var ValgknappEl = document.querySelector(".valgknapp");
var Valgknapp2El = document.querySelector(".valgknapp2");
ValgknappEl.addEventListener("click", Valg);
Valgknapp2El.addEventListener("click", Valg2);

// Lager en funksjon som sender brukeren videre til en ny side basert på valget i dropdown menyen
function Valg() {
    var dyr = dyrEl.value;
    if (dyr == "katt") {
        window.location.href = "Kattinfo.html";
    } else if (dyr == "hund") {
        window.location.href = "Hundinfo.html";
    }
}

function Valg2() {
    window.location.href = "sprettball.html";
}
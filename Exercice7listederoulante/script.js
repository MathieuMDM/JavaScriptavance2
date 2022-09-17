window.addEventListener("load", function () {
    document.getElementById("valider").addEventListener("click", calculerX)
});



function calculerX() {
var texts = {
    "1990": "Plus tard!",
    "1992": "Presque!",
    "1994": "Bonne réponse! Le W3C fut créé en octobre 1994 par Tim Berners Lee.",
    "1996": "Non. 1996 correspond à la première recommandation du CSS.",
    "1998": "Belle année pour le football français mais rien à voir avec le W3C !",
    "2000": "Vous avez dormi avant ?!",
}

var e = document.getElementById("demande");

// e to demande potem wyciagamy index wartosc ktora jest w value

var message = texts[e.options[e.selectedIndex].value];

// texts[e.selectedIndex]


alert(message);
}


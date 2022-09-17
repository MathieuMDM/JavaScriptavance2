window.addEventListener("load", function () {
    document.getElementById("calculer").addEventListener("click", calculerX)
});

function calculIMC(poids, taille) {
    var test = 10000 * (poids / (taille * taille));
    test = test.toFixed(2);
    return test;
}


function calculerX() {
    var poids = parseFloat(document.getElementById("text1").value);
    var taille = parseFloat(document.getElementById("text2").value);
    var message;
    if (isNaN(poids) || isNaN(taille)) {
        message = "Veuillez entrer un nombre";
    } else if (poids > 300 || taille > 250) {
        message = "Veuillez saisir les données correctement";
    } else {        
        var imc = calculIMC(poids, taille);        
        message = "Votre l'IMC est : " + imc;
    }
    alert(message);
}

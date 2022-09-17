window.addEventListener("load", function () {
    document.getElementById("valider").addEventListener("click", calculerX)
});



function calculerX() {
var message;
var sport = document.getElementById("sport").checked == true;
var musique = document.getElementById("musique").checked == true;
var lecture = document.getElementById("lecture").checked == true;
var internet = document.getElementById("internet").checked == true;
var total = sport + musique + lecture + internet;
    if(total>1) {
    message = "Attention à ne pas trop en faire!";
    } else if (musique) {
    message = "Une âme d'artiste ?!";
    } else if (lecture) {
    message = "Plutôt litteraire !";
    } else if (internet) {
    message = "Décrochez un peu de votre écran!";
    } else if (sport) {
    message = "C'est bien pour la santé !";   
    } else {    
    message = "Vous devez choisir quelque chose";
    }
alert(message);
}
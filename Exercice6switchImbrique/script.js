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
switch (total) {
    case 0:
        message = "Veuillez faire au moins un choix!";
        break;
    case 1:
            if (musique) {
            message = "Une âme d'artiste ?!";
            } else if (lecture) {
            message = "Plutôt litteraire !";
            } else if (internet) {
            message = "Décrochez un peu de votre écran!";
            } else if (sport) {
            message = "C'est bien pour la santé !";   
            } 
        break;
    case 2:
        message = "Bravo vous êtes pluridisciplinaire !";
        break;
    case 3:
        message = "Vous ne tenez pas en place ?!";
        break;
    case 4:
        message = "Attention à ne pas trop en faire!";
        break;
}
alert(message);
}


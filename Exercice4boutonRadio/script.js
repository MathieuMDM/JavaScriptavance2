window.addEventListener("load", function () {
    document.getElementById("valider").addEventListener("click", calculerX)
});

function calculerX() {
var btn = document.getElementsByName("cat");
var message;
var key;
for (var i = 0; i < btn.length; i++) {
    if (btn[i].checked) {
        key = btn[i].value;
    }
}
switch (key) {
    case "sport":
        message = "C'est bien pour la santé !";
        break;
    case "musique":
        message = "Une âme d'artiste ?!";
        break;
    case "lecture":
        message = "Plutôt litteraire !";
        break;
    case "internet":
        message = "Décrochez un peu de votre écran!";
        break;
    default:
        message = "Veuillez faire un choix!";
        break;
}
alert(message);
}
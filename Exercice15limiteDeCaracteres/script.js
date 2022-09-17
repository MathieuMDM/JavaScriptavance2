function pass() {
  var texte = this.value;
  var longueur = texte.length;
  var end = 15 - longueur;

  if (end <= 15 && end >= 8) {
      this.className = "normal";
  } else if (end < 8 && end >= 4) {
      this.className = "attention";
  } else if (end < 4) {
      this.className = "fin";
  }
  var message = "Il ne vous reste plus que " + end + " caractère(s) disponible(s).";
  document.getElementById("alerte").innerHTML = message;
}

window.addEventListener("load", function () {
  document.getElementById("odls").addEventListener("keyup", pass);
});
  
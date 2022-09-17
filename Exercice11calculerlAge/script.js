function maxMois(year, day, month) {    
    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];    
        if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) //oblicza lata przestepne w 2000 byl przystepny 
         monthLength[1] = 29;
        return day > 0 && day <= monthLength[month - 1];
}

function getAge(year, day, monthFromZero, now) {
    var age = now.getFullYear() - year;
    if (now.getMonth() < monthFromZero || (now.getMonth() == monthFromZero && now.getDate() < day)) {
      age--;
    }
    return age;
}

function getAniver(year, day, monthFromZero, now) {
    var e = ""
    if (now.getMonth() == monthFromZero &&  now.getDate() == day) {
        e = "\r\nJoyeux anniversaire"
        } 
     return e;   
}

// \r\n = daodaje dodatkowa linie jak <br>

function btn() {
    var now = new Date();
    var jour = 0 + document.getElementById("jour").value;
    var mois = 0 + document.getElementById("mois").value;
    var anne = 0 + document.getElementById("annee").value;
    if (jour == 0|| mois == 0|| anne == 0) {
        alert("Entrer les chiffres correctement")
     } else if (!maxMois(anne, jour, mois)) {
        alert("Entrer le mois correctement")
     } else {
        message = getAge(anne, jour, mois-1, now)
        alert(message + getAniver(anne, jour, mois-1, now))
     }
     
}

window.addEventListener("load", function () {
    document.getElementById("calculer").addEventListener("click", btn)
});

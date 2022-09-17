window.addEventListener("load", function () {
    document.getElementById("calculer").addEventListener("click", calculerX)
});

function calculIMC(poids, taille) {
    var test = 10000 * (poids / (taille * taille));
    test = test.toFixed(1);
    return test;
}



function calculerEst(imc) {
    var messageInt; 
    if (imc <= 16.5) {
        messageInt = "Dénutrition"
    } else if (imc > 16.5 && imc <= 18.5) {
        messageInt = "Maigreur"
    } else if (imc > 18.5 && imc <= 25) {
        messageInt = "Corpulence normale"
    } else if (imc > 25 && imc <= 30) {
        messageInt = "Surpoids"
    } else if (imc > 30 && imc <= 35) {
        messageInt = "Obésité modérée"
    } else if (imc > 35 && imc <= 40) {
        messageInt = "Obésité sévère"
    }
    else
         messageInt = "Obésité morbide"
    return messageInt;
}


function calculerX() {
    var poids = parseFloat(document.getElementById("text1").value);
    var taille = parseFloat(document.getElementById("text2").value);
    var message;
    var messageInt; 
    if (isNaN(poids) || isNaN(taille)) {
        message = "Veuillez entrer un nombre";
    } else {
        var imc = calculIMC(poids, taille);  
        messageInt = calculerEst(imc);
    }
    message = "Votre l'IMC est : " + imc;
    // alert(message + ". Votre santé est: " + messageInt);
    var myHeading = document.querySelector('h1');
    myHeading.textContent = (message + ". Votre santé est: " + messageInt);
}

// tak jak w lini 35-38 a nie tak jak w 42
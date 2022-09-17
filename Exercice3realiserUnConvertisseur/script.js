var taux = 6.55957;

window.addEventListener("load",function (){
    document.getElementById("text1").addEventListener("keyup",FrancsCal);
    document.getElementById("text2").addEventListener("keyup",EurosCal);
});


function FrancsCal(){
    var euros = document.getElementById("text1").value;
    euros = parseFloat(euros);	
    if (isNaN(euros)) {
        alert("Veuillez entrer un nombre");
    }
    else {					
        var francs = euros*taux;
        francs=francs.toFixed(2);
        document.getElementById("text2").value=francs;
    }
}

function EurosCal(){
    var francs = document.getElementById("text2").value;
    if (isNaN(francs)) {
        alert("Veuillez entrer un nombre");
    }
    else {	
        var euros = francs/taux;
        euros=euros.toFixed(2)
        document.getElementById("text1").value=euros;
    }   
}
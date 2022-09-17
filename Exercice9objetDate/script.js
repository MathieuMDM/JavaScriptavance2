var now = new Date();


function dix(e){
    return((e<10)?":0":":")+e;
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' }; // znaczy dwie cyfry z zerem sie pojawia ponizej 10, 
var element = now.toLocaleString('fr-FR', options);

var elemente = document.getElementById("date");
elemente.innerText = `Nous sommes le  ${element}(${now.toLocaleDateString()})`;

var arr = document.getElementById("dateArr");
arr.innerText = `Vous êtes arrivé sur cette page à ${dix(now.getHours())}h ${dix(now.getMinutes())}min et ${dix(now.getSeconds())}secondes`;

var html = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`


function clock() {
    var data = new Date();
    var hours = data.getHours();
    var min = data.getMinutes();
    var sek = data.getSeconds();
    var now = ""+hours+
    ((min<10)?":0":":")+min+
    ((sek<10)?":0":":")+sek;
    document.getElementById("dateMain").value = now;
}        
    setInterval(clock, 1000);
    // setInterval(function(){clock();}, 1000);




var myVar;
var e = 0;

function btn() {
    clearInterval(myVar);
}
window.addEventListener("load", function () {
    odl();
    myVar = setInterval(odl, 1000); 
    document.addEventListener("click", btn);
});

function odl() { 
    if (e == 11) {
        window.open("https://cefii.fr","myTab");
    } else {
        e++;
        document.getElementById("time").value = -1 + e;
    } 
}

window.addEventListener("load", function () {
    document.getElementById("calculer").addEventListener("click", old());
});


// function btn() {
//     clearTimeout(myVar);
// }
// window.addEventListener("load", function () {
//     odl();
//     document.addEventListener("click", btn);
// });

// function odl() { 
//     e++;
//     document.getElementById("time").value = -1 + e;
//      if (e == 11) {
//         window.open("https://cefii.fr","myTab");
//     } else {
//     myVar = setTimeout(odl, 1000);
// } 
// }





// function btn() {
//     clearInterval(myVar);
// }
// window.addEventListener("load", function () {
//     odl();
//     document.addEventListener("click", btn);
// });

// function odl() { 
//     e++;
//     document.getElementById("time").value = -1 + e;
//      if (e == 11) {
//         window.open("https://cefii.fr","myTab");
//     } else {
//     myVar = setInterval(odl, 1000);
// } 
// }





window.addEventListener("load", function () {
    document.getElementById("valider").addEventListener("click", calculerX)
});


function calculerX() {
    var e = document.getElementById("choix");
    var test = "Vous consultez Internet depuis : <br><ul>";
    var rol = true
    for (let index = 0; index < e.length; index++) {
        if (e.options[index].selected){
        test += "<li>" + e.options[index].innerHTML + "</li>"  
        rol = false       
        }        
  
    }
    test = test + "</ul>";
// to jest to samo:  test += "</ul>";
// innerHTML to jest doslownie pomiedzy tym co jest w Id resultat
// let to jest jak var ale tylko do tej funkcji lub w tym tworze, rozni sie od var tym ze jest w tworze od nawiasu do nawiasu, let nie napisuje jak sa takie same nazwy.
document.getElementById("resultat").innerHTML = rol?"Rien n'a été sélectionné":test;
    
}

// ? = if słuzy do wyciagania wartosci a nie do wywolania


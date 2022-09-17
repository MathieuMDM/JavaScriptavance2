const missing = "missing";
var validated = false;

function calculate(event) {
  var parent = event.target.parentElement;
  var x = getQte(parent).value;
  var result = getStHt(parent);
  var y = getTimeOfDay(parent);
  var t = y.options[y.selectedIndex].value;
  switch (t) {
    case "demiJournee":
      myResult = parseInt(x) * 8;
      break;
    case "journee":
      myResult = parseInt(x) * 15;
      break;
    case "repas":
      myResult = parseInt(x) * 7;
      break;
  }
  if (myResult < 0) {
    result.value = 0;
    getQte(parent).value = 0;
  } else {
    result.value = myResult;
  }
  //  isNaN(x) ? '' :
  fillTotal();
}
function getTimeOfDay(parent) {
  return parent.getElementsByClassName("timeOfDay")[0]; // wyciaga pierwsza tablice nr 1
}
function getQte(parent) {
  return parent.getElementsByClassName("qte")[0];
}
function getStHt(parent) {
  return parent.getElementsByClassName("stHt")[0];
}

// parent to div

function fillTotal() {
  var arr = document.getElementsByClassName("stHt");
  var total = 0;
  var u = false;
  var ht = document.getElementById("ht");
  for (var i = 0; i < arr.length; i++) {
    if (!isNaN(parseInt(arr[i].value))) {
      total += parseInt(arr[i].value);
      u = true;
    }
  }
  // parseInt sparwdza czy w ht jest pusto = true
  const htNan = isNaN(parseInt(ht.value));
  if (!htNan && !u) {
    setTotal("");
  } else if (u) {
    setTotal(total);
  }
}
function setTotal(value) {
  var totalTva = value == "" ? "" : Math.round(value * 1.2 * 100) / 100;
  document.getElementById("ht").value = value;
  document.getElementById("ttc").value = totalTva;
}

function validate() {
  var message = [];
  var email = document.getElementById("mail").value;
  var emailpattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailpattern.test(email)) {
    document.getElementById("mail").classList.remove(missing);
  } else {
    document.getElementById("mail").classList.add(missing);
    message.push("Email est invalide");
  }

  var name = document.getElementById("nom").value;
  document.getElementById("nom").value = name.toUpperCase();

  var regex = /^[A-Z]+$/;
  // * zero lub wiecej , + przynajmniej jeden, ^ do $ zaznacza całość,

  if (regex.test(name)) {
    document.getElementById("nom").classList.remove(missing);
  } else {
    message.push("Ecrire le nom en majuscules");
    document.getElementById("nom").classList.add(missing);
  }

  if (document.getElementById("acce").checked) {
    document.getElementById("acce").classList.remove(missing);
  } else {
    document.getElementById("acce").classList.add(missing);
    message.push("Vous n'avez pas accepté les conditions");
  }

  if (message.length > 0) {
    alert(message.join("\r\n"));
    validated = false;
  } else {
    validated = true;
    alert("Tout a été vérifié correctement");
  }
}
// var name = document.getElementById('nom')
// var email = document.getElementById('mail')
// if (name == '') {
//   // toUpperCase()
//   name.style.backgroundColor = '#ff0000'
// } else if (email == 0 || email != '@') {
//   email.style.backgroundColor = '#ff0000'
// style="text-transform:uppercase"
// }

function reset() {
  document.getElementById("myForm").reset();
}

function main() {
  var timeOfDay = document.getElementsByClassName("timeOfDay");

  for (let i = 0; i < timeOfDay.length; i++) {
    const element = timeOfDay[i];
    element.addEventListener("change", function (event) {
      calculate(event);
    });
  }

  var qte = document.getElementsByClassName("qte");

  for (let i = 0; i < qte.length; i++) {
    const element = qte[i];
    element.addEventListener("change", function (event) {
      calculate(event);
    });
  }

  var tes = document.getElementsByClassName("checkAfterChange");
  for (let i = 0; i < tes.length; i++) {
    const element = tes[i];
    element.addEventListener("change", function () {
      validated = false;
    });
  }

  document.getElementById("verifier").addEventListener("click", validate);

  document.getElementById("reini").addEventListener("click", reset);

  document.getElementById("imprimer").addEventListener("click", function () {
    window.print();
  });

  document.getElementById("emc").addEventListener("click", function () {
    if (validated) {
      window.open("mailto:test@example.com");
    } else {
      alert("D'envoyer vous devez vérifier");
    }
  });
}

main();

var utente;
var computer;
var max = 6;
var min = 1;
var risultato;

document.getElementById("btn").addEventListener("click",function() {

  utente = Math.floor(Math.random() * 6)+1 ;
  computer = Math.floor(Math.random() * 6)+1 ;

  if (utente > computer) {
    risultato = utente + " vince l'utente";
    // console.log(utente, "vince l'utente");

  }else if (computer > utente){
    risultato = computer + " vince il computer";
    // console.log(computer, "vince il computer");

  }else {
    risultato = "pareggio"
  }

 document.getElementById("result").innerHTML = risultato;
});

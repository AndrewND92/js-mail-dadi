var utente;
var computer;
var max = 6;
var min = 1;
var risultato;

document.getElementById("btn").addEventListener("click",function() {

  utente = Math.floor(Math.random() * (max + min)) ;
  computer = Math.floor(Math.random() * (max + min)) ;

  if (utente > computer) {
    risultato = utente + " vince l'utente";
    // console.log(utente, "vince l'utente");

  }else if (computer > utente){
    risultato = utente + " vince il computer";
    // console.log(computer, "vince il computer");

  }else ("pareggio");

 document.getElementById("result").innerHTML = risultato ;
});

var utente;
var computer;
var max = 6;
var min = 1;

document.getElementById("btn").addEventListener("click",function() {

  utente = Math.floor(Math.random() * (max + min)) ;
  computer = Math.floor(Math.random() * (max + min)) ;

  if (utente > computer) {
    console.log(utente, "vince l'utente");

  }else if (computer > utente){
    console.log(computer, "vince il computer");

  }else ("pareggio");

});

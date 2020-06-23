var listaMail = ["prima@gmail.com", "seconda@gmail.com", "terza@gmail.com",12,24,36 ];
var mail = prompt("scrivi la tua email");
var conferma = false;

console.log(listaMail);
console.log(mail);

for (var i = 0; i < listaMail.length; i++) {

 if (mail == listaMail[i]) {
   conferma = true;
 }

}

if (conferma == true) {
  console.log("mail trovata");

}else if ( conferma == false){
  console.log("mail non trovata");
}

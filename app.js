//Visualizzare in pagina 5 numeri casuali. ( con un alert )
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let randomNumber = [];

for (let i = 0; i < 5; i++) {
  const N = getRandomInt(1, 100);
  randomNumber.push(N);
  alert(randomNumber);
  console.log(N, randomNumber);
}

//Dopo la chiusura dell’alert parte un timer di 30 secondi.
//Alla fine dei 30 secondi l’utente dovrà inserire, uno alla volta, i numeri che ha visto precedentemente ( se li ricorda ), tramite il prompt() (servirà un ciclo…?).
const remember = [];
const nUser = [];
setTimeout(() => {
  for (let i = 0; )
}, 1000);
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

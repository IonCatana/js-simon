//Visualizzare in pagina 5 numeri casuali. ( con un alert )
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let randomNumber = [];
const N = [];
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
  for (let i = 0; nUser.length < 5; i++) {
    const N = parseInt(
      prompt('Inserisci i numeri appena visti, uno alla volta!')
    );
    if (!nUser.includes(N) && !isNaN(N)) nUser.push(N);

    if (randomNumber.includes(N) && !remember.includes(N) && !isNaN(N)) {
      remember.push(N);
      alert('Grande vai avanti!');
    } else if (remember.includes(N)) {
      alert('Ma sei ubriaco? :=) Lo hai gia digitato!');
    } else {
      alert('Niente da fare amico, non ce la fai proprio!');
    }
    console.log(remember, nUser);
  }
  //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
  if (remember.length === 0) {
    alert(
      'La tua memoria e scarsa fumma di meno! :=) Non hai ricordato nessun numero'
    );
  } else if (remember.length === 1) {
    alert(`Almeno 1 numero ti sei ricordato bravo! ${remember}`);
  } else {
    alert(`I numeri ricordati sono ${remember}`);
  }
}, 5000);

console.log(nUser);

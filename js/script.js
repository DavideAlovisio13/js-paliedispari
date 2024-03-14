/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// dichiaro le mie variabili contenenti gli elementi html
const inputBtn = document.getElementById("input_btn");
let outputText = document.getElementById('result');
// aggiungo un evento al click del pulsante 
inputBtn.addEventListener('click', function () {
    // resetto il mio output
    outputText.innerText = "";
    // genero i miei contenitori vuoti: uno lineare e un altro invertito
    let arrayWords = [];
    let revArrayWords = [];
    //estrapolo il valore dal mio input su html
    let inputText = document.getElementById("input_text").value;
    //inserisco il valore all'interno dei miei due contenitori, divindendo le varie lettere. Nell'ultimo invertirò l'ordine
    arrayWords.push(inputText.split(''));
    revArrayWords.push(inputText.split('').reverse());
    // a quetso punto creo un ciclo dove vado a ....
    for (let i = 0; i < arrayWords.length && revArrayWords.length; i++) {
        //....prima di tutto riunire gli elementi all'interno degli array....
        let arrayWordsCheck = arrayWords[i].join('');
        console.log(arrayWordsCheck);
        let revArrayWordsCheck = revArrayWords[i].join('');
        console.log(revArrayWordsCheck);
        //....poi a verificare sei due oggetti composti siano identici oppure no
        if (arrayWordsCheck !== revArrayWordsCheck) {
            outputText.innerText = 'purtroppo la parola inserita non è palindroma';
        } else {
            outputText.innerText = 'la tua parola è palindorma!';
        }
    }
})

// esercizio 2

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// pari
// dispari
// (controllare se ha schiacciato i bottoni)
// scrive un numero da 1 a 5
// (controllare che  sia compreso tra i due estremi)
// computer genera un numero random da 1 a 5
//somma
// è pari o dispari?
// scrivo se ha vinto oppure no

// condizioni da verificare

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const userEven= bottone
  const userOdd = bottone
  const userNum = input
  const compNum = getRndInteger(1,5);
  let sum = userEven + userOdd

  function EvenOrOdd () {
    
  }


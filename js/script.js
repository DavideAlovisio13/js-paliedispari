/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// dichiaro le mie variabili contenenti gli elementi html
const inputBtn = document.getElementById("input_btn");
// genero i miei contenitori vuoti: uno lineare e un altro invertito
let arrayWords = [];
let revArrayWords = [];
// aggiungo un evento al click del pulsante 
inputBtn.addEventListener('click', function(){
    //estrapolo il valore dal mio input su html
    const inputText = document.getElementById("input_text").value;
    //inserisco il valore all'interno dei miei due contenitori, divindendo le varie lettere. Nell'ultimo invertirò l'ordine
    arrayWords.push(inputText.split(''));
    revArrayWords.push(inputText.split('').reverse());
    // a quetso punto creo un ciclo dove vado a ....
    for(let i = 0; i < arrayWords.length && revArrayWords.length; i++){
        //....prima di tutto riunire gli elementi all'interno degli array....
        let arrayWordsCheck = arrayWords[i].join('');
        console.log(arrayWordsCheck);
        let revArrayWordsCheck = revArrayWords[i].join('');
        console.log(revArrayWordsCheck);
        //....poi a verificare sei due oggetti composti siano identici oppure no
        if (arrayWordsCheck !== revArrayWordsCheck) {
            let
        }
    }

    console.log(arrayWords);
    console.log(revArrayWords);

  
    // genero la mia funzione per controllare se la parola è palindroma oppure no
   
    
    
    
})


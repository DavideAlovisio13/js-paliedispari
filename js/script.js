/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// dichiaro le mie variabili contenenti gli elementi html
const inputBtn = document.getElementById("input_btn");
// genero il mio contenitore vuoto 
let arrayWords = [];
// aggiungo un evento al click del pulsante 
inputBtn.addEventListener('click', function(){
    //estrapolo il valore dal mio input su html
    const inputText = document.getElementById("input_text").value;
    arrayWords.push(inputText.split(''));
    console.log(arrayWords);

  
    // genero la mia funzione per controllare se la parola è palindroma oppure no
   
    
    
    
})


//genera
var btnSubmit = document.getElementById('generate');


btnSubmit.addEventListener('click', function(){

//nome
    var nameX = document.getElementById('nome').value;
    document.getElementById('username').innerHTML = nameX.charAt(0).toUpperCase() + nameX.substring(1).toLowerCase();


//km da percorrere & prezzo
    var kmX = document.getElementById('km').value;
    var prezzo = kmX * 0.21;

    
//sconti età
    var fascia = document.getElementById('eta').value;
    if (fascia === 'Minorenne'){
        prezzo = ((kmX * 0.21) / 100) * 80; 
    } else if (fascia === 'Over65'){
        prezzo = ((kmX * 0.21) / 100) * 60;
        Math.round(1);
    }
    prezzo = Math.round(prezzo * 100) / 100;
    document.getElementById('costo').innerHTML = ('€ ') + prezzo;
    document.getElementById('offerta').innerHTML = fascia;
    

//random
    document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 9) +1;
    document.getElementById('codice-cp').innerHTML = Math.floor(Math.random() * (100000 - 90000)) + 90000;;

});



//cancella
var btnErase = document.getElementById('annulla');

btnErase.addEventListener('click', function(){
    document.getElementById('nome').value = '';
    document.getElementById('km').value = '';
    document.getElementById('eta').value = '';
    document.getElementById('username').innerText = '';
    document.getElementById('offerta').innerText = '';
    document.getElementById('carrozza').innerText = '';
    document.getElementById('codice-cp').innerText = '';
    document.getElementById('costo').innerText = '';
});
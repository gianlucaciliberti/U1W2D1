let myFirstString;
myFirstString ='Ciao!'

console.log (myFirstString);

let punteggio;
punteggio = 5
console.log (punteggio)
punteggio = 10
console.log (punteggio)

// Variabile globale, non può essere cambiata (global scope)
const mesi= 12;
console.log (mesi);

let name = 'Gianluca';
console.log (name)

/* backtick ` premere Alt96 
console.log(`il numero di mesi è ${mesi}`) ; se metto apice ' al posto 
del backtick non funziona*/

{
    console.log ('il numero di mesi è '+ mesi)
}

//variabile locale (locale scope)

{
    let studentName ='Valentina'
    console.log (studentName)
}

/*console.log(studentName) ; Errore bloccante, 
 studentName è local quindi non può essere utilizzata qui */





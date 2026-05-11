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

let myVariable = 'Pippo'; //string
console.log(`La variabile è di tipo ${typeof myVariable}`);

myVariable= 15 ; //number
console.log(`La variabile è di tipo ${typeof myVariable}`);

//UNDEFINED
let firstName;
console.log(firstName); //undefined
console.log(5+firstName); //NaN (Not a Number)

//NULL
let otherName = null;
console.log(otherName); //null
console.log(5+otherName); //5 + nulla = 5

//operatore modulo
let firstNumber = 15;
let secondNumber = 4;

console.log (`${secondNumber} elevato al quadrato è uguale a ${secondNumber**2}`) //al quadrato
console.log (`il resto della divisione tra ${firstNumber} e ${secondNumber} è ${firstNumber % secondNumber}`)//restituisce resto della divisione

//Operatori di assegnazione
let x = 10;
console.log(x+=5); // x = x + 5
console.log(x-=3); // x ormai è cambiato, quindi il nuovo x in partenza vale 15, dopo varrà sempre 12



//Uguaglianza/identità  vs disuguaglianza/non identità
let numberString = '5';
let numberNumber = 5;

console.log(numberString==numberNumber) // == operatore uguaglianza: confronta solo uno fra valore e tipo, quindi true
console.log(numberString===numberNumber)// DA USARE SEMPRE(STRICT EQUALITY)=== operatore identità: confronta sia valore che tipo, quindi false

console.log(numberString!=numberNumber) // != operatore disuguaglianza, false
console.log(numberString!==numberNumber) // DA USARE SEMPRE(STRICT DISEQUALITY) !==operatore non identità, true

let strictEquality = numberString===numberNumber;
let strictDisequality = numberString!==numberNumber;

console.log(`numberString è identico a numberNumber? ${strictEquality}`);
console.log(`numberString è non identico a numberNumber? ${strictDisequality}`);

//Operatori Logici
let minAge=18;
let maxAge=40;
let myAge=35;
let notAge=46;

//AND
console.log('--------AND--------') //se entrambi veri, true. tutti gli altri false
console.log(minAge>=18 && maxAge<=40); //true
console.log(minAge>20 && maxAge<=40); //false
console.log(minAge>=18 && maxAge<38); //false
console.log(minAge>20 && maxAge<38); //false

//OR
console.log('-------OR------') //se entrambi falsi, false. tutti gli altri true
console.log(minAge>=18 || maxAge<=40); //true
console.log(minAge>20 || maxAge<=40); //true
console.log(minAge>=18 || maxAge<38); //true
console.log(minAge>20 || maxAge<38); //false

//confronto reale
console.log('rientri nella fascia di età?')
console.log(myAge>=minAge && myAge<=maxAge);
console.log('rientri nella fascia di età?')
console.log(myAge>=minAge && notAge<=maxAge);

let errorAge=17;
console.log( errorAge<=40 || errorAge>=18  );





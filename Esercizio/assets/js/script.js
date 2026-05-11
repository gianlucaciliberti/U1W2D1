/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nome='Gianluca' ;
const cognome='Ciliberti' ;
console.log('--------Esercizio1--------');
console.log(`Ciao, mi chiamo ${nome} ${cognome}.`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10;
let b = 3;
console.log('--------Esercizio2--------');
console.log (`${a} + ${b} = ${a+b}`);
console.log (`${a} - ${b} = ${a-b}`);
console.log (`${a} * ${b} = ${a*b}`);
console.log (`${a} / ${b} = ${a/b}`);
console.log (`${a} % ${b} = ${a%b}`);
console.log (`${a} ** ${b} = ${a**b}`);

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ANNO_NASCITA = 2001 ;
const ANNO_CORRENTE = 2026 ;
const myAge = ANNO_CORRENTE-ANNO_NASCITA;
console.log('--------Esercizio3--------');
console.log (`Oggi hai ${myAge} anni.`);
console.log (`Tra 10 anni avrai ${myAge + 10 } anni.`);
console.log (`5 anni fa avevi ${myAge - 5 } anni.`);


/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let eta=25 ;
let maggiorenne = eta >=18;
console.log('--------Esercizio4--------');
console.log (`Sei maggiorenne? ${maggiorenne}`);

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let firstVariable= 'Stringa';
let secondVariable= 15;
let thirdVariable = false;
let fourthVariable = null;
let fifthVariable ;
console.log('--------Esercizio5--------');
console.log (` ${firstVariable} è di tipo ${typeof firstVariable}`);
console.log(`${secondVariable} è di tipo ${typeof secondVariable}`);
console.log(`${thirdVariable} è di tipo ${typeof thirdVariable}`);
// La variabile null ritorna un valore nullo di tipo object perchè il 'nessun valore' assegnato è stato intenzionale.
console.log (`${fourthVariable} è di tipo ${typeof fourthVariable} `);
console.log (`${fifthVariable} è di tipo ${typeof fifthVariable}`);

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = 5;
let string = '5';
console.log('--------Esercizio6--------');
console.log(`${number} == "${string}" : ${number==string}`);
//la forma == ritorna true perchè essendo un operatore di uguaglianza analizza il tipo oppure il valore, che in questo caso è uguale.
console.log (`${number} === "${string}" : ${number===string}`);
//l'operatore di identità === ritorna false, poichè analizza valore E tipo che devono essere entrambi uguali.

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3 = 53
   - "5" - 3 = 2
   - true + 1 = 2
   - "10" * "2" = 20
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------Esercizio7--------');
console.log(`"5" + 3 = ${"5" + 3}`);
console.log(`"5"-3 = ${"5"-3}`);
console.log(`true + 1= ${true + 1}`);
console.log(`"10" * "2" = ${"10"*"2"}`);


/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = 12;
console.log('--------Esercizio8--------') ;
console.log (`${n} è pari? ${n%2===0}`);
console.log (`${n} è divisibile per 3? ${n%3===0}`) ;
console.log (`${n} è pari e divisibile per 3? ${n%2===0 && n%3===0}`) ;

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let latoA = 7;
let latoB = 7;
let latoC = 7;
const perimeter= latoA+latoB+latoC
console.log('--------Esercizio9--------') ;
if (latoA===latoB && latoB===latoC) {
   console.log(`Il triangolo è equilatero: perimetro ${perimeter}`)
} 
else if(latoA===latoB || latoB===latoC || latoA===latoC) {
   console.log(`Il triangolo è isoscele. perimetro ${perimeter}`)
}
else {
   console.log(`Il triangolo è scaleno: perimetro ${perimeter}`)
};


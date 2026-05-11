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
const a1 = 10
const b1 = 3
console.log('--------Esercizio2--------');
console.log (`${a1} + ${b1} = ${a1+b1}`);
console.log (`${a1} - ${b1} = ${a1-b1}`);
console.log (`${a1} * ${b1} = ${a1*b1}`);
console.log (`${a1} / ${b1} = ${a1/b1}`);
console.log (`${a1} % ${b1} = ${a1%b1}`);
console.log (`${a1} ** ${b1} = ${a1**b1}`);

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ANNO_NASCITA = 2001 ;
const ANNO_CORRENTE = 2026 ;
console.log('--------Esercizio3--------');
console.log (`Oggi hai ${ANNO_CORRENTE - ANNO_NASCITA} anni.`);
console.log (`Tra 10 anni avrai ${ANNO_CORRENTE + 10 - ANNO_NASCITA} anni.`);
console.log (`5 anni fa avevi ${ANNO_CORRENTE - 5 - ANNO_NASCITA} anni.`);


/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let minAge=18 ;
let myAge=25 ;
console.log('--------Esercizio4--------');
console.log (`Età ${myAge} anni. Maggiorenne: ${myAge>=minAge}`);

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
const a = 7;
const b = 6;
const c = 5;
console.log('--------Esercizio9--------') ;
if (a===b && b===c) {
   console.log(`Il triangolo è equilatero: perimetro ${a+b+c}`)
} 
else if(a===b && b!==c) {
   console.log(`Il triangolo è isoscele: perimetro ${a+b+c}`)
}
else {
   console.log(`Il triangolo è scaleno: perimetro ${a+b+c}`)
};


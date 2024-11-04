/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.*/


    console.log
      ("I data type sono i tipi di dato (formati) che posso assegnare a una variabile nel linguaggio Javascript.esistono 6 tipi di datatype, 4 sono i principali e 2 sono definiti primitivi.tra i 4 principali troviamo string che è formato da una sequenza di caratteri; number per i numeri; boolean può assumere solo il valore vero (true) o falso (false), e Date che serve per memorizzare date e ore. Invece,tra i primitivi troviamo null che viene assegnato ad una variabile a cui non è stata assegnata nessun valore e Undefined quando qualcosa non è stato definito in una variabile dove è stato assegnato un valore."
      )
      


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.

/* SCRIVI QUI LA TUA RISPOSTA */

var nome = "Giuseppe"
console.log(nome)//stampa Giuseppe


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 12;
let numero2 = 20;
let somma = numero1 + numero2;
console.log(somma); // Stampa 32 nella console

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nome1 = "Giuseppe"
    console.log(nome1)//stampa Giuseppe
    


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

try {nome1= "Pomo";} catch (error) { console.error("Errore durante la riassegnazione di nome1:", error.message); }
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
let risultato = x - 4;
console.log("Il risultato è:", 8 );
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";

//name1 diverso da name2
let Diversi = name1 !== name2;
console.log("Le due variabili sono diverse:", Diversi); // stampa true

let uguali = name1.toLowerCase() === name2.toLowerCase();
console.log("Le due variabili sono uguali in lowercase:", uguali); // stampa true


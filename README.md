## MAIL
Chiedi all’utente di inserire la sua email, confrontala con una lista di email autorizzate e stampa un messaggio in base all’esito del controllo. Non è necessaria la validazione della sintassi dell’email e non devono essere utilizzati “includes”.
### DATI
	•	Lista di email autorizzate
	•	Email inserita dall’utente
### ESECUZIONE LOGICA
Per ogni email presente nella lista autorizzata:
	•	Se l’email dell’utente corrisponde a una delle email autorizzate -> Stampa: “Accesso concesso”.
	•	Altrimenti -> Stampa: “Accesso negato".

## DADI
Simula un gioco in cui sia il giocatore che il computer lanciano un dado (valore casuale da 1 a 6). Determina il vincitore in base al punteggio più alto.
### DATI
	•	Numero casuale generato per il giocatore (da 1 a 6)
	•	Numero casuale generato per il computer (da 1 a 6)
### ESECUZIONE LOGICA 
	1.	Se il numero del giocatore è maggiore del numero del computer -> Il giocatore vince.
	2.	Altrimenti se il numero del computer è maggiore -> Il computer vince.
	3.	Altrimenti -> È un pareggio.
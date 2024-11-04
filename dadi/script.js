const numPlayer = Math.floor(Math.random() * 6) + 1;
const numComputer = Math.floor(Math.random() * 6) + 1;
console.log("Giocatore:", numPlayer, "Computer:", numComputer);

let message;
if (numPlayer > numComputer) {
    message = "Hai vinto!";
} else if (numPlayer < numComputer) {
    message = "Hai perso!";
} else {
    message = "Pareggio!";
}
console.log(message);
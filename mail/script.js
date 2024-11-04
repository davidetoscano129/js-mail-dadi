const authorizedEmail = ["davide@gmail.com", "toscano@gmail.com", "milan@gmail.com"];
const generatedEmail = prompt("Scrivi qui la tua email");

let accessGranted = false;

for (let i = 0; i < authorizedEmail.length; i++) {
    if (authorizedEmail[i] === generatedEmail) {
        accessGranted = true;
        break; // Interrompe il ciclo se l'accesso è concesso
    }
}

const message = accessGranted ? "Accesso Concesso" : "Accesso Negato";
console.log(message);
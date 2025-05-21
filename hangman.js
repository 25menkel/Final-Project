let wordBank = ["Stevie T Badin", "Javascript", "Cincinnati", "Ohio State", "Reds Country"];

let secret = wordBank[Math.floor(Math.random() * wordBank.length)]. toUpperCase();

let guessed = [];
for (let i = 0; i < secret.length; i++) {
    if (secret[i] === " ") {
        guessed.push(" ");
    } else {
        guessed.push("_");
    }
}

let strikes = 0;
let maxStrikes = 6;
let usedLetters = [];

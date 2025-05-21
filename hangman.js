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

while (strikes < maxStrikes && guessed.includes("_")) {
    console.log("\n" + guessed.join(" "));
    console.log(`Strikes: ${strikes}/${maxStrikes}`);
    console.log("Used Letters: " + usedLetters.join(", "));

    let guess = prompt("Guess a letter:").toUpperCase();
    if (guess.length !== 1 || !guess.match(/[A-Z]/)) {
        console.log("Please enter a single valid letter.");
        continue;
    }

    if (usedLetters.includes(guess)) {
        console.log("You already guessed that letter.");
        continue;
    }
    
    usedLetters.push(guess);

    if (secret.includes(guess)) {
        for (let i = 0; i < secret.length; i++) {
            if (secret[i] === guess) {
                guessed[i] = guess;
            }
        }
        console.log("Correct!");
    } else {
        strikes++;
        console.log("incorrect.");
    }
}

if (strikes === maxStrikes) {
    console.log("\nGame over! The phrase was: " + secret);
    } else {
        console.log("\nYou win! The phrase was: " + secret);
    }
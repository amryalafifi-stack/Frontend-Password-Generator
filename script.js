// === JS ===
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const clipboardBtn = document.getElementById("clipboard");

const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const NUMBER_CHARS = "0123456789";
const SYMBOL_CHARS = "!@#$%^&*()_+-=[]{}|;:',.<>/?";

function generatePassword() {
    let chars = "";
    if (uppercaseEl.checked) chars += UPPERCASE_CHARS;
    if (lowercaseEl.checked) chars += LOWERCASE_CHARS;
    if (numbersEl.checked) chars += NUMBER_CHARS;
    if (symbolsEl.checked) chars += SYMBOL_CHARS;

    if (!chars) return "";

    const length = Number(lengthEl.value);
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

generateBtn.addEventListener("click", () => {
    const password = generatePassword();
    resultEl.textContent = password || "Select at least one option!";
});

clipboardBtn.addEventListener("click", () => {
    const password = resultEl.textContent;
    if (!password) return;
    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
    });
});

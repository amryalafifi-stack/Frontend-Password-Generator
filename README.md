# Frontend-Password-Generator

This Frontend Password Generator is a web application built entirely with HTML, CSS, and JavaScript. It provides users with a simple and interactive way to create strong, secure passwords tailored to their needs. The interface is clean and responsive, featuring a soft blue and white pastel theme that works beautifully on both desktop and mobile devices.

Users can easily select the length of their password and choose which types of characters to include, such as uppercase letters, lowercase letters, numbers, and symbols. Once the options are set, clicking the “Generate Password” button immediately creates a random password that fits the selected criteria. The password appears in a neatly styled result box below the title, and with a single click on the clipboard icon, it can be copied directly to the user’s clipboard for easy use.

Behind the scenes, the JavaScript code powers this interactivity. It begins by referencing essential HTML elements, such as the password result box, the input for password length, the checkboxes for character types, and the generate and clipboard buttons:

const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const resultEl = document.getElementById("result");


The script defines the possible characters for each category — uppercase, lowercase, numbers, and symbols — as strings:

const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const NUMBER_CHARS = "0123456789";
const SYMBOL_CHARS = "!@#$%^&*()_+-=[]{}|;:',.<>/?";


The core of the application is the generatePassword function. It first checks which character types the user has selected and combines the corresponding strings into a single pool. If no options are selected, the function returns an empty string. Then it loops for the specified password length, picking random characters from the pool to build a secure, random password:

function generatePassword() {
    let chars = "";
    if (uppercaseEl.checked) chars += UPPERCASE_CHARS;
    if (lowercaseEl.checked) chars += LOWERCASE_CHARS;
    if (numbersEl.checked) chars += NUMBER_CHARS;
    if (symbolsEl.checked) chars += SYMBOL_CHARS;

    if (!chars) return "";

    let password = "";
    for (let i = 0; i < Number(lengthEl.value); i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}


When the Generate Password button is clicked, this function runs and updates the result box:

generateBtn.addEventListener("click", () => {
    const password = generatePassword();
    resultEl.textContent = password || "Select at least one option!";
});


Additionally, the clipboard button allows users to quickly copy their password. The script retrieves the current password and uses the browser’s clipboard API to copy it, followed by a confirmation alert:

clipboardBtn.addEventListener("click", () => {
    const password = resultEl.textContent;
    if (!password) return;
    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
    });
});


Overall, the project demonstrates how HTML, CSS, and JavaScript can work together to create a functional, interactive, and visually appealing front-end application. Users can generate secure passwords in real time, customize their character preferences, and easily copy them, all without leaving the page.




Frontend Password Generator

The Frontend Password Generator is a web application built entirely with HTML, CSS, and JavaScript. It allows users to quickly create strong, secure passwords tailored to their needs. The interface is clean and responsive, featuring a soft blue and white pastel theme that works beautifully on both desktop and mobile devices.

Users start by selecting their preferred password length and deciding which types of characters to include, such as uppercase letters, lowercase letters, numbers, and symbols. Once the options are set, clicking the “Generate Password” button immediately produces a random password that matches the selected criteria. The generated password appears in a neatly styled result box below the title, making it easy to see.

The application also includes a clipboard feature, allowing users to copy their password instantly with a single click. A brief confirmation alert lets the user know that the password has been successfully copied.


<img width="3420" height="2214" alt="image" src="https://github.com/user-attachments/assets/02365318-e6bc-42f0-8f4d-ff4e209bf26e" />







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









The clipboard button retrieves the current password and copies it to the user’s clipboard:






clipboardBtn.addEventListener("click", () => {
    const password = resultEl.textContent;
    if (!password) return;
    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
    });
});









Overall, this project uses HTML, CSS, and JavaScript  to create a functional, interactive, and visually appealing front-end application. Users can generate secure passwords in real time, customize their character preferences, and easily copy them, all without leaving the page.



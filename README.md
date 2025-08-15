Frontend Password Generator

The Frontend Password Generator is a web application built entirely with HTML, CSS, and JavaScript. It allows users to quickly create strong, secure passwords tailored to their needs. The interface is clean and responsive, featuring a soft blue and white pastel theme that works beautifully on both desktop and mobile devices.

Users start by selecting their preferred password length and deciding which types of characters to include, such as uppercase letters, lowercase letters, numbers, and symbols. Once the options are set, clicking the “Generate Password” button immediately produces a random password that matches the selected criteria. The generated password appears in a neatly styled result box below the title, making it easy to see.

Here is the link to the live application!

|
|
|
v
https://amryalafifi-stack.github.io/Frontend-Password-Generator/




IMAGE PREVIEW




<img width="1304" height="725" alt="Screenshot 2025-08-15 at 1 40 22 PM" src="https://github.com/user-attachments/assets/9902d5c9-66c1-48b8-bd42-b6c33aaf7f05" />









CODE SNIPPET

################################################################



    if (!chars) return "";

    let password = "";
    for (let i = 0; i < Number(lengthEl.value); i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}











Overall, this project uses HTML, CSS, and JavaScript  to create a functional, interactive, and visually appealing front-end application. Users can generate secure passwords in real time, customize their character preferences, and easily copy them, all without leaving the page.



document.getElementById("generate").addEventListener("click", () => {
    const minLength = parseInt(document.getElementById("minLength").value);
    const maxLength = parseInt(document.getElementById("maxLength").value);
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeSpecialChars = document.getElementById("specialChars").checked;

    if (minLength > maxLength || minLength < 1) {
        alert("Please enter valid length values.");
        return;
    }

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()";
    let allChars = lowercaseChars;

    if (includeUppercase) allChars += uppercaseChars;
    if (includeSpecialChars) allChars += specialChars;

    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    alert("Generated Password: " + password);
});
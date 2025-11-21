
const textInput = document.getElementById("textInput");
const displayText = document.getElementById("displayText");

const uppercaseBtn = document.getElementById("uppercaseBtn");
const lowercaseBtn = document.getElementById("lowercaseBtn");
const captialBtn = document.getElementById("captial");

const redBtn = document.getElementById("redtxt");
const blueBtn = document.getElementById("bluetxt");
const greenBtn = document.getElementById("greentxt");

const biggerFontBtn = document.getElementById("Biggerfont");
const smallerFontBtn = document.getElementById("Smallerfont");

const resetBtn = document.getElementById("Reset");

let originalFontSize = 18;
let currentFontSize = originalFontSize;


textInput.addEventListener("input", () => {
    displayText.textContent = textInput.value;
});


uppercaseBtn.addEventListener("click", () => {
    displayText.textContent = displayText.textContent.toUpperCase();
});


lowercaseBtn.addEventListener("click", () => {
    displayText.textContent = displayText.textContent.toLowerCase();
});


captialBtn.addEventListener("click", () => {
    let txt = displayText.textContent;
    displayText.textContent = txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
});


redBtn.addEventListener("click", () => {
    displayText.style.color = "red";
});
blueBtn.addEventListener("click", () => {
    displayText.style.color = "blue";
});
greenBtn.addEventListener("click", () => {
    displayText.style.color = "green";
});


biggerFontBtn.addEventListener("click", () => {
    currentFontSize += 6;
    displayText.style.fontSize = currentFontSize + "px";
});


smallerFontBtn.addEventListener("click", () => {
    if (currentFontSize > 10) {
        currentFontSize -= 6;
        displayText.style.fontSize = currentFontSize + "px";
    }
});


resetBtn.addEventListener("click", () => {
    displayText.textContent = textInput.value = "Hello World!";
    displayText.style.color = "black";
    currentFontSize = originalFontSize;
    displayText.style.fontSize = originalFontSize + "px";
});

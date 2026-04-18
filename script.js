const h1 = document.querySelector("h1");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const text = h1.innerText;
let interval;

h1.addEventListener("mouseenter", () => {

    interval = setInterval(() => {

        const chars = text.split("").map((char, idx) => {

            return characters.split("")[Math.floor(Math.random() * 53)];

        }).join("");

        h1.innerText = chars;

    }, 100);
});

h1.addEventListener("mouseleave", () => {
    clearInterval(interval);
    h1.innerText = text;
});




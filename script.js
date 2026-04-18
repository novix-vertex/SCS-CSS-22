const h1 = document.querySelector("h1");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const text = h1.innerText;
let interval;

let iteration = 0;

h1.addEventListener("mouseenter", () => {

    interval = setInterval(() => {

        const chars = text.split("").map((char, idx) => {
            if (idx < iteration)
                return char;
            return characters.split("")[Math.floor(Math.random() * characters.length)];

        }).join("");

        h1.innerText = chars;
        iteration += 0.2;
    }, 50);
});

h1.addEventListener("mouseleave", () => {
    clearInterval(interval);
});




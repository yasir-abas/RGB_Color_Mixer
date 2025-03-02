const redRange = document.getElementById("red");
const greenRange = document.getElementById("green");
const blueRange = document.getElementById("blue");
const box = document.querySelector(".color-box");

let red = redRange.value;
let green = greenRange.value;
let blue = blueRange.value;

redRange.addEventListener("input", (e) => {
    red = e.target.value;
    colorCode(red, green, blue)
})

greenRange.addEventListener("input", (e) => {
    green = e.target.value;
    colorCode(red, green, blue)
})

blueRange.addEventListener("input", (e) => {
    blue = e.target.value;
    colorCode(red, green, blue)
})

let rgbBox = document.querySelector(".rgb-code");

function colorCode(red, green, blue) {
    let rgbValue = `rgb(${red}, ${green}, ${blue})`
    box.style.background = rgbValue;
    rgbBox .textContent = rgbValue
}
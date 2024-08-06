const title = document.querySelector("div.hello:first-child h1");
console.log(title);

title.style.color = "blue";

function helloWorld() {
    console.log("hello world!");
}
function changeColorRed() {
    title.style.color = "red"
}
function changeColorBlue() {
    title.style.color = "blue"
}
title.addEventListener("click",helloWorld);

title.addEventListener("mouseenter",changeColorRed);
title.addEventListener("mouseleave",changeColorBlue);
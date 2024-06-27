const story = document.body.querySelector("story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click",() => {
    story.rextContent = "A fost o seara ploioasa...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click",() => {
    story.textContent = "";
});  

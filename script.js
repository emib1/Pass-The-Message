const button = document.querySelector("button");
const input = document.querySelector("input");
const message = document.querySelector(".message");


button.addEventListener("click", function handleClick(){
    inputValue = input.value;
    message.textContent = inputValue;
});
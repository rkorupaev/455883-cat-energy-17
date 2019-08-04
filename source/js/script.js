const exampleBlock = document.querySelector(".example__interactive")
const beforeButton = exampleBlock.querySelector(".example__before");
const afterButton = exampleBlock.querySelector(".example__after");

beforeButton.addEventListener("click", function() {
    exampleBlock.classList.replace("example__interactive--after", "example__interactive--before");
});

afterButton.addEventListener("click", function() {
    exampleBlock.classList.replace("example__interactive--before", "example__interactive--after");
});

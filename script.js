const buttonEl = document.querySelector("button");
const imgEl = document.querySelector("img");
const inputEl = document.querySelector("input");
const buttonLabelEl = document.querySelector("button > span");

buttonEl.addEventListener("click", handleClick);

function handleClick() {
    const status = buttonEl.getAttribute("data-status");

    if (status === "closed") {
        buttonEl.setAttribute("data-status", "opened");
        imgEl.setAttribute("src", "./open.svg");
        imgEl.setAttribute("alt", "Hide password");
        inputEl.setAttribute("type", "text");
        buttonLabelEl.textContent = "Hide password";
    } else {
        buttonEl.setAttribute("data-status", "closed");
        imgEl.setAttribute("src", "./close.svg");
        imgEl.setAttribute("alt", "Show password");
        inputEl.setAttribute("type", "password");
        buttonLabelEl.textContent = "Show password";
    }
}
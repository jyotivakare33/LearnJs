const inputValue = document.querySelector('.data');
const counter = document.querySelector('.result');
inputValue.oninput = event => {
    counter.innerHTML = inputValue.value.length;
}
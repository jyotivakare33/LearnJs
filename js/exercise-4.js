const inputValue = document.querySelector('.data');
const counter = document.querySelector('.result');
inputValue.addEventListener('input', () => {
    counter.innerHTML = inputValue.value.length;
});

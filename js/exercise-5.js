const inputValue = document.querySelector('.hex');
const result = document.querySelector('.result');
inputValue.oninput = event => {
    result.style.backgroundColor = inputValue.value;
}
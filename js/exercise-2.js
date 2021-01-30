const increment = document.querySelector('.increment');
const inputValue = document.querySelector('.data');
const decrement = document.querySelector('.decrement');
increment.addEventListener('click', event => {
        inputValue.innerHTML = inputValue.value++;
});
decrement.addEventListener('click', event => {
    inputValue.innerHTML = inputValue.value--;
});


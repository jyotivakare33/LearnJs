const encode = document.querySelector('.encode');
const result = document.querySelector('.result');
const inputValue = document.querySelector('.inputValue');
const decode = document.querySelector('.decode');
encode.addEventListener('click', event => {
        result.value = encodeURIComponent(inputValue.value);
        console.log(encodeURIComponent(inputValue.value));
});
decode.addEventListener('click', event => {
    result.value = decodeURIComponent(inputValue.value);

});


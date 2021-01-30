const button = document.querySelector('.btnCounter');
    button.addEventListener('click', event => {
        button.innerHTML = button.value++;
});


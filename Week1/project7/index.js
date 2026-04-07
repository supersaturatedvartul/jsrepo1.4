const num = document.getElementById('num');
const clicker = document.getElementById('clicker');
const toggler = document.getElementById('toggler');
const main = document.querySelector('.main');

let count = 0;

clicker.addEventListener('click',function() {
    count++;
    num.textContent = count;
});

toggler.addEventListener('click',function() {
    document.body.classList.toggle('mode');
    if (toggler.textContent === 'Dark Mode') {
        toggler.textContent = 'Light Mode';
    }
    else if (toggler.textContent === 'Light Mode') {
        toggler.textContent = 'Dark Mode';
    }
});


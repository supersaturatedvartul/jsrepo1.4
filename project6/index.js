const toggler = document.getElementById('Toggler'); 
const container = document.querySelector('.container');
const heading = document.getElementsByClassName('heading');

let value = true

toggler.onclick = function() {
    if (value) {
        document.body.style.background = 'black';
        container.style.border = "3px solid blue";
        value = !value
    }
    else {
        document.body.style.background = 'white';
        container.style.border = "3px solid black";
        value = !value
    }
}
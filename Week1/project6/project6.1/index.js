const toggler = document.getElementById('Toggle');
const container = document.querySelector('.container')

toggler.onclick = function() {
        document.body.classList.toggle('mystyle');
        container.classList.toggle('bordercolor');
}
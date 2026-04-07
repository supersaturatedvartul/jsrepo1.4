let input = document.getElementById('charac');
const count = document.getElementById('count');

let characount = 0;

input.addEventListener('input',function (event) {
    event.preventDefault();
    characount = input.value.length;
    count.textContent = characount;
})


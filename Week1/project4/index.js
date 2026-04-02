const number = document.getElementById('num')
const generator = document.getElementById('generate')

generator.onclick = function () {
    num = Math.floor(Math.random()*(100-20))+20
    number.textContent = num
}
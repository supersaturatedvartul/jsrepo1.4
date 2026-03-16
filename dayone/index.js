console.log("Hello World")

const number = document.getElementById('num')
const increase = document.getElementById('increaser')
const decrease = document.getElementById('decreaser')

let num = 0
increase.onclick = function() {
    num++
    number.textContent = num
}

decrease.onclick -  function() {
    num--
    number.textContent = num
}
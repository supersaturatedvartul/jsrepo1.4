console.log("Hello World1")

const number = document.getElementById('num')
const increase = document.getElementById('increaser')
const decrease = document.getElementById('decreaser')
const reset = document.getElementById('reseter')


let count = 0
increase.onclick = function() {
    count++
    number.textContent = count
    if (count>=10) {
    number.style.color = "red"
}
}

reset.onclick = function() {
    count = 0
    number.textContent = count
    number.style.color = "black"
}

decrease.onclick = function() {
    count--
    number.textContent = count
    if (count<10) {
    number.style.color = "black"
}
    if (count<0) {
        count = 0
        number.textContent = count
    }
}
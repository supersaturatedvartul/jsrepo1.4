const timer = document.getElementById('time')


function timerz() {
let currentTime = new Date()
let hour = currentTime.getHours()
let minute = currentTime.getMinutes()
let second = currentTime.getSeconds()
let time = currentTime.getTime()
timer.textContent = `${hour}:${minute}:${second}`
}


setInterval(timerz,1000);
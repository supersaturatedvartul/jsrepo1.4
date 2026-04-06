const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');

let scount = 0;
let mcount = 0;
let hcount = 0;

function timers() {
        scount++
        second.textContent = scount;
        if(scount > 59) {
            scount = 0;
            mcount+=1
            minute.textContent = mcount;
        }
        if(mcount > 59) {
            mcount = 0;
            scount = 0;
            hcount+=1;
            hour.textContent = hcount;
        }
    }
let interval;

startbtn.addEventListener('click',function() {
    if(!interval) {
        interval = setInterval(timers,1000);
    }
})

stopbtn.addEventListener('click',function() {
    clearInterval(interval);
    interval = null;
})



const counter = document.getElementById('counter');
const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');
const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');

let count = 0;
counter.textContent = count;
if(count<=0) {
    dec.disabled = true;
}


inc.addEventListener('click',function() {
    count++;
    counter.textContent = count;
    checker(count);
})

dec.addEventListener('click',function() {
    count--;
    counter.textContent = count;
    checker(count);
})

function checker (count) {
    if(count > 0){
    dec.disabled = false;
}
    else {
    dec.disabled = true;
}
}

let interval;

function countdown() {
    count--;
    counter.textContent = count;
    if (count <= 0) {
        clearInterval(interval);
        interval = null;
        inc.disabled = false;
    }
}

function toggledisable(status) {
    inc.disabled = status;
    dec.disabled = status;
}


startbtn.addEventListener('click',function () {
    if(!interval && count>0) {
    interval = setInterval(countdown,1000);
    console.log(count);
    toggledisable(true);
    }
})

stopbtn.addEventListener('click',function () {
    clearInterval(interval);
    interval = null;
    if (count >0) {
        toggledisable(false);
    }
    else if (count === 0 ) {
        dec.disabled = true;
    }
});

resetbtn.addEventListener('click',function() {
    count = 0;
    counter.textContent = count;
    clearInterval(interval);
    interval = null;
    if (count === 0) {
        dec.disabled = true;
        inc.disabled = false;
    }
})
const input = document.getElementById('inputsec');
const result = document.getElementById('result');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const div = document.getElementById('div');
const prod = document.getElementById('prod');



one.addEventListener('click',function () {
     input.value +=1;
});
two.addEventListener('click',function () {
     input.value +=2;
});
three.addEventListener('click',function () {
     input.value +=3;
});
four.addEventListener('click',function () {
     input.value +=4;
});
five.addEventListener('click',function () {
     input.value +=5;
});
six.addEventListener('click',function () {
     input.value += 6;
});
seven.addEventListener('click',function () {
     input.value += 7;
});
eight.addEventListener('click',function () {
     input.value += 8;
});
nine.addEventListener('click',function () {
     input.value += 9;
});
zero.addEventListener('click',function () {
     input.value += 0;
});

add.addEventListener('click',function () {
     input.value += '+';
});
sub.addEventListener('click',function () {
     input.value += '-';
});
prod.addEventListener('click',function () {
     input.value += '*';
});
div.addEventListener('click',function () {
     input.value += '/';
});

result.addEventListener('click',function() {
    try {
        input.value = eval(input.value);
    }
    catch(e) {
        input.value = 'Error';
    }
})
clear.addEventListener('click',function() {
    input.value = '';
})

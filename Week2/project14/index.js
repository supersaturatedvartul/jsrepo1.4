const celinput = document.getElementById('cel');
const fahinput = document.getElementById('fah');

celinput.addEventListener('input',function() {
    let temp = celinput.value;
    fahinput.value = (temp*1.8)+32;
});

fahinput.addEventListener('input',function() {
    let temp = fahinput.value;
    celinput.value = (temp-32)/1.8;
});
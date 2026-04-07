const namer = document.getElementById('name');
const picker =document.getElementById('pick');

const arr = ['Ramesh','Naina','Raman','Nagesh','Sukriti','Aman','Ojas','Mayur'];

let value = Math.floor(Math.random()*arr.length)

console.log(arr[value]);

picker.addEventListener('click',function() {
    let value = Math.floor(Math.random()*arr.length)
    namer.textContent = arr[value];
})
const arr = ['Be yourself; everyone else is already taken','So many books, so little time.',"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",'A room without books is like a body without a soul.','You only live once, but if you do it right, once is enough']
const changer = document.getElementById('change')
const quotes = document.getElementById('quote');

let min = 0;
let max = arr.length-1;


changer.addEventListener('click',function() {
    let num = Math.floor(Math.random()*(max-min+1))+min;
    quotes.textContent = arr[num];
});
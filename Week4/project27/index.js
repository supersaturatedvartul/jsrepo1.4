const list = ['Apple','Banana','Chikoo','Drumstick','Fig','Grapes','Jackfruit','Litchi','Mango','Orange'];
const results = document.querySelector('.results');
const finput = document.getElementById('finput');

for(let i=0;i<list.length;i++) {
    let p = document.createElement('p');
    p.textContent = list[i];
    results.appendChild(p);
}


finput.addEventListener('input',function () {
    results.innerHTML = '';
   let a = finput.value.trim().toLowerCase();
   const sres = [];
   for (let i=0;i<list.length;i++) {
    if (list[i].toLowerCase().includes(a)) {
        sres.push(list[i]);
    }
   }
   for (let index = 0; index < sres.length; index++) {
    let p = document.createElement('p');
    p.textContent = sres[index];
    results.appendChild(p);
   }
});

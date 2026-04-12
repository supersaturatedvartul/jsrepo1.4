const searchArray = ['C','C++','C#','Go','Haskell','Java','JavaScript','Python','Rust','SQL'];
const results = document.getElementById('results');
const input = document.getElementById('input');

input.addEventListener('input',function() {
    let givenin = input.value.trim().toLowerCase();
    if (givenin.length === 0) {
        results.innerHTML = '';
        input.classList.remove('searchprops');
        results.classList.remove('resultsprops');
    }
    else {
        checker(givenin);
    }
})

function checker(param) {
    results.classList.add('resultsprops');
    input.classList.add('searchprops');
    let found = false
    results.innerHTML = '';
    for (let i=0;i<searchArray.length;i++) {
        if(searchArray[i].toLowerCase().includes(param)) {
        found = true;
        let p = document.createElement('p');
        p.textContent = searchArray[i];
        results.appendChild(p);
        }
    }

    if (!found) {
        results.innerHTML = '';
        let p = document.createElement('p');
        p.textContent = 'No Such Results Found!';
        results.appendChild(p);
    }
}

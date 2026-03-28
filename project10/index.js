const dice = document.getElementById('dice');
const roller = document.getElementById('roll');

let value;

roller.addEventListener('click',function (e){
    e.preventDefault();
    value = Math.floor(Math.random()*6)+1
    if (value === 1) {
        dice.innerHTML = `<img src="images/one.png" width=200px>`;
    }
    else if (value === 2) {
        dice.innerHTML = `<img src="images/two.png" width=200px>`;
    }
    else if (value === 3) {
        dice.innerHTML = `<img src="images/three.png" width=200px>`;
    }
    else if (value === 4) {
        dice.innerHTML = `<img src="images/four.png" width=200px>`;
    }
    else if (value === 5) {
        dice.innerHTML = `<img src="images/five.png" width=200px>`;
    }
    else  {
        dice.innerHTML = `<img src="images/six.png" width=200px>`;
    }
});
let tasklist = [];

const input = document.getElementById('inputfield');
const submitbtn = document.getElementById('submitit');
const items = document.getElementById('items');

submitbtn.addEventListener('click',function () {
    if (input.value === '') {
        alert('Enter the valid Task!');
    }
    else {
        let task = input.value;
        tasklist.push(task);
        const li = document.createElement('li');
        const spancont = document.createElement('span');
        const deletebtn = document.createElement('button');
        const check = document.createElement('input');
        check.type = 'checkbox';
        deletebtn.textContent = 'Delete';
            spancont.textContent = task;
            items.appendChild(li);
            li.appendChild(spancont);
            li.appendChild(deletebtn);
            li.appendChild(check);
        deletebtn.addEventListener('click',function () {
            li.remove();
            const index =  tasklist.indexOf(task);
            if (index > -1) {
            tasklist.splice(index,1);
            }
        })

        check.addEventListener('change',function () {
            if (check.checked) {
                spancont.classList.add('striker');
            }
            else {
                spancont.classList.remove('striker');
            }
        })
    }
})
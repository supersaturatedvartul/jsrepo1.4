const questionfield = document.getElementById('question');
const op1 = document.getElementById('q1');
const op2 = document.getElementById('q2');
const op3 = document.getElementById('q3');
const op4 = document.getElementById('q4');
const l1 = document.getElementById('label1');
const l2 = document.getElementById('label2');
const l3 = document.getElementById('label3');
const l4 = document.getElementById('label4');
const prevbtn = document.getElementById('prev'); 
const nextbtn = document.getElementById('next'); 
const scoredisplay = document.getElementById('score');

const q1 = {question:'What is the programming language perfectly compatible for Django?',o1:'Javascript',o2:'C#',o3:'Python',o4:'Haskell'};
const q2 = {question:'Which language is hybrid language in terms of execution?',o1:'Java',o2:'Python',o3:'C',o4:'Haskell'};
const q3 = {question:'Which of the following database is NoSQL?',o1:'MySQL',o2:'MariaDB',o3:'DynamoDB',o4:'None of the above'};
const q4 = {question:'Which Language uses Laravel as backend framework?',o1:'Javascript',o2:'PHP',o3:'Java',o4:'HTML'};
const qArray = [q1,q2,q3,q4];
const correct = [];
let score = 0;
let index = 0;

function disabler() {
if(index === 0) {
    prevbtn.disabled = true;
}
else {
    prevbtn.disabled = false;
}

if(index === (qArray.length)) {
    nextbtn.disabled = true;
}
else {
    nextbtn.disabled = false;
}
}

disabler();

prevbtn.addEventListener('click',function() {
    if(index>0) {
        index--;
    }
    load(index);
    disabler();
})

nextbtn.addEventListener('click',function() {
    if(index === 0 && op3.checked === true) {
        score++;
    }
    if(index === 1 && op1.checked === true) {
        score++;
    }
    if(index === 2 && op3.checked === true) {
        score++;
    }
    if(index === 3 && op2.checked === true) {
        score++;
    }

    scoredisplay.textContent = score;

    if(index<=3) {
        index++;
        if (index<4) {
        load(index);
    }
    }
    console.log(index);
    disabler();
})


function load(index) {
    questionfield.textContent = qArray[index].question;
    l1.textContent = qArray[index].o1;
    l2.textContent = qArray[index].o2;
    l3.textContent = qArray[index].o3;
    l4.textContent = qArray[index].o4;
    op1.value = qArray[index].o1;
    op2.value = qArray[index].o2;
    op3.value = qArray[index].o3;
    op4.value = qArray[index].o4;
}

load(index);


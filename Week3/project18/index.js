const onecontent ='Welcome to Tab One, This is the First Tab consisting of content';
const twocontent =' This is Tab Two Content, So if this is visible to you, Congrats you click the button but you covered the other Tabs';
const threecontent =' So, now you know how it works';

const tabone = document.getElementById('tabone');
const tabtwo = document.getElementById('tabtwo');
const tabthree = document.getElementById('tabthree');

const one = document.getElementById('submitone');
const two = document.getElementById('submittwo');
const three = document.getElementById('submitthree');
const content = document.getElementById('content')

one.addEventListener('click',function() {
    content.textContent = onecontent;
    tabone.classList.add('highlight');
    tabtwo.classList.remove('highlight');
    tabthree.classList.remove('highlight');
    one.classList.add('buttonhighlight');
    two.classList.remove('buttonhighlight');
    three.classList.remove('buttonhighlight');
});

two.addEventListener('click',function() {
    content.textContent = twocontent;
    tabone.classList.remove('highlight');
    tabtwo.classList.add('highlight');
    tabthree.classList.remove('highlight');
    one.classList.remove('buttonhighlight');
    two.classList.add('buttonhighlight');
    three.classList.remove('buttonhighlight');
});

three.addEventListener('click',function() {
    content.textContent = threecontent;
    tabone.classList.remove('highlight');
    tabtwo.classList.remove('highlight');
    tabthree.classList.add('highlight');
    one.classList.remove('buttonhighlight');
    two.classList.remove('buttonhighlight');
    three.classList.add('buttonhighlight');
});
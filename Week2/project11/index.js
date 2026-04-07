const generator = document.getElementById('generate');
const password = document.getElementById('pass')
const copycat = document.getElementById('copy')


generator.addEventListener('click',function() {
    let pwd = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz1234567890@$#!&';
    for (let i = 0; i < 8; i++) {
    let chosen = Math.floor(Math.random()*characters.length);
    pwd = pwd+characters[chosen];
}
    password.textContent = pwd;

    if (password.textContent === '') {
        copycat.disabled = true;
    }
    else {
        copycat.disabled = false;
    copycat.addEventListener('click',function () {
        navigator.clipboard.writeText(password.textContent)
    
    })
}
})


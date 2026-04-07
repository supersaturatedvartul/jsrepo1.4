const form = document.getElementById('form');
const answer = document.getElementById('answer');

const emailpattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/;
const pwdpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/;

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!emailpattern.test(email)) {
        answer.textContent = "The Email is Invalid! Please Enter a Valid Email.";
        answer.classList.add('error');
    }
    else if (!pwdpattern.test(password)) {
        answer.textContent = "The Password is not Strong. Please choose the strong password";
        answer.classList.add('error')
    }
    else  {
        answer.textContent = "Form Submitted Successfully!"
        answer.classList.add('success')
    }
})
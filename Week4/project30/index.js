const form = document.getElementById('formfield');
const button = document.getElementById('submitbtn');

const emailpattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/;

function initer() {
emailjs.init({
    publicKey: 'public_key',
});
};

initer();


let lastSubmit = 0;

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const now = Date.now();
    console.log(now);
    if ((now - lastSubmit)<30000) {
        alert("Please wait before submitting again");
        return;
    }

    lastSubmit = now;
    const formdata = new FormData(form);
    
    const formName = formdata.get('name');
    const formEmail = formdata.get('email');
    const formMessage = formdata.get('usermessage');
    
    if(!emailpattern.test(formEmail)) {
        alert('Please enter a valid email');
        return;
    }
    else {
        button.disabled = true;
        button.textContent = 'Sending...';

    console.log('Form Submitted')

        emailjs.sendForm('service_id', 'template_id', this)
                    .then(() => {
                        console.log('SUCCESS!');
                        form.reset();
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
        
        setTimeout(function () {
        button.disabled = false;
        button.textContent = 'Submit';
    },30000);
    }

    console.log(formEmail,formName,formMessage);

    setTimeout(function () {
        button.disabled = false;
        button.textContent = 'Submit';
    },30000);
})
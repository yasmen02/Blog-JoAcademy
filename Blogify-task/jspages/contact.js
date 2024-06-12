
const searchform = document.querySelector('.search-form');
const links = document.querySelectorAll('.navbar a');
const form =document.getElementById('contactForm');

const submitbtn =document.getElementById('submit');
submitbtn.addEventListener('click', function(event) {


    let name = document.getElementById('Name');
    let email = document.getElementById('email');
    let message = document.getElementById('textarea');
        const validUser={
            name: name.value,
            email: email.value,
            message: message.value
        }
    if (validUser.name === '') {
        window.alert('Please enter your name.');
        return;
    }

    if (validUser.email === '') {
        window.alert('Please enter your email.');
        return;
    }

    if (!validateEmail(validUser.email)) {
        window.alert('Please enter a valid email address.');
        return;
    }

    if (validUser.message === '' || validUser.message === 'Message') {
        window.alert('Please enter your message.');
        return;
    }

    
    swal(`Thank You ${validUser.name}`, "we will contact you...", "success", {
        button: "ok",

    })
    .then(() => {
    let validUserArray = JSON.parse(localStorage.getItem('validUserArray')) || [];
    validUserArray.push(validUser);
    localStorage.setItem('validUserArray', JSON.stringify(validUserArray));
    name.value='';
    email.value='';
    message.value='';
});
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


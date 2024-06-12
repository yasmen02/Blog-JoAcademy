const menubtn = document.querySelector('#menu-bars');
const navbar = document.getElementById('navbar');

menubtn.onclick =()=>{
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
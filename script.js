const igwelink =document.querySelector('.igwe');
const loginlink =document.querySelector('.login-link');
const registerlink =document.querySelector('.register-link');

registerlink.addEventListener('click', ()=>{igwelink.classList.add('active');});

loginlink.addEventListener('click', ()=>{igwelink.classList.remove('active');});




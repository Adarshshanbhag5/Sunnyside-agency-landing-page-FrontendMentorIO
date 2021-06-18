const mobileNav = document.querySelector('.mobile-nav');
const burger = document.querySelector('.burger');
const contactBtn = document.querySelector('.btn');
console.log(contactBtn);


burger.addEventListener('click',()=>{
    mobileNav.classList.toggle('mobile-nav-active');
    burger.classList.toggle('toggle');
});
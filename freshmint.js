const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// Animation
gsap.registerPlugin(ScrollTrigger);


gsap.from('.animate-about', {
    scrollTrigger: '.animate-about',
    duration: 1,
    opacity: 1,
    x: -150,
    stagger: 0.12
} );

gsap.from('.animate-img', {
    scrollTrigger: '.animate-about',
    duration: 1.2,
    opacity: 0,
    x: -200,
    
} );

gsap.from('.animate-characters', {
    scrollTrigger: '.animate-characters',
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.1
} );

gsap.from('.animate-soundtrack', {
    scrollTrigger: '.animate-soundtrack',
    duration: 0.8,
    opacity: 0,
    x: -150,
    stagger: 0.25,
    delay: 0.1
} );
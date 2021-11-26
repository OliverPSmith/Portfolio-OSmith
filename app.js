
/****** hidden nav bar on scroll */
let newScrollPosition = 0;
let lastScrollPosition = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', e => {
    lastScrollPosition = window.scrollY;

    if (newScrollPosition < lastScrollPosition && lastScrollPosition > 50) {
        header.classList.remove('slide-down');
        header.classList.add('slide-up');
        header.style.transition = "all .5s";
    }   else if (newScrollPosition > lastScrollPosition) {
        header.classList.remove('slide-up');
        header.classList.add('slide-down');
        header.style.transition = "all .5s";
    }

    newScrollPosition = lastScrollPosition;
});

/****** repsonsive nav bar */

const menuToggle = document.querySelector('.menu-toggle');
const responsiveMenu = document.querySelector('.responsive-menu');
const navLeft = document.querySelector('.nav-responsive-left');
const navRight = document.querySelector('.nav-responsive-right');
const navRes = document.querySelector('.nav-responsive');

const navLinks = Array.from(document.querySelectorAll('.nav-link'));

const myName = document.querySelector('.my-name');

const b = document.body;

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navRight.classList.toggle('active');
    navLeft.classList.toggle('active');
    navRes.classList.toggle('active');

    myName.classList.toggle('active');


        if (menuToggle.classList.contains('active')) {
            myName.style.transition = "all 1s";
            b.style.overflow = "hidden";
            responsiveMenu.style.pointerEvents = "all";
        }   else {
            b.style.overflow = "auto";
            responsiveMenu.style.pointerEvents = "none";
        }

        if (menuToggle.classList.contains('active')) {
            setTimeout(() => {
                navRight.classList.add('active');
            }, 100)

        }
})

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navRight.classList.toggle('active');
        navLeft.classList.toggle('active');
        navRes.classList.toggle('active');

        myName.classList.toggle('active');


        b.style.overflow = "auto";
    })
}


/****** Toggle Dark Mode */

const checkbox = document.getElementById('checkbox');
const project = document.getElementsByClassName('project');
const root = document.documentElement;
let initialTheme = true;

checkbox.addEventListener('change', e => {

    if (initialTheme) {
        root.style.setProperty('--bg-color', "#0a192f");
        root.style.setProperty('--flair-color', 'rgb(254 196 5)');
        root.style.setProperty('--font-main-color', 'rgb(190, 187, 187)');
        initialTheme = false;  
    }   else {
        root.style.setProperty('--bg-color', "#8AAAE5");
        root.style.setProperty('--flair-color', '#C5FAD5');
        root.style.setProperty('--font-main-color', '#fff');
        initialTheme = true;
    }
})



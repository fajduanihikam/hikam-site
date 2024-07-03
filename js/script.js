const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

// Carousel navigation for Projects
const leftProjects = document.getElementById('left-projects');
const rightProjects = document.getElementById('right-projects');
const carouselProjects = document.querySelector('#projects .carousel');

leftProjects.addEventListener('click', () => {
    carouselProjects.scrollLeft -= carouselProjects.offsetWidth;
});

rightProjects.addEventListener('click', () => {
    carouselProjects.scrollLeft += carouselProjects.offsetWidth;
});

// Carousel navigation for Experiences
const leftExperiences = document.getElementById('left-experiences');
const rightExperiences = document.getElementById('right-experiences');
const carouselExperiences = document.querySelector('#experiences .carousel');

leftExperiences.addEventListener('click', () => {
    carouselExperiences.scrollLeft -= carouselExperiences.offsetWidth;
});

rightExperiences.addEventListener('click', () => {
    carouselExperiences.scrollLeft += carouselExperiences.offsetWidth;
});

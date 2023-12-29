const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const nav = document.querySelector('nav'); // Target the nav element
const contact = document.querySelector('#contact'); // Target the contact section
const about = document.querySelector('#about'); // Target the about section

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')) {
        // Light mode styles
        body.style.background = 'white';
        body.style.color = 'black';
        nav.style.background = 'white';
        nav.style.color = 'black';
        contact.style.background = 'white'; // Change the contact background
        contact.style.color = 'black'; // Change the contact text color
        about.style.background = 'white'; // Change the about background
        about.style.color = 'black'; // Change the about text color
        // Add transitions if needed
        body.style.transition = '2s';
        nav.style.transition = '2s'; 
        contact.style.transition = '2s';
        about.style.transition = '2s';
    } else {
        // Dark mode styles
        body.style.background = 'black';
        body.style.color = 'white';
        nav.style.background = 'black';
        nav.style.color = 'white';
        contact.style.background = 'black'; // Change the contact background
        contact.style.color = 'white'; // Change the contact text color
        about.style.background = 'black'; // Change the about background
        about.style.color = 'white'; // Change the about text color
        // Add transitions if needed
        body.style.transition = '2s';
        nav.style.transition = '2s';
        contact.style.transition = '2s';
        about.style.transition = '2s';
    }
});

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const contact = document.querySelector('#contact');
const about = document.querySelector('#about');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');

    if (this.classList.toggle('bi-brightness-high-fill')) {
        // Light mode styles
        body.style.background = 'white';
        body.style.color = 'black';
        nav.style.background = 'white';
        nav.style.color = 'black';
        contact.style.background = 'white';
        contact.style.color = 'black';
        about.style.background = 'white';
        about.style.color = 'black';
        // Add transitions if needed
        body.style.transition = '2s';
        nav.style.transition = '2s'; 
        contact.style.transition = '2s';
        about.style.transition = '2s';
    } else {
        // Dark mode styles
        body.style.background = '#303030'; // Svetlejšia čierna farba
        body.style.color = 'white';
        nav.style.background = '#303030';
        nav.style.color = 'white';
        contact.style.background = '#303030';
        contact.style.color = 'white';
        about.style.background = '#303030';
        about.style.color = 'white';
        // Add transitions if needed
        body.style.transition = '2s';
        nav.style.transition = '2s';
        contact.style.transition = '2s';
        about.style.transition = '2s';
    }
});

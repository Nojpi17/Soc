document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.sekcia');
    const line = document.querySelector('.linka');

    let observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-me');
                line.style.display = 'block';
            } else {
                entry.target.classList.remove('show-me');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
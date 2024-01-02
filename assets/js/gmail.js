document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('comment').value;

    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    fetch('/assets/php/gmail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert("Vaša správa bola odoslaná!");
    })
    .catch(error => {
        console.error('Chyba:', error);
    });
});

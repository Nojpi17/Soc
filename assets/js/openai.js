function handleFormSubmission(event) {
    event.preventDefault();

    // Získanie vybraných hodnôt žánru
    let genres = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
        genres.push(checkbox.value);
    });

    const apiKey = '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'; // Využite bezpečné uloženie API kľúča

    const requestData = {
        prompt: 'Odporučte knihu založenú na týchto žánroch (iba jednu knihu): Napiš to vo formate názov-diela autor ' + genres.join(', '),
        max_tokens: 50
    };

    fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('API Response:', data);
        // Aktualizácia DOM - príklad
        document.getElementById('book-recommendation').textContent = data.choices[0].text;
    })
    .catch(error => {
        console.error('Error:', error);
    });

    console.log('Form submitted!');
}

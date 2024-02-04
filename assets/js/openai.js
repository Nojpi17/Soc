
function handleFormSubmission(event) {
    event.preventDefault();

    // Získanie vybraných hodnôt žánru
    let genres = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
        genres.push(checkbox.value);
    });

    const apiKey = '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'; // Nahraďte 'YOUR_API_KEY' vaším API kľúčom

    const requestData = {
        model: "gpt-3.5-turbo-instruct", // Aktualizovaný názov modelu
        prompt: 'Recommend one book based on these genres: Write it in the format author title_of_work' + genres.join(', '),
        max_tokens: 50
    };

    fetch('https://api.openai.com/v1/completions', { // Aktualizovaná URL
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
        if (data.choices && data.choices.length > 0) {
            document.getElementById('book-recommendation').textContent = data.choices[0].text;
        } else {
            console.error('Nenájdené žiadne dáta v odpovedi API');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

    console.log('Form submitted!');
}

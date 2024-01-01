<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $genres = isset($_POST['genre']) ? $_POST['genre'] : [];
echo "Ako sa maš"

    // Pripojte sa ku OpenAI API a odporučte knihu
    $prompt = "Recommend a book based on these genres: " . implode(", ", $genres);

    // API kľúč (uložte bezpečne!)
    $apiKey = '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';

    $data = [
        'prompt' => $prompt,
        'max_tokens' => 100
    ];

    $ch = curl_init('https://api.openai.com/v1/engines/text-davinci-002/completions');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    curl_close($ch);

    $responseData = json_decode($response, true);
    $bookRecommendation = $responseData['choices'][0]['text'];

    echo "Odporúčaná kniha: " . $bookRecommendation;
}
?>
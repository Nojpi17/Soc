<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $recipient = "oksamuelneupauer@gmail.com"; // Zmeňte na váš email
    $headers = "From: " . $email;

    // Odoslanie emailu
    mail($recipient, $subject, $message, $headers);
}
?>
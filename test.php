<?php
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'your_email@example.com';
    $subject = 'New Message from ' . $name;
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = 'From: ' . $email . "\r\n" . 'Reply-To: ' . $email . "\r\n" . 'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        header('Location: success.html');
    } else {
        header('Location: error.html');
    }
} else {
    header('Location: error.html');
}
?>
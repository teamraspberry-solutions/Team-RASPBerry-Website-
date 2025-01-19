<?php
header('Content-Type: application/json');

try {
    if ($_SERVER["REQUEST_METHOD"] != "POST") {
        throw new Exception("Invalid request method");
    }

    $required_fields = ['companyName', 'contactPerson', 'email', 'phone', 'sponsorshipType', 'message'];
    foreach ($required_fields as $field) {
        if (empty($_POST[$field])) {
            throw new Exception("All fields are required");
        }
    }

    $to = "teamraspberry6@gmail.com";
    $subject = "New Robot Kyan Sponsorship Request";

    $emailContent = "
    New Sponsorship Request Details:

    Company Name: {$_POST['companyName']}
    Contact Person: {$_POST['contactPerson']}
    Email: {$_POST['email']}
    Phone: {$_POST['phone']}
    Sponsorship Type: {$_POST['sponsorshipType']}

    Message:
    {$_POST['message']}
    ";

    // Convert headers array to a string
    $headers = "From: {$_POST['email']}\r\n" .
               "Reply-To: {$_POST['email']}\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $emailContent, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        throw new Exception("Failed to send email");
    }

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?>

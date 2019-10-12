<?php
header("Access-Control-Allow-Headers: content-type");
$_POST = json_decode(file_get_contents('php://input'), true);

http_response_code(200);

$to  = "vasilievdmtr@gmail.com, " ; 

$subject = "Заголовок письма"; 

$message = ' <p>Текст письма</p> </br> <b>1-ая строчка </b> </br><i>2-ая строчка </i> </br>';

$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
$headers .= "From: От кого письмо <from@example.com>\r\n"; 
$headers .= "Reply-To: reply-to@example.com\r\n"; 

mail($to, $subject, $message, $headers); 


// $mail = new PHPMailer;

// $mail->isSMTP();                                    // Set mailer to use SMTP
// $mail->Host = 'mx1.hostinger.com';                  // Specify main and backup SMTP servers
// $mail->SMTPAuth = true;                             // Enable SMTP authentication
// $mail->Username = '<email>';                    // SMTP username
// $mail->Password = '<password>';                 // SMTP password
// $mail->SMTPSecure = 'true';                         // Enable TLS encryption, `ssl` also accepted
// $mail->Port = 587;                                  // TCP port to connect to

// $mail->setFrom('fakeuser@domain.com', $name);
// $mail->addReplyTo($email, $name);
// $mail->addAddress('vasilievdmtr@gmail.com');         // Add a recipient

// $mail->isHTML(true);  // Set email format to HTML

// $bodyContent = "<html>\n";
// $bodyContent .= "<head>\n";
// $bodyContent .= "<link href='https://fonts.googleapis.com/css?family=Tajawal' rel='stylesheet'>\n";
// $bodyContent .= "</head>\n";
// $bodyContent .= "<body style=\"font-family: 'Tajawal', sans-serif; font-size: 1em; font-style: normal; font-weight: 300; color: #4B4B4B;\">\n";
// $bodyContent .= "<br/> Hello Admin!<br/><br/> PFB feedback from '$name'.<br/><br/>\n";
// $bodyContent .= "Email ID: $email <br/> Message: $message <br/>\n";
// $bodyContent .= "</body>\n";
// $bodyContent .= "</html>\n";


// $mail->Subject = 'Feedback - IKwizU';
// $mail->Body = $bodyContent;

// if (!$mail->send()) {
//     echo json_encode(["sent" => false, "message" => "Email could not be sent. <br/>Mailer Error Details - " . $mail->ErrorInfo]);
// } else {
//     echo json_encode(array(
//         "sent" => true
//     ));
//     //echo "<br/><b>Your message has been sent! Thank you for reaching out to me, I will get back to you ASAP.</b>";
// }
// }
?>
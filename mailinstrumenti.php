<?php 

require_once('PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['icon_prefix'];
$familia = $_POST['last_name'];
$phone = $_POST['icon_telephone'];
$email = $_POST['email'];
$gorod = $_POST['dis'];
$textarea1 = $_POST['textarea1'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 's_hoz@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'iyJB%&%^%7T76R'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('s_hoz@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('selhoznikk@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на заказ инструментов';
$mail->Body    = 'Имя: ' .$name. '<br>Фамилия: ' .$familia. '<br>Телефон: ' .$phone. '<br>Почта: ' .$email. '<br>Город: ' .$gorod. '<br>Сообщение: '.$textarea1;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: instrumenti.html');
}
?>
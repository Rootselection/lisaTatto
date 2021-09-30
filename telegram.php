<?php

/* https://api.telegram.org/bot1996259262:AAEasjg3tsulobMFTPzArEhZYHzrgogp7ls/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$email = $_POST['user_email'];
$phone = $_POST['user_phone'];
$text = $_POST['user_text'];
$token = "1996259262:AAEasjg3tsulobMFTPzArEhZYHzrgogp7ls";
$chat_id = "-520494169";
$arr = array(
  'Текст: ' => $text,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
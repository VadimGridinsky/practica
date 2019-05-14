<?php
$recepient="goldencobra228@yandex.ru";
 $sitename = "AJAX практос";

 $login = trim($_POST["login"]);
 $Email = trim($_POST["Email"]);
 $text = trim($_POST["text"]);
 $message = "Логин: $login \nПочта: $Email \nТекст: $text";
 $pagetitle = "Новая заявка с сайта \"$sitename\"";
 mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
$servername = "localhost";
$database = "form";
$username = "root";
$password = "";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) {
      die('Connection failed: ' . mysqli_connect_error());
}
 
echo 'Connected successfully';
$login = $_POST['login'];
$Email = $_POST['Email'];
$text = $_POST['text'];

$sql = "INSERT INTO autoschool (login, Email, message) VALUES('$login', '$Email', '$text')";
mysqli_close($conn);

?>

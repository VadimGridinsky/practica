<?php
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
$message = $_POST['message'];

$sql = "INSERT INTO autoschool (login, Email, message) VALUES('$login', '$Email', '$message')";
if (mysqli_query($conn, $sql)) {
      exit('<meta http-equiv="refresh" content="0; url=http://practos/index.html" />');
}
mysqli_close($conn);

?>
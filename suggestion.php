<?php
$servername = "localhost";
$database = "u782289740_users";
$username = "u782289740_quiz";
$password = "0990rtun!Ty";

// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection

if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
echo("connection successful");
$full_name=$_POST['full_name'];
$email=$_POST['email'];
$contact=$_POST['phonenumber'];
$Message=$_POST['Message'];
 
$sql = "INSERT INTO suggestions (full_name, email, contact, Message) VALUES ('$full_name', '$email', '$contact','$Message')";
if (mysqli_query($conn, $sql)) {
      header('Location: index.html');

} else {
      header('Location: quiz/error.html');
      exit;
}
exit;
mysqli_close($conn);
?>
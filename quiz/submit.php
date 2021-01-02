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
 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      $score = $POST['score'];
      //here got score
      exit();
}

$name=$_POST['name'];
$phonenumber=$_POST['phonenumber'];
$district=$_POST['district'];
 
$sql = "INSERT INTO users (name, phonenumber, district) VALUES ('$name', '$phonenumber', '$district')";
if (mysqli_query($conn, $sql)) {
      header('Location: quiz.html');

} else {
      header('Location: error.html');
      exit;
}
exit;
mysqli_close($conn);
?>
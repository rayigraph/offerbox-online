<?php

class Quiz {
// Database credentials
private $host     = 'localhost';
private $username = 'u782289740_tester';
private $password = '0990rtun!Ty';
private $database = 'u782289740_phptester';
public  $db;

public function __construct(){
if(!isset($this->db)){
	// Connect to the database    
	try {
	$this->db = new mysqli($this->localhost, $this->u782289740_tester, $this->0990rtun!Ty, $this->u782289740_phptester);
	}catch (Exception $e){
	$error = $e->getMessage();
	echo $error;
	}
}
}
public function get_questions(){
 $select = "SELECT * FROM `questions` where is_enabled = '1' ";
 $result = mysqli_query($this->db ,$select);
 return mysqli_fetch_all($result);
}
public function quiz_options($qid) {
 $select = "SELECT * FROM `quiz_options` where qid = '$qid' AND is_enabled = '1'  ";
 $result = mysqli_query($this->db ,$select);
 return mysqli_fetch_all($result);
} 
public function answer($qid) {
 $select = "SELECT * FROM `quiz_answer` where qid = '$qid' ";
 $result = mysqli_query($this->db ,$select);
 return mysqli_fetch_all($result);
} 
}
?>
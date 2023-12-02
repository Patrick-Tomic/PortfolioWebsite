<head><script defer src="runtime.js"></script><script defer src="bundle.js"></script></head><?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$description = $_POST["description"];

$host = 'localhost';
$dbName = 'db5014848235.hosting-data.io';
$username = 'dbu4550005';
$password = 'CoNereNDFReP1';

var_dump($name, $email, $phone, $description);
/* 
$conn = mysqli_connect($host, $username, $password, $dbname);

if(mysqli_connect_errno()){
    die("Connection error: " . mysqli_connect_error());
}
echo "Connection Success"; */
<?php
// Set DB info
define('DB_HOST', 'localhost');
define('DB_USER', '');
define('DB_PASS', '');
define('DB_NAME', '');


// Procedural
try {
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
} catch (Exception $e) {
    echo $e->getMessage();
}

// OOP
// try {
//     $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
// } catch (Exception $e) {
//     echo $e->getMessage();
// }

<?php
/*
PDO uses a data source name (DSN) that contains the following information:
The database server host
The database name
The user
The password
and other parameters such as character sets, etc.
*/

$db_host = 'localhost';
$db_user = '';
$db_pass = '';
$db_name = '';

$dsn = "mysql:host=$db_host;dbname=$db_name;charset=UTF8";


try {
    // Create a new PDO connection
    $conn = new PDO($dsn, $db_user, $db_pass);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // set the PDO fetch mode to object
    $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

    /*************** Read from DB ***************/
    $get_q = "SELECT * FROM posts ORDER BY created_at DESC";
    $posts = $conn->query($get_q); // returns a PDOStatement

    // Get data as associative array, and override the PDO default fetch mode
    $posts->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

<?php 

    $addComment = $_POST['comment'];
    $addName = $_POST['name'];
    $addDate = $data=date("Y-m-d");

    //łączenie z serwerem
    require_once "connect.php";

    try{
        $polaczenie = new mysqli($host, $db_user, $db_password, $db_name);
            if($polaczenie->connect_errno!=0) {
                throw new Exception(mysqli_connect_errno());
            } else {
            $polaczenie->query("INSERT INTO komentarze VALUES (NULL, '$addComment', '$addDate', '$addName')");
            $polaczenie->close();
        } 
    } catch(Exception $e) {
        echo '<span style="color:red;">Błąd serwera</span>';
    };
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h4>Dziękujemy za przesłanie komentarza!</h4>
</body>
</html>

    


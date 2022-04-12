<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
    require_once "connect.php";

    $polaczenie = @new mysqli($host, $db_user, $db_password, $db_name);

    if($polaczenie->connect_errno!=0) {
        echo "Error: ".$polaczenie->connect_errno;
    } else {

        for($i=1; $i<20; $i++) {
        
            $sql = "SELECT * FROM komentarze WHERE id=$i";
            if($rezultat = @$polaczenie->query($sql)) {
                $ile_user = $rezultat->num_rows;

                if($ile_user>0) {
                    $wiersz = $rezultat->fetch_assoc();
                    $comment = $wiersz['komentarz'].' - '.$wiersz['imie'].' (' .$wiersz['data'].')';
                    echo "<li>$comment</li>";
                    $rezultat->close();
                }
            }
        }
        $polaczenie->close();
    }
?>
    
</body>
</html>
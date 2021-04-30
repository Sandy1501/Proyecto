<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
    <?php 
        #funcion de php para invocar documento .php
        require_once './app/config.php';
        require_once './app/dependencias.php';
    ?>
</head>
<body>
    <?php 
    
    if(isset($_GET['vista_solicitada'])){
        switch($_GET['vista_solicitada']){
            case 'login';
                require_once 'view/login.php';
                break;
            case 'registro';
                require_once 'view/registro.php';
                break;
        }
    }else{
        require_once 'view/login.php';
    }
    ?>
</body>
</html>
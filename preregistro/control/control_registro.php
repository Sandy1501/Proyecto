<?php

    require_once '../app/conexion.php';
    require_once '../app/php_mailer/PHPMailerAutoload.php';

    $conexion = conexion();

    $datos_recibidos = array(

        $conexion->real_escape_string(htmlentities($_POST['registro_nombre'])),
        $conexion->real_escape_string(htmlentities($_POST['registro_paterno'])),
        $conexion->real_escape_string(htmlentities($_POST['registro_materno'])),
        $conexion->real_escape_string(htmlentities($_POST['registro_fecha_nacimiento'])),
        $conexion->real_escape_string(htmlentities($_POST['registro_telefono'])),
        $conexion->real_escape_string(htmlentities($_POST['registro_carrera'])),
        $conexion->real_escape_string(htmlentities($_POST['registro_mail'])),
        $conexion->real_escape_string(htmlentities($_POST['registro_password'])),
    );

    //Datos para mail
    $mail_temp = $datos_recibidos[6];
    $pass_temp = $datos_recibidos[7];

    function enviar_mail($mail, $password){
        $correo = new PHPMailer();
        $correo->isSMTP();
        $correo->SMTPAuth = true;
        $correo->SMTPSecure = 'tls';
        $correo->Host = 'smtp.gmail.com';
        $correo->Port = '587';
        $correo->Username = 'tu correo de gmail va aqui';
        $correo->Password = 'tu passsword del correo va aqui ';

    

        //este segundo bloque se encaraga de la costruccion del mensaje como tal

        $correo->setFrom('Tu correo va otra vez', 'ITMA 2');
        $correo->addAddress($mail, 'Querido futuro estudiante...');
        $correo->Subject = 'Proceso de preregistro TecNM campus Milpa Alta II';


        $correo->Body = '

        <img src="http://itmilpaalta2.net/preregistro/img/logo.png" style="width: 300px; height: auto;">

        <h3>Sistema de preregistro del TecNM Campus Milpa Alta II</h3><br><br>

        <h5>Tus datos de acceso son:</h5>

        <br>

        <p>Usuario:  '.$mail.'</p>

        <p>Password:  '.$password.'</p>

        <br>

        <p>Ingresa con tu cuenta y sube tus documentos en formato <strong>PDF</strong> para seguir tu proceso</p>

        <p>Accede al sistema desde <a href="http://www.itmilpaalta2.net/preregistro">aquí

        <br>

        <p><h3>M&aacute;s Informaci&oacute;n</h3>

        <a href="http://www.itmilpaalta2.net/">Visitar

        <p>Mandanos un mail:  <strong>dda_milpaalta2@tecnm.mx</strong></p>

        <p>Tel Institucional:  <strong>58446824</strong></p>

        <p>What\'s App: <strong>5562128790</strong></p>

    ';

    $correo->isHTML(true);
    if($correo->send()){
        return '100';
    }else{
        return '404';
        //banderas 
    }
}

    function verifica_correo_existente($correo){
        $conexion = conexion();
        $query = 'SELECT * FROM usuario WHERE mail_usuario = ?';
        $query = $conexion->prerare($query);
        $query->bind_param('s', $correo);
        $query ->execute();//las flechas de php no soportan espacios (si le dejas espacios dara un errror)

        if(($query->get_result()->num_rows)>0){
            return "correo existente";
        }else{
            return "Sin problemas";
        }

        $conexion->close();
    }

    if(verifica_correo_existente($datos_recibidos[6] == 'Correo Existente')){
        $resultado_total = array(
            'resultado_db' => 'Correo ya existente'
        );
    }
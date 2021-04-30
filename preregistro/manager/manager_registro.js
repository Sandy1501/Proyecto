$(document).ready(function(){

    function valida_confirmacion_password(){

        if($('#registro_password').val() != $('#registro_password_confirmacion').val()){
    
            swal('Upps', 'Los password no coinciden, por favor vuelvelo a confirmar', 'warning');
            $('#registro_password_confirmacion').val("");
            return false;
        
        }else{
    
        registro_password = $('#registro_password').val();
        //a partir de aqui usen la nomeclatura para su ajax que mas le agreda
    
        //console.log("Validacion password OK\n\n Sending info to server...\n");
    
        //recoleccion de datos validados 
        recolector_de_informacion = "registro_nombre="+registro_nombre+
                                                "&registro_paterno="+registro_paterno+
                                                "&registro_materno="+registro_materno+
                                                "&registro_fecha_nacimiento="+registro_fecha_nacimiento+
                                                "&registro_telefono="+registro_telefono+
                                                "&registro_carrera="+registro_carrera+
                                                "&registro_mail="+registro_mail+
                                                "&registro_password="+registro_password
                                                ;
    
          // Construccion de la interfaz ajax
            $.ajax({
            type: 'POST',
            data: recolector_de_informacion,
            url: 'control/control_registro.php',
            success: function(resultado){
    
              console.log(resultado);
    
              a = JSON.parse(resultado);
    
              resultado_db = a['resultado_db'].toString();
    
              resultado_mail = a['resultado_mail'].toString();
    
              direccion_destinatario = a['mail'].toString();
    
              if(resultado_db  == "1"){
                
                if(resultado_mail == "100"){
    
                  mensaje_resultado_mail = "El mail se envió exitosamente";
    
                }else{
    
                  mensaje_resultado_mail = "Checking the email send process.... Upss.... This maybe Brick...";
    
                }
    
                swal({
                  icon: "success",
                  title: "Usuario creado con exito !!!",
                  html: true,
                  text:  '\n\n Al cerrar esta venta regresarás al LogIn (^.^)'+
                          '\n\n Tus datos de acceso son:\n\nMAIL y PASSWORD'+
                          '\n\n Se te envió un correo con los datos de tu registro'+
                          '\n\n Direccion del envío: '+direccion_destinatario,
                  closeOnClickOutside: false,
                  closeOnEsc: false,
                  value: true,
                  buttons: false,
                  timer: 3000             
                }).then((value) => {
                  window.location="login";
                });
    
                return false;
    
              }else if(resultado_db  == "correo_ya_existente"){
    
                swal('Upps', 'El correo:\n\n' +direccion_destinatario+
                        '\n\nYa existe en el sistema\n\n'+
                        'Si olvidaste tu password revisa tu cuenta de email, ya que al registrarte enviamos tus datos de acceso '+
                        'o escribenos a:\n\n contacto.preinscripcion.itma2@gmail.com',
                        'error');
                return false;
    
              }else{
    
                swal('Upps', 'Error al crear el nuevo usuario', 'error');
    
                return false;
    
              }
    
            }
          
          });
    
        }
    
    }

    function valida_confirmacion_email(){
    
        if($('#registro_mail').val() != $('#registro_mail_confirmacion').val()){
    
            swal('Upps', 'Los email no coinciden, por favor vuelvelo a confirmar', 'warning');
            $('#registro_mail_confirmacion').val("");
            return false;
        
        }else{
    
            registro_mail = $('#registro_mail').val();
        
            console.log("Validacion mail OK");
            valida_confirmacion_password();
    
        }
    
    }

    function valida_construccion_email(){
    
        //evaluacion de construccion de email
        cadena = $('#registro_mail').val();
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(cadena)){
    
        console.log("Construccion mail  OK");
        valida_confirmacion_email();
    
        }else{
    
        swal('Upps', 'Ingresa un email valido por favor \n\nEjemplo: candidato@miemail.com', 'warning');
        return false;
    
        }
    }

    function valida_seleccion_carrera(){ 
    
        carrera = $('#registro_carrera').val();    
        carrera = carrera.toUpperCase();
        if(carrera == "SIS" || carrera == "IND" || carrera == "GES"){
        registro_carrera = carrera;    
        valida_construccion_email();
    
        }
    
    }

    function valida_telefono(){
        telefono = $('#registro_telefono').val();
        telefono = parseInt(telefono);
        if(telefono < 0){
            swal('Alerta en el telefono','No existe numeros de telefono NEGATIVOS','warning');
            return false;
        }else{
            telefono = telefono.toString();
            if(telefono.length > 10){
                swal('Alerta en el telefono',
                    'No debes de tener mas de 10 digitos\n'+
                    'Recuerda que en la zona metropolitana los numeros inician con 55 o 56\n'+
                    'Ejemplo:5567878767',
                    'warning');
                return false;
            }else if (telefono.length < 10){
                swal('Alerta en el telefono',
                    'No debes de tener menos de 10 digitos\n'+
                    'Recuerda que en la zona metropolitana los numeros inician con 55 o 56\n'+
                    'Ejemplo:5567878767',
                    'warning');
                return false;
            }else{
                registro_telefono = $('#registro_telefono').val();
                valida_seleccion_carrera();
            }

        }
    }

    function valida_fecha_nacimiento(){
        if($('#registro_fecha_nacimiento').val() != ""){
            fecha_ingresada = $('#registro_fecha_nacimiento').val().split("_");
            edad = 2021 - fecha_ingresada[0];
            if(edad < 16){
                swal('Alerta en fecha de nacimento', 'La fecha no es valida: Eres muy joven', 'warning');
                return false;
            }else if (edad > 99){
                swal('Alerta en fecha de nacimento', 'La fecha no es valida: Eres muy viejo', 'warning');
                return false;
            }else{
                registro_fecha_nacimiento = $('#registro_fecha_nacimiento').val();
                valida_telefono();
            }
        }
    }

    function valida_construccion_alfabetica(){
        cadena = $('#registro_nombre').val();

        regexp1 = /[^\w\s]/gi;
        regexp2 = /[^A-Z\s]/gi;

        resultado1 = cadena.match(regexp1);
        resultado2 = cadena.match(regexp2);

        if(resultado1 !=null || resultado2 != null){
            if(resultado1 == null){
                resultado1 = "";
            }
            if(resultado2 == null){
                resultado2 = "";
            }

            swal('Aerta en el nombre...','Los siguientes caracteres no son validos:\n\n'+
            resultado2 + resultado1, 'warning');

            return false;
        }else{
            registro_nombre = $('#registro_nombre').val();
            registro_nombre = registro_nombre.trim();
            registro_nombre = registro_nombre.toUpperCase();
            
            cadena = $('#registro_paterno').val();
            resultado1 = cadena.match(regexp1);
            resultado2 = cadena.match(regexp2);

            if(resultado1 !=null || resultado2 != null){
                if(resultado1 == null){
                    resultado1 = "";
                }
                if(resultado2 == null){
                    resultado2 = "";
                }
    
                swal('Aerta en el apellido paterno...','Los siguientes caracteres no son validos:\n\n'+
                resultado2 + resultado1, 'warning');
    
                return false;
            }else{

                registro_paterno = $('#registro_paterno').val();
                registro_paterno = registro_nombre.trim();
                registro_paterno = registro_nombre.toUpperCase();
                    
                cadena = $('#registro_materno').val();
                resultado1 = cadena.match(regexp1);
                resultado2 = cadena.match(regexp2);

            if(resultado1 !=null || resultado2 != null){
                if(resultado1 == null){
                    resultado1 = "";
                }
                if(resultado2 == null){
                    resultado2 = "";
                }
    
                swal('Aerta en el apellido materno...','Los siguientes caracteres no son validos:\n\n'+
                resultado2 + resultado1, 'warning');
    
                return false;
            }else{
                registro_materno = $('#registro_paterno').val();
                registro_materno = registro_nombre.trim();
                registro_materno = registro_nombre.toUpperCase();
            
                //alert("Textos listos");
                valida_fecha_nacimiento();
            }
        }
    }
    }

    function valida_vacios(){
        if($('#registro_nombre').val() ==""){
            swal('Upps', 'Ingresa tu "nombre" por favor', 'warning');
            return false;

        }else if($('#registro_paterno').val()==""){
            swal('Upps', 'Ingresa tu "apellido paterno" por favor', 'warning');
            return false;

        }else if($('#registro_materno').val()==""){
            swal('Upps', 'Ingresa tu "apellido materno" por favor', 'warning');
            return false;

        }else if($('#registro_fecha_nacimiento').val()==""){
            swal('Upps', 'Ingresa tu "fecha de nacimiento" por favor', 'warning');
            return false;

        }else if($('#registro_telefono').val()==""){
            swal('Upps', 'Ingresa tu "telefono" por favor', 'warning');
            return false;

        }else if($('#registro_carrera').val()==""){
            swal('Upps', 'Selecciona tu carrera por favor', 'warning');
            return false;

        }else if($('#registro_mail').val()==""){
            swal('Upps', 'Ingresa tu "mail" por favor', 'warning');
            return false;

        }else if($('#registro_password').val()==""){
            swal('Upps', 'Ingresa tu "password" por favor', 'warning');
            return false;

        }else if($('#registro_password_confirmacion').val()==""){
            swal('Upps', 'Ingresa tu "confirmacion de password" por favor', 'warning');
            return false;
            
        }else{
            //swal('Yeah', 'Todos los campos tienen algun valor', 'success');
            valida_construccion_alfabetica();
        }
    }
    
    $('#btn_registro_usuario').click(function(){
        valida_vacios();
        
    });

});

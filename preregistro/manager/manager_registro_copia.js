$(document).ready(function(){

    function valida_telefono(){
        telefono = $('#registro_telefono').val();
        telefono = parseInt(telefono);
        if(telefono < 0){
            swal('Alerta en el telefono','No existe numeros de telefono NEGATIVOS','warning');
            return false;
        }else{
            telefono = telefono.toString();
            if(telefono.length > 10 || telefono.length < 10){
                swal('Alerta en el telefono',
                    'No debes de tener mas de 10 digitos y menos de 10 digitos\n'+
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

    function valida_campos_texto(cadena){
        expresion=/[^a-zA-Z]/g;
        valor=cadena.match(expresion);
        return valor;
    }

    function campos_texto(){
        captura=valida_campos_texto($('#registro_nombre').val());
        if(captura != null){
            swal('Alerta en el Nombre', 'Estos caracteres no son validos:\n\n'+captura, 'warning');
            return false;
        }
        captura=valida_campos_texto($('#registro_paterno').val());
        if(captura != null){
            swal('Alerta en el Apellido Paterno', 'Estos caracteres no son validos:\n\n'+captura, 'warning');
            return false;
        }
        captura=valida_campos_texto($('#registro_materno').val());
        if(captura != null){
            swal('Alerta en el Apellido Materno', 'Estos caracteres no son validos:\n\n'+captura, 'warning');
            return false;
        }
        valida_fecha_nacimiento();
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
            campos_texto();
        }
    }
    
    $('#btn_registro_usuario').click(function(){
        valida_vacios();
        
    });

});

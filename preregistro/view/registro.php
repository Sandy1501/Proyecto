<div class="container-fluid">
    <div class="row">
        <div class="col">
            <div class="display-4 text-center">
                Registro de aspirantes
            </div>
        </div>
    </div>
    <div class="row justify-content-around py-4">
        <div class="col-sm-5 mt-1">
            <div style="font-size:3rem ;" class="lead">
                Datos Personales
            </div>
            <hr>
            <form id="formulario_registro_a">
                <div class="form-group">
                    <label for="registro_nombre" class="lead">Nombre(s)</label>
                        <input type="text" 
                                class="form-control form-control-sm" 
                                id="registro_nombre" 
                                name="registro_nombre">
                </div>
                <div class="form-group">
                    <label for="registro_paterno" class="lead">Apellido Paterno</label>
                        <input type="text" 
                                class="form-control form-control-sm" 
                                id="registro_paterno"
                                name="registro_paterno">
                </div>
                <div class="form-group">
                    <label for="registro_materno" class="lead">Apellido Materno</label>
                        <input type="text"
                            class="form-control form-control-sm" 
                            id="registro_materno" 
                            name="registro_materno">
                </div>
                <div class="form-group">
                    <label for="registro_fecha_nacimiento" class="lead">Fecha de Ncimiento</label>
                        <input type="date" 
                            class="form-control form-control-sm" 
                            id="registro_fecha_nacimiento" 
                            name="registro_fecha_nacimiento">
                </div>
                <div class="form-group">
                    <label for="registro_telefono">Teléfono de Contacto(Preferente Movil)</label>
                    <input type="number"
                        class="form-control form-control-sm" 
                        id="registro_telefono" 
                        name="registro_telefono">
                </div>
                <div class="form-group">
                    <label for="registro_carrera" class="lead">Carrera de tu aeleccion</label>
                    <select name="registro_carrera" id="registro_carrera" class="form-control form-control-sm">
                        <option value="" class="lead">Seleccionar</option>
                        <option value="GES" class="lead">Gestion Empresarial</option>
                        <option value="IND" class="lead">Industrial</option>
                        <option value="SIS" class="lead">Sistemas</option>
                    </select>
                </div>
            </form>
        </div>
        <div class="col-sm-5 mt-1">
            <div style="font-size:3rem;" class="lead">
                Datos para iniciar sesion
            </div>
            <hr>
            <form id="formulario_registro">
                <div class="form-group">
                    <label for="registro_mail">Mail Personal</label>
                        <input type="email"
                                name="registro_mail" 
                                id="registro_mail" 
                                class="form-control form-control-sm">
                </div>
                <div class="form-group">
                    <label for="registro_password">Password</label>
                        <input type="password"
                                name="registro_password" 
                                id="registro_password" 
                                class="form-control form-control-sm">
                </div>
                <div class="form-group">
                    <label for="registro_password_confirmacion">Confirmar <strong>Password</strong></label>
                        <input type="password"
                                name="registro_password_confirmacion" 
                                id="registro_password_confirmacion" 
                                class="form-control form-control-sm">
                </div>
                <div class="form-group">
                    <span class="btn btn-warning btn-block" id="btn_registro_usuario">
                        <span class="lead">Registrarse</span>
                    </span>
                </div>
                <div class="form-group">
                    <a class="btn btn-info btn-block" href="login">
                        <span class="lead">Cancelar</span>
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>
<script src="manager/manager_registro.js"></script>


create table if not exists usuario(

    id_usuario int not null auto_incremet,
    nombre_usuario varchar(45) not null,
    paterno_usuario varchar(45) not null,
    materno_usuario varchar(45) not null,
    fecha_nacimiento_usuario date not null,
    telefono_usiuario varchar (45) not null,
    carrrera_usiuario varchar (45) not null,
    mail_usiuario varchar (45) not null,
    password_usiuario varchar (45) not null,
    subio_archivos int default 0,
    dda_autorizo int default 0,
    rf_autorizo int default 0,
    habilitar_examen int default 0,
    calificacion_usuario in default 0,
    rol int not null

)ENGINE=InnoDB default CHARSET=latin1;
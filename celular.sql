create database celular;
use celular;

DROP TABLE IF EXISTS `usuarios`;
/*Creando la tabla de usuario*/
create table `usuarios` (
	`id` INT NOT NULL AUTO_INCREMENT,
    `user` varchar (250),
    `password` varchar(100),
    primary key (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `citas`;
/*Creando la tabla de citas*/
create table `citas` (
	`id_cita` INT NOT NULL AUTO_INCREMENT,
    `nombreCompleto` varchar (250),
    `numeroTelefono` varchar(11),
    `correo` varchar(50),
    `dispositivo` varchar(30),
    `descripcion` varchar (800),
    `fecha` date,
    `hora` varchar(6),
    primary key (`id_cita`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `envios`;
/*Creando la tabla de citas*/
create table `envios` (
	`id_envio` INT NOT NULL AUTO_INCREMENT,
    `nombre` varchar (100),
    `apellido` varchar(100),
    `correo` varchar(50),
    `direccion` varchar(30),
    `estado` varchar (30),
    `ciudad` varchar(50),
    `CP` varchar(6),
    `metodoPago` varchar(20),
    primary key (`id_envio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Agregando datos a la tabla de usuarios*/
insert into `usuarios` (id, user, password) values (3, 'admin', '456');
select * from usuarios;
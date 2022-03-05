create database celular;
use celular;

DROP TABLE IF EXISTS `usuarios`;
/*Creando la tabla de usuario*/
create table `usuarios` (
	`id` INT NOT NULL AUTO_INCREMENT,
    `user` varchar (250) NOT NULL,
    `password` varchar(100) NOT NULL,
    primary key (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `citas`;
/*Creando la tabla de citas*/
create table `citas` (
	`id_cita` INT NOT NULL AUTO_INCREMENT,
    `nombreCompleto` varchar (250) NOT NULL,
    `numeroTelefono` varchar(11) NOT NULL,
    `correo` varchar(50) NOT NULL,
    `dispositivo` varchar(30) NOT NULL,
    `descripcion` varchar (800) NOT NULL,
    `fecha` varchar(11) NOT NULL,
    `hora` varchar(10) NOT NULL,
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

/*Convierte "user" en variable única para evitar registros duplicados en la tabla de usuarios*/
alter table usuarios add unique index(user);

select * from citas;
select * from envios;
select * from usuarios;
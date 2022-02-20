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

/*Agregando datos a la tabla de usuarios*/
insert into `usuarios` (id, user, password) values (3, 'admin', '456');
select * from usuarios;
use ejercicio;

select nombre,trabajo from empleados;
select nombre,edad from empleados;
select nombre,edad from empleados where trabajo like 'Programador%';
select * from empleados where edad > 30;
select apellido,mail from empleados where nombre = 'Juan';
select nombre from empleados where trabajo like 'Programador%' or trabajo = 'Desarrollador Web';
select id_emp,nombre,apellido,trabajo from empleados where id_emp between 15 and 20;
select * from empleados where trabajo like 'Programador%' and salario < 80000;
select * from empleados where trabajo like 'Programador%' and salario between 75000 and 90000;
select * from empleados where apellido like 'S%';
select * from empleados where nombre like '%l';
insert into empleados values (22,'Francisco','Perez','Programador',26,90000,'francisco@bignet.com');
delete from empleados where nombre = 'Hernan' and apellido = 'Rosso';
update empleados set salario = 90000 where nombre = 'Daniel' and apellido = 'Gutierrez';





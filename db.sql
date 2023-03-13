create database almacencrud

use almacencrud

CREATE TABLE productos (
    id int primary key autoincremental,
    name varchar(50),
    description varchar(50),
    price double,
    stock double
);


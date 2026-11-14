-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE cypherFlow;

USE cypherFlow;

CREATE TABLE usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
senha VARCHAR(45) NOT NULL
);

CREATE TABLE tentativa(
id INT PRIMARY KEY AUTO_INCREMENT,
acertos INT NOT NULL,
erros INT NOT NULL,
dataHora DATETIME DEFAULT CURRENT_TIMESTAMP(),
fk_usuario INT,
CONSTRAINT fk_usuario_tentativa
FOREIGN KEY (fk_usuario)
REFERENCES usuario(id)
);






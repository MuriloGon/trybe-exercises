-- Create a schema and a table into it
CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
-- Insert some data into Alunos Table from Escola schema/database;
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);

-- Q1 and Q2 - query the unique values based on Nome and Idade columns => 5 lines
SELECT DISTINCT Nome, Idade from Escola.Alunos;

-- Q3 and Q4 - query the unique values based on Nome column => 4 lines
SELECT DISTINCT Nome from Escola.Alunos;

-- Q5 and Q6 - query the unique values based on Idade column => 4 lines
SELECT DISTINCT Idade from Escola.Alunos;
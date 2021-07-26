-- 01 - A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
SELECT AVG(length) as 'Média de Duração' FROM sakila.film;

-- 02 - A duração mínima dos filmes como 'Duração Mínima';
SELECT MIN(length) as 'Duração Mínima' FROM sakila.film;

-- 03 - A duração máxima dos filmes como 'Duração Máxima';
SELECT MAX(length) as 'Duração Máxima' FROM sakila.film;

-- 04 - A soma de todas as durações como 'Tempo de Exibição Total';
SELECT SUM(length) as 'Tempo de Exibição Total' FROM sakila.film;

-- 05 - A quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT COUNT(*) as 'Filmes Registrados' FROM sakila.film;

-- Final answer
SELECT
	AVG(length) as 'Média de Duração',
    MIN(length) as 'Duração Mínima',
    MAX(length) as 'Duração Máxima',
    SUM(length) as 'Tempo de Exibição Total',
    COUNT(*) as 'Filmes Registrados'
FROM sakila.film;
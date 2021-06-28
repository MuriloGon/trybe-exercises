-- Q1 - concat title and release year from film table
SELECT CONCAT(title, ' - ', release_year) AS movie_release from sakila.film;

-- Q2 - concat title and rating columns with the Classificação alias
SELECT CONCAT(title, ' - ', rating) as 'Classificação' FROM sakila.film;

-- Q3 - concat adress and district from adress table as Endereço
SELECT CONCAT(address, ' ', district) AS 'Endereço' FROM sakila.address; 
-- Q01
SELECT * FROM sakila.film
WHERE title LIKE 'ace'; 

-- Q02
SELECT * FROM sakila.film
WHERE description like '%china'

-- Q03
SELECT * FROM sakila.film
WHERE (description like '%girl%') and (title like '%lord');

-- Q04
SELECT * FROM sakila.film
WHERE title like '____%gon%'
LIMIT 2;

-- Q05
SELECT * FROM sakila.film
WHERE title like '____%gon%'

-- Q06
SELECT * FROM sakila.film
WHERE title like '____%gon%'
AND description like '%documentary%';

-- Q07
SELECT * FROM sakila.film
WHERE description like '%monkey%' AND description like '%sumo%'

-- Q01
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name in ('julia', 'jules')

-- Q02
UPDATE sakila.category
SET name="Science Fiction"
WHERE name="Sci-Fi";

-- Q03
UPDATE sakila.film
SET replacement_cost=25.00
WHERE length > 100
AND rating IN ("G", "PG", "PG-13")
AND replacement_cost > 20;

-- Q04
UPDATE sakila.film
SET replacement_cost=10.00 
WHERE length >= 0 AND length < 100;
UPDATE sakila.film
SET replacement_cost=20.00 
WHERE length >= 100;
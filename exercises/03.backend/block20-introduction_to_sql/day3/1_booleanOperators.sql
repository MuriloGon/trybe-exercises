-- Q01
SELECT * FROM sakila.customer
WHERE email = "LEONARD.SCHOFIELD@sakilacustomer.org";

-- Q02
SELECT * FROM sakila.customer
WHERE (store_id = 2) AND (first_name <> 'KENNETH') AND (active = 0)
ORDER BY first_name;

-- Q03
SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE (rating='G' or rating='PG' or rating='PG-13')
AND replacement_cost < 18.0
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;

-- Q04
SELECT COUNT(*) as active_customers FROM sakila.customer
where (active <> 0);

-- Q05
SELECT * FROM sakila.customer
where (active = 1);

-- Q06
SELECT * FROM sakila.film
WHERE rating="NC-17"
ORDER BY rental_rate ASC, title ASC
LIMIT 50;
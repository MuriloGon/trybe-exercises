-- Q01
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name in ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy');

-- Q02
SELECT email FROM sakila.customer
WHERE address_id in (172, 173, 174, 175, 176)
ORDER BY email ASC;

-- Q03
SELECT COUNT(*) as payments FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

-- Q04
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;

-- Q05
SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title;
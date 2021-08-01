-- Q01
SELECT COUNT(*) as payments_count FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

-- Q02
SELECT COUNT(*) as payments_count FROM sakila.payment
WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';

-- Q03
SELECT 
	DATE(rental_date) as date, 
    YEAR(rental_date) as year, 
    MONTH(rental_date) as month,
    DAY(rental_date) as day,
    HOUR(rental_date) as hour,
    MINUTE(rental_date) as minute,
    SECOND(rental_date) as second FROM sakila.rental
WHERE rental_id = 10330;

-- Q04
SELECT * FROM sakila.payment
WHERE payment_date > '2005-07-28 22:00:00':
-- Q1 - Query all movies columns and rows from sakila database at table films;
SELECT * FROM sakila.films;

-- Q2 - Query the columns name, release_year and ratings from sakila.films;
SELECT title, release_year, rating FROM sakila.film;

-- Q3 - Query the unique name on sakila.actor;
SELECT DISTINCT last_name FROM sakila.actor;

-- Q4 - Query to have a grasp of the following queries
SELECT COUNT(*) FROM sakila.film;
SELECT COUNT(*) FROM sakila.customer;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
SELECT COUNT(*) FROM sakila.category; 
SELECT COUNT(*) FROM sakila.country; 

-- Q5 - Query all the languages at sakila.language different than English
SELECT * FROM sakila.language WHERE name != 'English';

-- Q6 - Query all the data from sakila.film;
SELECT * from sakila.film;

-- Q7 - In sakila.film, query the 20 firsts, with title, release_year, length, 
-- rating and replacement_cost. Order the results by largest length and then by
-- the least replacement cost;
SELECT title, release_year, length, rating, replacement_cost
FROM sakila.film
ORDER BY length DESC, replacement_cost ASC;
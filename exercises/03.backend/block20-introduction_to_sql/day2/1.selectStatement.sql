-- Exercises Part 1
-- Q1 - Query your name
SELECT 'Murilo Gonçalves' AS name, now() AS date;

-- Q2 and Q3 - Query with your name, lastname, city and age
SELECT 
'Sérgio Murilo' AS name,
'Gonçalves Silva' AS lasname,
'Belém' AS city,
27 AS age;

-- Q4 - 13 * 8 = ?
SELECT 13 * 8 AS result;

-- Q5 - Query with the current date
SELECT NOW() as 'Current Date';

-- Exercises Part 2 - Sakila database

-- USE sakila;
-- Q1 - Query all city table
SELECT * FROM sakila.city;

-- Q2 - Query name and last_name from customer table
SELECT first_name, last_name FROM sakila.customer;

-- Q3 - Query all columns from rental table
SELECT * FROM sakila.rental;

-- Q4 - Query title, description and release year from film table
SELECT title, description, release_year from sakila.film;
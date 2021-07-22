-- 01 - Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.

USE sakila;
DELIMITER oxe

CREATE PROCEDURE TopTenActorsBasedOnFilmsQuantity()
BEGIN
  SELECT actor_id, COUNT(actor_id) as films
  FROM film_actor
  GROUP BY actor_id;
END oxe

DELIMITER ;

-- 02 - Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.

USE sakila;
DELIMITER uai

CREATE PROCEDURE ShowCategory(IN category VARCHAR(50))
BEGIN
  SELECT
    fc.film_id,
    f.title,
    fc.category_id,
    c.name
  FROM film_category fc
  WHERE c.name = category
  INNER JOIN film f
    ON f.film_id = fc.film_id
  INNER JOIN category c
    ON c.category_id = fc.category_id;
END uai

DELIMITER ;

-- 03 - Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.

USE sakila;
DELIMITER xablau

CREATE PROCEDURE IsActive(IN email VARCHAR(50), OUT output tinyint(1))
BEGIN
  SELECT t.active INTO output
  FROM customer t
  WHERE LCASE(t.email) = LCASE(email) AND t.email IS NOT NULL;
END xablau;

DELIMITER ;
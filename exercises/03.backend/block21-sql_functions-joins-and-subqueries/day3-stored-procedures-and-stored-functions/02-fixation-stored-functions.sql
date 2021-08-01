-- 01 - Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
USE sakila;
DELIMITER $$
CREATE FUNCTION TotalPaymentsByCustomerId(id INT)
RETURNS NUMERIC READS SQL DATA
BEGIN
  DECLARE payment_quantity NUMERIC;
  SELECT COUNT(payment_id)
  FROM payment
  WHERE customer_id = id
  GROUP BY customer_id
  LIMIT 1
  INTO payment_quantity;
  RETURN payment_quantity;
END $$

DELIMITER ;

-- 02 - Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila;
DELIMITER $$

CREATE FUNCTION FilmTitleByInventoryId(id mediumint unsigned)
RETURNS varchar(128) READS SQL DATA
BEGIN
  DECLARE output varchar(128);

  SELECT f.title INTO output
  FROM inventory as i
  INNER JOIN film as f
    ON i.film_id = f.film_id
  WHERE i.inventory_id = id
  LIMIT 1;

  RETURN output;
END $$

DELIMITER ;


-- 03 - Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER $$
CREATE FUNCTION FilmsQuantityByCategory(category varchar(25))
RETURNS NUMERIC READS SQL DATA
BEGIN
  DECLARE output NUMERIC;
  SELECT COUNT(fl.category) INTO output
  FROM film_list as fl
  WHERE fl.category = category
  GROUP BY fl.category;
  RETURN output;
END $$
DELIMITER ;
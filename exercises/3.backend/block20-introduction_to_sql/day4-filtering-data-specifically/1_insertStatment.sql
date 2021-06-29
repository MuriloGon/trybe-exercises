-- Q01
INSERT INTO sakila.actor (first_name, last_name)
VALUES ('sérgio', 'murilo');

-- Q02
INSERT INTO sakila.actor (first_name, last_name)
VALUES ('name1', 'lastname1'), ('name2', 'lastname2').

-- Q03
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer 
    LIMIT 5;

-- Q04
INSERT INTO sakila.category (name)
  VALUES ('category1'),
  ('category2'),
  ('category3'),
  ('category3');

-- Q05
INSERT INTO sakila.store (manager_staff_id, address_id)
	VALUES(3, 1);
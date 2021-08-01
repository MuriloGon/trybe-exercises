-- 01 - Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT
  fa.actor_id,
  CONCAT(ac.first_name, ' ', ac.last_name) as full_name,
  fa.film_id,
  fm.title
FROM sakila.actor as ac
INNER JOIN sakila.film_actor as fa 
	ON fa.actor_id = ac.actor_id
INNER JOIN sakila.film as fm 
  ON fa.film_id = fm.film_id;

-- 02 - Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT 
  st.first_name as name,
  st.last_name as surname,
  ad.address
FROM sakila.staff as st
INNER JOIN sakila.address as ad
ON st.address_id = ad.address_id;

-- 03 - Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
SELECT
  c.customer_id,
  c.first_name,
  c.email,
  a.address_id,
  a.address,
  a.district
FROM sakila.customer as c
INNER JOIN sakila.address as a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100; 

-- 04 - Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .
SELECT
  c.first_name,
  c.email,
  c.address_id,
  a.address,
  a.district
FROM sakila.customer as c
INNER JOIN sakila.address as a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND LCASE(c.first_name) LIKE '%rene%';

-- 05 - Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .
SELECT
  c.address_id,
  a.address,
  COUNT(c.address_id) as customers
FROM sakila.customer as c
  INNER JOIN sakila.address as a
    ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.address_id
ORDER BY c.address_id DESC;

-- 06 - Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT
  s.first_name,
  s.last_name,
  AVG(p.amount) as avg_amount
FROM sakila.staff as s
	INNER JOIN sakila.payment as p
		ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

-- 07 - Monte uma query que exiba o id do ator, nome ,id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .
SELECT
  fa.actor_id,
  a.first_name,
  f.film_id,
  f.title
FROM sakila.film_actor as fa
INNER JOIN sakila.actor as a
  ON fa.actor_id = a.actor_id
INNER JOIN sakila.film as f
  ON fa.film_id = f.film_id;

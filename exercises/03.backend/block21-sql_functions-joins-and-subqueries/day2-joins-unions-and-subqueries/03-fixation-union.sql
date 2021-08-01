-- 01 - Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor , exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
SELECT 
	a.first_name,
    a.last_name,
    a.tb
FROM
	(SELECT 
		first_name, last_name, 'actor' as tb 
	FROM sakila.actor
	UNION ALL
	SELECT 
		first_name, last_name, 'staff' as tb
	FROM sakila.staff) as a
ORDER BY a.first_name ASC;

-- 02 - Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados únicos.
SELECT 
  first_name,
  'customer' as from_table
FROM sakila.customer
WHERE LCASE(first_name) LIKE '%tracy%'
UNION
SELECT
  first_name,
  'actor' as from_table
FROM sakila.actor
WHERE LCASE(first_name) LIKE '%je%';

-- 03 - Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer . Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética
SELECT
  *
FROM
  (  (SELECT 
      first_name,
      'actor' as from_table
    FROM sakila.actor
    ORDER BY actor_id DESC
    LIMIT 5)
  UNION
    (SELECT 
      first_name,
      'staff' as from_table
    FROM sakila.staff
    LIMIT 1)
  UNION
    (SELECT 
      first_name,
      'customer' as from_table
    FROM sakila.customer
    LIMIT 5 OFFSET 14)) as a
ORDER BY first_name ASC;

-- 04 - Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.
SELECT
  *
FROM
  (SELECT
    LCASE(first_name) as first_name,
    LCASE(last_name) as last_name,
    'actors' from_table
  FROM sakila.actor
  UNION
  SELECT
    LCASE(first_name) as first_name,
    LCASE(last_name) as last_name,
    'staff' from_table
  FROM sakila.staff) AS r
ORDER BY r.first_name ASC, r.last_name ASC
LIMIT 15 OFFSET 45
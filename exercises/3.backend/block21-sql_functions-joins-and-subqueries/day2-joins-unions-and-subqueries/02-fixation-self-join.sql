-- 01 - Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT 
  film_id,
  replacement_cost
FROM sakila.film t1, sakila.film t2
WHERE t1.replacement_cost = t2.replacement_cost;

-- 02 - Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT
  t1.title,
  t1.rental_duration
FROM sakila.film t1, sakila.film t2
WHERE
  (t1.length = t2.length) AND (t1.rental_duration BETWEEN 2 AND 4)
ORDER BY t1.rental_duration DESC;
-- 01 - a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
--     SELECT rating, AVG(length)
--     FROM sakila.film
--     GROUP BY rating;

SELECT rating, AVG(length) as average
FROM sakila.film
GROUP BY rating
HAVING average BETWEEN 115.0 AND 121.50
ORDER BY average DESC;

-- 02 - Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
--     SELECT rating, SUM(replacement_cost)
--     FROM sakila.film
--     GROUP by rating;

SELECT rating, SUM(replacement_cost) as sum
FROM sakila.film
GROUP by rating
HAVING sum > 3950.50
ORDER BY sum DESC;

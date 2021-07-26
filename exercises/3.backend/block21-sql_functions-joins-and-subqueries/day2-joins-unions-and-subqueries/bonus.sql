-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8.
SELECT
  m,
  bo
FROM Pixar.BoxOffice bo
INNER JOIN Pixar.Movies m
  ON m.id = bo.movie_id
WHERE bo.rating > 8;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT DISTINCT
  t1.title,
  t1.length_minutes,
  t1.director
FROM Pixar.Movies t1, Pixar.Movies t2
WHERE t1.director = t2.director;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
SELECT
  *
FROM Pixar.BoxOffice bo
WHERE
  (bo.domestic_sales + bo.international_sales) >= 5E6
  AND movie_id IN (
    SELECT id 
    FROM Pixar.Movies
    WHERE id = bo.movie_id AND length_minutes > 110
  );
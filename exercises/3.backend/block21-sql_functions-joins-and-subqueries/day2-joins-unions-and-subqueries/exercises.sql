-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( internationa_sales ) de cada filme.
SELECT
  mv.title,
  bo.domestic_sales,
  bo.international_sales
FROM Pixar.Movies mv
INNER JOIN Pixar.BoxOffice bo
ON mv.id = bo.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( internationa_sales ) do que vendas nacionais ( domestic_sales ).
SELECT
  mv.title,
  bo.domestic_sales,
  bo.international_sales
FROM Pixar.Movies mv
INNER JOIN Pixar.BoxOffice bo
ON mv.id = bo.movie_id
WHERE bo.international_sales > bo.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT
  mv.title,
  bo.rating
FROM Pixar.Movies mv
INNER JOIN Pixar.BoxOffice as bo
ON mv.id = bo.movie_id
ORDER BY bo.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
  *
FROM Pixar.Theater th
LEFT OUTER JOIN Pixar.Movies mv
  ON th.id = mv.theater_id
ORDER BY th.name ASC;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
  *
FROM Pixar.Theater th
RIGHT OUTER JOIN Pixar.Movies mv
  ON th.id = mv.theater_id
ORDER BY th.name ASC;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT title
FROM Pixar.Movies
WHERE id IN (
  SELECT
    movie_id
  FROM Pixar.BoxOffice
  WHERE movie_id = id AND rating > 7.5
)

SELECT mv.title
FROM Pixar.Movies mv
INNER JOIN Pixar.BoxOffice bo
ON mv.id = bo.movie_id
WHERE bo.rating > 7.5;

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
SELECT
  b.rating
FROM Pixar.BoxOffice b
WHERE b.movie_id IN (
  SELECT m.id
  FROM Pixar.Movies m
  WHERE m.year > 2009 
);

SELECT
  b.rating
FROM Pixar.BoxOffice b
INNER JOIN Pixar.Movies m
  ON m.id = b.movie_id
WHERE m.year > 2009;

-- Exercício 8: Utilizando o EXISTS, selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT
  t.name,
  t.location
FROM Pixar.Theater t
WHERE EXISTS (
  SELECT 1
  FROM Pixar.Movies m
  WHERE m.theater_id = t.id
)

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT
  t.name,
  t.location
FROM Pixar.Theater t
WHERE NOT EXISTS (
  SELECT 1
  FROM Pixar.Movies m
  WHERE m.theater_id = t.id
)

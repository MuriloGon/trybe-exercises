-- 01 - Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT
  b.Id,
  b.Title,
  'Não foi emprestado' status
FROM hotel.Books b
WHERE NOT EXISTS (
  SELECT 
    1
  FROM hotel.Books_Lent bl 
  WHERE b.Id = bl.book_id
);

-- 02 - Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT
  b.Id,
  b.Title,
  'Foi emprestado' status
FROM hotel.Books b
WHERE EXISTS (
  SELECT 
    1
  FROM hotel.Books_Lent bl 
  WHERE b.Id = bl.book_id
) AND LCASE(b.Title) LIKE '%lost%';

-- 03 - Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT
  c.Name,
  'ainda não comprou' status
FROM hotel.Customers c
WHERE NOT EXISTS (
  SELECT
    1
  FROM hotel.CarSales cs
  WHERE cs.CustomerID = c.CustomerId
);

-- 04 - Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT
  cus.name,
  car.name
FROM
  hotel.Cars AS car
CROSS JOIN
  hotel.Customers AS cus
WHERE EXISTS
  (
    SELECT *
    FROM hotel.CarSales
    WHERE CustomerID = cus.CustomerId AND carID = car.ID
  ); 

-- not optimal
-- SELECT
--   c.Name customer_name,
--   crs.Name car_name
-- FROM hotel.Customers c
-- INNER JOIN hotel.CarSales cs
--   ON cs.CustomerID = c.CustomerId
-- INNER JOIN hotel.Cars crs
--   ON crs.Id = cs.CarID
-- WHERE EXISTS (
--   SELECT
--     1
--   FROM hotel.CarSales CarSales
--   WHERE CarSales.CustomerID = c.CustomerId
-- );
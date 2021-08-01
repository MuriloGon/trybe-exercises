-- Q01
SELECT * FROM PecasFornecedores.Pecas
WHERE name like 'gr%';

-- Q02
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE code = 2;

-- Q03
SELECT code, peca, preco, fornecedor FROM PecasFornecedores.Fornecimentos
WHERE fornecedor like '%n%';

-- Q04
SELECT * FROM PecasFornecedores.Fornecedores
WHERE name like '%LTDA%'
ORDER BY name DESC;

-- Q05
SELECT * FROM PecasFornecedores.Fornecedores
WHERE code like '%F%';

-- Q06
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco BETWEEN 15.00 AND 40.00
ORDER BY Preco DESC;

-- Q07
SELECT * FROM PecasFornecedores.Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';
-- Q01
SELECT * FROM Scientists.Scientists
WHERE Name like '%e%';

-- Q02
SELECT * FROM Scientists.Projects
WHERE Code like '%A%'
ORDER BY Code, Name;

-- Q03
SELECT Code, Name FROM Scientists.Projects
WHERE Code like '%3%'
ORDER BY Code ASC;

-- Q04
SELECT * FROM Scientists.Projects
WHERE Code in ('AeH3', 'Ast3', 'Che1');

-- Q05
SELECT * FROM Scientists.Projects
WHERE Hours > 500;

-- Q06
SELECT * FROM Scientists.Projects
WHERE Hours BETWEEN 250 AND 800;

-- Q07
SELECT Name, Code FROM Scientists.Projects
WHERE Name not like 'A%';

-- Q08
SELECT Name FROM Scientists.Projects
WHERE Code like '%h%';

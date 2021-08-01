-- Exercise 01
SELECT "This is SQL Exercise, Practice and Solution" as name;

-- Exercise 02
SELECT 1, 2, 3;

-- Exercise 03
SELECT 10 + 5 as result;

-- Exercise 04
SELECT (10 * 5 + 5) as result;

-- Exercise 05
SELECT * FROM Scientists.Scientists;

-- Exercise 06
SELECT Name AS "Nome de projeto", Hours as "Horas de projeto" 
FROM Scientists.Projects;

-- Execise 07
SELECT Name FROM Scientists.Scientists
ORDER BY Name;

-- Exercise 08
SELECT Name FROM Scientists.Projects
ORDER BY Name DESC;

-- Exercise 09
SELECT CONCAT("O projeto ", Name, " precisou de ", Hours, " horas para ser concluído.") AS MSG
FROM Scientists.Projects;

-- Exercise 10
SELECT Name, Hours FROM Scientists.Projects
ORDER BY Hours DESC, Name
LIMIT 3;

-- Exercise 11
SELECT DISTINCT Project FROM Scientists.AssignedTo;

-- Exercise 12
SELECT Name, Hours FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 1;

-- Exercise 13
SELECT Name, Hours FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 1 OFFSET 1;

--Exercise 14
SELECT Name, Hours FROM Scientists.Projects
ORDER BY Hours
LIMIT 5;

-- Exercise 15
SELECT CONCAT("Existem ", COUNT(Name), " cientistas na tabela Scientists") as result
FROM Scientists.Scientists;
-- 01 - Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(SALARY) FROM hr.employees;

-- 02 - Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;

-- 03 - Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT t1.JOB_ID, AVG(t1.SALARY) as avg_salary, t2.JOB_TITLE 
FROM hr.employees as t1
INNER JOIN hr.jobs as t2
ON t1.JOB_ID = t2.JOB_ID
GROUP BY t1.JOB_ID
ORDER BY avg_salary DESC;

-- 04 - Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(SALARY) as total_to_pay FROM hr.employees;

-- 05 - Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT
  ROUND(MAX(SALARY), 2) as max_sallary,
  ROUND(MIN(SALARY), 2) as min_sallary,
  ROUND(SUM(SALARY), 2) as sum_sallary,
  ROUND(AVG(SALARY), 2) as avg_sallary
FROM hr.employees;

-- 06 - Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT COUNT(*) as programer_people FROM hr.employees WHERE JOB_ID = 'IT_PROG';

-- 07 - Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT tb2.JOB_TITLE as job, SUM(tb1.SALARY) as total_to_pay FROM hr.employees as tb1
INNER JOIN hr.jobs as tb2
ON tb1.JOB_ID = tb2.JOB_ID
GROUP BY tb1.JOB_ID;

-- 08 - Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT tb2.JOB_TITLE as job, SUM(tb1.SALARY) as total_to_pay FROM hr.employees as tb1
INNER JOIN hr.jobs as tb2
ON tb1.JOB_ID = tb2.JOB_ID
GROUP BY tb1.JOB_ID
HAVING tb2.JOB_TITLE = 'Programmer';

-- 09 - Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
SELECT tb2.JOB_TITLE as job, SUM(tb1.SALARY) as total_to_pay FROM hr.employees as tb1
INNER JOIN hr.jobs as tb2
ON tb1.JOB_ID = tb2.JOB_ID
GROUP BY tb1.JOB_ID
HAVING tb2.JOB_TITLE <> 'Programmer'
ORDER BY total_to_pay DESC;

-- 10 - Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.
SELECT 
	tb2.DEPARTMENT_NAME, 
    AVG(tb1.SALARY) as avg_salary,
    COUNT(*) as employees_qty
FROM hr.employees as tb1
INNER JOIN hr.departments as tb2
ON tb1.DEPARTMENT_ID = tb2.DEPARTMENT_ID
GROUP BY tb1.DEPARTMENT_ID
HAVING employees_qty > 10;

-- 11 - Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777
UPDATE hr.employees 
	SET PHONE_NUMBER=REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '515%';

-- 12 - Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM hr.employees
WHERE LENGTH(FIRST_NAME) >= 8;

-- 13 - Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT
	EMPLOYEE_ID as id,
    FIRST_NAME as first_name,
    YEAR(HIRE_DATE) as hire_year
FROM hr.employees;

-- 14 - Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT 
	EMPLOYEE_ID as id,
    FIRST_NAME as first_name,
    DAY(HIRE_DATE) as hire_day
FROM hr.employees;

-- 15 - Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT 
	EMPLOYEE_ID as id,
    FIRST_NAME as first_name,
    MONTH(HIRE_DATE) as hire_month
FROM hr.employees;

-- 16 - Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT 
	UCASE(FIRST_NAME) as first_name,
	UCASE(LAST_NAME) as last_name 
FROM hr.employees;

-- 17 - Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT 
    LAST_NAME,
    HIRE_DATE
FROM hr.employees
WHERE YEAR(HIRE_DATE) = 1987 AND MONTH(HIRE_DATE) = 7;

-- 18 - Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
SELECT
	FIRST_NAME,
    LAST_NAME,
    datediff(NOW(), HIRE_DATE) as work_since_in_days
FROM hr.employees;
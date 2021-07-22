-- 01 - Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT ABS(DATEDIFF(DATE(NOW()), '2030-01-20')) as dias;

-- 02 - Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
SELECT ABS(HOUR('10:25:45') - HOUR('11:00:00')) as horas;
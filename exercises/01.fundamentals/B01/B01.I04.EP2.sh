#!/bin/bash

#01-Navegue até a pasta unix_tests ;
#02-Rode o comando ls -l e veja quais as permissões dos arquivos;
#03-Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l ;
#Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

#04-Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l ;
#Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

#05-Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt .
#Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

step(){(local STP=$1; read -p "Step $STP - Press enter to continue";)}

ROOT_DIR=unix_tests
FILES=(bunch_of_things.txt)


step 1
rmdir $ROOT_DIR
mkdir $ROOT_DIR
cd $ROOT_DIR

step 1.5
for FILE in ${FILES[@]}; do (touch $FILE); done;

step 2
chmod 000 ${FILES[0]}
ls -logs
chmod a=rw ${FILES[0]}
#OR chmod -a 666 ${FILES[0]}
ls -logs

step 3
chmod 000 ${FILES[0]}
ls -logs
chmod a=rw ${FILES[0]}
#OR chmod -a 666 ${FILES[0]}
ls -logs

step 4
chmod 000 ${FILES[0]}
ls -logs
chmod a=r ${FILES[0]}
#OR chmod -a 444 ${FILES[0]}
ls -logs

step 5
chmod 000 ${FILES[0]}
ls -logs
chmod u=rw,g=r,o=r ${FILES[0]}
#OR chmod -a 666 ${FILES[0]}
ls -logs


step Finish
rm -r *
cd ..
rmdir $ROOT_DIR

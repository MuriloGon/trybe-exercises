#!/bin/bash

#01-Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado unix_tests e navegue até ele.
#02-Crie um arquivo de texto com o nome trybe.txt .
#03-Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .
#04-Renomeie o arquivo trybe.txt .
#05-Dentro de unix_tests , crie um novo diretório chamado backup .
#06-Mova o arquivo trybe_backup.txt para o diretório backup .
#07-Dentro de unix_tests , crie um novo diretório chamado backup2 .
#08-Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .
#09-Apague a pasta backup.
#10-Renomeie a pasta backup2 para backup .
#11-Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
#12-Apague o diretório backup.
#13-Limpe o terminal.
#13.5-Para os exercícios, 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional, um arquivo de texto com o conteúdo abaixo, chamado skills.txt; -> 'Internet\nUnix\nBash\nHTML\nCSS\JavaScript\nReact\nSQL'
#14-Mostre na tela as 5 primeiras skills do arquivo skills.txt .
#15-Mostre na tela as 4 últimas skills do arquivo skills.txt .
#16-Apague todos os arquivos que terminem em .txt.

step(){(local STP=$1; read -p "Step $STP - Press enter to continue";)}

ROOT_DIR=unix_tests
SUB1_DIR=backup
SUB2_DIR=backup2
CUSTOM_FILE=trybe.txt
RENAMED_FILE=trybe2.txt
BACKUP_FILE=trybe_backup.txt
SKILLS_FILE=skills.txt
SKILLS_DATASET=("Internet" "Unix" "Bash" "HTML" "CSS" "JavaScript" "React" "SQL")

rm -rf $ROOT_DIR

step 1
mkdir $ROOT_DIR
cd $ROOT_DIR

step 2
touch $CUSTOM_FILE

step 3
cp $CUSTOM_FILE $BACKUP_FILE

step 4
mv $CUSTOM_FILE $RENAMED_FILE

step 5
mkdir $SUB1_DIR

step 6
mv $BACKUP_FILE $SUB1_DIR

step 7
mkdir $SUB2_DIR

step 8
mv $SUB1_DIR/$BACKUP_FILE $SUB2_DIR

step 9
rmdir $SUB1_DIR

step 10
mv $SUB2_DIR $SUB1_DIR

step 11
pwd
ls -lags

step 12
rm -rf $SUB1_DIR

step 13
clear

step 13.5
for skll in ${SKILLS_DATASET[@]}; do
echo $skll >> $SKILLS_FILE 
done

step 14
head -5 $SKILLS_FILE

step 15
tail -4 $SKILLS_FILE

step 16
ls -lags
rm -rf *.txt
ls -lags

step "Finish"
cd ..
rmdir $ROOT_DIR

#!/bin/bash

#01-Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
#curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
#02-Mostre todo o conteúdo do arquivo countries.txt na tela.
#03-Mostre o conteúdo de countries.txt , página por página, até encontra a Zambia .
#04-Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia .
#05-Busque por Brazil no countries.txt .
#06-Busque novamente por brazil , mas agora utilizando o lower case .
#06.5-Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases a sua escolha. Não precisa criar o arquivo pelo terminal.
#07-Busque pelas frases que não contenham a palavra fox .
#08-Conte o número de palavras do arquivo phrases.txt .
#09-Conte o número de linhas do arquivo phrases.txt .
#10-Crie os arquivos empty.tbt e empty.pdf .
#11-Liste todos os arquivos do diretório unix_tests .
#12-Liste todos os arquivos que terminem com txt .
#13-Liste todos os arquivos que terminem com tbt ou txt .
#14-Acesse o manual do comando ls .

step(){(local STP=$1; read -p "Step $STP - Press enter to continue";)}

ROOT_DIR=unix_tests
DATA_URL="https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
COUNTRIES_FILE=countries.txt
EMPTY_FILES=(empty.tbt empty.pdf)

rm -rf $ROOT_DIR

step 1
mkdir $ROOT_DIR
cd $ROOT_DIR

step 2
curl -o $COUNTRIES_FILE $DATA_URL

step 3
less $COUNTRIES_FILE

step 4
less $COUNTRIES_FILE
#type /Zambia

step 5
less $COUNTRIES_FILE
#type /Brazil

step 6
cat $COUNTRIES_FILE | grep -i "brazil"

step 7
cat $COUNTRIES_FILE | grep -v "fox"

step 8
cat $COUNTRIES_FILE | wc -w

step 9
cat $COUNTRIES_FILE | wc -l

step 10
for emp in ${EMPTY_FILES[@]}; do (touch $emp;); done;

step 11
ls -logs

step 12
ls -logs | grep -iE "*.txt"

step 13
ls -logs | grep -iE "*.tbt|*.txt"

step 14
man ls



step "Finish"
rm -rf *
cd ..
rmdir $ROOT_DIR











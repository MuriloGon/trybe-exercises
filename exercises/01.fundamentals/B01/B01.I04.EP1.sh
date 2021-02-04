#!/bin/bash

#01-Navegue até a pasta unix_tests ;
#02-Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha.
#03-Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 
#04-Conte quantas linhas tem o arquivo skills2.txt .
#05-Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.
#06-Crie um novo arquivo chamado phrases2.txt pelo o terminal e adicione algumas frases de suas escolha.
#07-Conte o número de linhas que contêm as letras br .
#08-Conte o número de linhas que não contêm as letras br .
#09-Adicione dois nomes de países ao final do arquivo phrases2.txt .
#10-Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
#11-Ordene o arquivo bunch_of_things.txt .

step(){(local STP=$1; read -p "Step $STP - Press enter to continue";)}

ROOT_DIR=unix_tests
SKILLS2_FILE=skills2.txt
TOPSKILLS_FILE=top_skills.txt
PHRASES2_FILE=phrases2.txt
COUNTRIES_FILE=countries.txt
BOT_FILE=bunch_of_text.txt

SKILLS2_DATASET=("Internet" "Unix" "Bash")

CUSTOM_SKILLS_DATASET=("C++" "C#" "Python" "BackEnd" "FrontEnd")

PHRASES_DATASET=('A César o que é de César, a Deus o que é de Deus' 'Água mole, pedra dura, tanto bate até que fura' 'A pressa é a inimiga da perfeição' 'À noite todos os gatos são pardos' 'Antes só do que mal acompanhado')

COUNTRIES1_DATASET=("Brazil" "United States")

COUNTRIES2_DATASET=("França" "Alemanha")


step 1
rmdir $ROOT_DIR
mkdir $ROOT_DIR
cd $ROOT_DIR

step 2
touch $SKILLS2_FILE
for skll in ${SKILLS2_DATASET[@]}; do (echo $skll) >> $SKILLS2_FILE; done;

step 3
for skll in ${CUSTOM_SKILLS_DATASET[@]}; do (echo $skll) >> $SKILLS2_FILE; done;

step 4
wc -l $SKILLS2_FILE

step 5
cat $SKILLS2_FILE | sort | head -3 > $TOPSKILLS_FILE

step 6
for phrs in ${PHRASES_DATASET[@]}; do (echo $phrs >> $PHRASES2_FILE); done;

step 7
cat $PHRASES2_FILE | grep -En 'b|r'
cat $PHRASES2_FILE | grep -En 'b|r' | wc -l

step 8
cat $PHRASES2_FILE | grep -Env 'b|r'
cat $PHRASES2_FILE | grep -Env 'b|r' | wc -l

step 9
for country in ${COUNTRIES1_DATASET[@]}; do (echo $country >> $PHRASES2_FILE); done;

step 9.5
for country in ${COUNTRIES2_DATASET[@]}; do (echo $country>> $COUNTRIES_FILE); done;

step 10
cat $PHRASES2_FILE $COUNTRIES_FILE > $BOT_FILE

step 11
cat $BOT_FILE | sort


step Finish
rm -r *
cd ..
rmdir $ROOT_DIR

#!/bin/bash

global_name="Murilo Gonçanves"
global_email="murilo.gon@live.com"


if [[ $UID != 0 ]]; then
    echo "Please run this script with sudo:"
    echo "sudo $0 $*"
    exit 1
fi

echo -e "Configuring git global variables... \n"
git config --global user.name $global_name
git config --global user.email $globam_email
sleep .5s

echo -e "Configuring git aliases... \n"
#set a pretty graph plot os the logs
git config --global alias.graph "log --all --decorate --oneline --graph"
sleep .5s
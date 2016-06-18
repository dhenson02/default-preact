#!/bin/sh

if [ -d ".tmp/" ];then
    if [ -d ".tmp/css" ];then
        rm -rf ".tmp/css/*"
    else
        mkdir ".tmp/css"
    fi
    if [ -d ".tmp/js" ];then
        rm -rf ".tmp/js/*"
    else
        mkdir ".tmp/js"
    fi
else
    mkdir -p ".tmp/{css,js}"
fi


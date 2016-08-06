#!/bin/sh

for DIR in "$@"
do
    if [ -d $DIR ];then
        [ -f $DIR/index.html ] && rm $DIR/index.html
        [ -d $DIR/css ] && rm -rf $DIR/css/* || mkdir $DIR/css
        [ -d $DIR/js ] && rm -rf $DIR/js/* || mkdir $DIR/js
    else
        mkdir -p $DIR/css $DIR/js
    fi
done

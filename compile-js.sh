#!/bin/sh

COMPRESS_OPTIONS="--compress unsafe,keep_fargs,drop_console,collapse_vars,if_return,join_vars,cascade,booleans,loops,unused,comparisons,conditionals,drop_debugger,dead_code,properties,sequences"
OTHER_ARGUMENTS="--screw-ie8 --mangle --comments"

if [ "$1" = "dist" ];then
    uglifyjs .tmp/app.build.js ${COMPRESS_OPTIONS} ${OTHER_ARGUMENTS} --source-map dist/js/app.js.map --output dist/js/app.js
else
    uglifyjs .tmp/app.build.js --beautify --source-map dist/js/app.js.map --output dist/js/app.js
fi

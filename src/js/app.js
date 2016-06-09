'use strict';
import Immutable from 'immutable';
import reqwest from 'reqwest';
import fastdom from 'fastdom';

const main_ = document.getElementById('main');
const button_ = document.getElementById('clicker');

const handleClick = function ( event ) {
    const noob_ = document.createElement('textarea');

    noob_.style = Immutable.Map({
        borderColor: '#AACCEE',
        borderWidth: '3px',
        borderStyle: 'solid'
    }).toObject();

    fastdom.measure(function () {
        const height = document.body.innerHeight;
        const width = document.body.innerWidth;
        reqwest({
            url: '/',
            data: {
                height,
                width
            },
            success ( response ) {
                const text = document.createTextNode(JSON.stringify(arguments));
                fastdom.mutate(function () {
                    noob_.appendChild(text);
                    main_.appendChild(noob_);
                });
            },
            error ( response ) {
                const text = document.createTextNode(JSON.stringify(arguments));
                fastdom.mutate(function () {
                    noob_.appendChild(text);
                    main_.appendChild(noob_);
                });
            }
        });
    });
};

button_.addEventListener('click', handleClick, false);

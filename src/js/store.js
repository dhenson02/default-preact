'use strict';

import reqwest from 'reqwest';
import Immutable from 'immutable';
import Event from 'event';

export default class Store extends Event {
    constructor () {
        super();
        this.data = Immutable.Map();
    }

    grabData ( type, params ) {
        const self = this;
        reqwest({
            url: '/',
            data: params,
            success ( data ) {
                self.setData(data.id, data);
                console.log(`Data returned: ${data}`);
            },
            error ( error ) {
                console.error(`ERROR: ${error}`);
            }
        });
    }

    setData ( id, changes ) {
        var data = this.data;
        var current = data.get(id);
        if ( changes !== null ) {
            if ( !current ) {
                this.data = data.set(id, changes);
            }
            else {
                if ( typeof changes === 'function' ) {
                    this.data = data.update(id, changes);
                }
                else {
                    this.data = data.update(id, function ( obj ) {
                        return Object.assign({}, obj, changes);
                    });
                }
            }
        }
        else {
            if ( current ) {
                this.data = data.delete(id);
            }
            else {
                this.data = Immutable.Map();
            }
        }
        return this.fire('change', id);
    }
}

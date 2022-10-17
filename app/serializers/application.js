import { underscore } from '@ember/string';
import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
    
    //primaryKey = '_id';
    /*
    keyForAttribute(attr) {
        console.log(attr);
        return underscore(attr);
    }
    */
}

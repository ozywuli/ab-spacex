import DS from 'ember-data';
import { decamelize } from '@ember/string';

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(key) {
    return decamelize(key);
  }
});

import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://api.spacexdata.com',
  namespace: 'v3'
});

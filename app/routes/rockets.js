import Route from '@ember/routing/route';

export default Route.extend({
  controllerName: 'launches',
  model() {
    return this.store.findAll('rockets');
  }
});

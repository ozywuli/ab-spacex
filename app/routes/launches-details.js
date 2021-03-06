import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('launches', params.id);
  },

  actions: {
    willTransition() {
      this.store.unloadAll('launches');
    }
  }
});

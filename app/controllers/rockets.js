import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['layout'],
  layout: 'grid',

  actions: {
    toggleLayout(style) {
      this.set('layout', style);
    }
  }
});

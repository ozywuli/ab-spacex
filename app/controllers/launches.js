import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['layout'],
  layout: 'grid',

  isGrid: computed('layout', function() {
    return this.layout === 'grid';
  }),

  actions: {
    toggleLayout(style) {
      this.set('layout', style);
    }
  }
});

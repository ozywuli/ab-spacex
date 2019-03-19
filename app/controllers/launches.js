import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  // Grid / list layout param
  queryParams: ['layout'],
  layout: 'grid',

  /**
   * Checks if the layout is a grid or not
   * @return {boolean}
   */
  isGrid: computed('layout', function() {
    return this.layout === 'grid';
  }),

  actions: {
    /**
     * Toggle layout between grid and list
     * @param {string} - either 'grid' or 'list'
     * @return {Void}
     */
    toggleLayout(style) {
      if (!(style === 'grid' || style === 'list')) style = 'grid';
      this.set('layout', style);
    }
  }
});

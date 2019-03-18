import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: 'el-radio',
  classNameBindings: ['isActive:el-radio--active'],
  tagName: 'button',

  /**
   * Determines if radio element is active
   * @return {boolean}
   */
  isActive: computed('active', function() {
    return this.active === this.name;
  }),

  // Toggles element active
  click(event) {
    event.preventDefault();
    this.toggle(this.name);
  }
});

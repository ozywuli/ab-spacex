import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: 'el-radio',
  classNameBindings: ['isActive:el-radio--active'],
  tagName: 'button',

  isActive: computed('active', function() {
    return this.active === this.name;
  }),

  click(event) {
    event.preventDefault();
    this.toggle(this.name);
  }
});

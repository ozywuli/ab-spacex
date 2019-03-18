import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template'

export default Component.extend({
  classNames: 'grid-item',
  tagName: 'div',
  style: computed('data', function() {
    let imgUrl = this.data.imgUrl || '/assets/images/spacex_logo.png';
    return htmlSafe(`background-image: url('${imgUrl}')`);
  })
});

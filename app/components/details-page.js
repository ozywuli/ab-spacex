import Component from '@ember/component';
import { computed } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  className: 'detail-page',
  tagName: 'div',

  imgUrl: computed('data', function() {
    let imgUrl = this.data.imgUrl || '/assets/images/spacex_logo.png';
    return imgUrl;
  }),

  comments: '',

  async didInsertElement() {
    let comments = await $.getJSON(`/${this.id}/${this.data.id}/comments`);
    this.set('comments', comments.data.attributes.body);
  },
});

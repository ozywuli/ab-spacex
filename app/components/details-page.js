import Component from '@ember/component';
import { computed } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  className: 'detail-page',
  tagName: 'div',

  /**
   * Returns an image url from props or a backup image url
   * @return {string}
   */
  imgUrl: computed('data', function() {
    let imgUrl = this.data.imgUrl || '/assets/images/spacex_logo.png';
    return imgUrl;
  }),

  comments: null,

  async didInsertElement() {
    // Make a request for comments
    let comments = await $.getJSON(`/${this.id}/${this.data.id}/comments`);

    // Return if component is destroyed before the request completes
    if (this.isDestroyed) return;

    // After request completes, set the comments data a
    this.set('comments', comments.data.attributes.body);
  },
});

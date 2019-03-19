import Component from '@ember/component';
import { computed } from '@ember/object';
import $ from 'jquery';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

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

  didInsertElement() {
    // Make a request for comments
    return new Promise((resolve) => {
      $.getJSON(`/${this.id}/${this.data.id}/comments`).then((comment) => {
        // Return if component is destroyed before the request completes
        if (this.isDestroyed) resolve();
        later(this, () => {
          // After request completes, set the comments data a
          this.set('comments', comment.data.attributes.body);
          resolve();
        })
      })
    });
  },
});

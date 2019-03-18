import {
  animate,
  stop
} from "liquid-fire";
import $ from 'jquery';

export default function() {
  // Clear any animations on current element
  stop(this.oldElement);

  // Determine which elements to animate (grid or lsit)
  let el = $(this.newElement).find('.grid-group').length ? '.grid-item' : '.list-item';

  // Hide elements that are to be animated
  $(el).css({opacity: 0});

  return Promise.all([
    // animate away old elements
    animate(this.oldElement, { opacity: 0 }),

    // animate in new elements
    animate(this.newElement, { opacity: [ 1, 0 ] }, {
      complete: function() {
        // Animate each grid/list item
        $(el).each(function(i) {
          animate($(this), {
            opacity: [1, 0],
            translateY: ['0px', '20px'],
          }, {
            duration: 360,
            delay: i * 40,
            easing: 'easeInOutQuint',
          });
        })
      }
    })
  ]);
}

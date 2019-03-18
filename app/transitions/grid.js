import {
  animate,
  stop
} from "liquid-fire";
import $ from 'jquery';

export default function() {
  stop(this.oldElement);

  let el = $(this.newElement).find('.grid-group').length ? '.grid-item' : '.list-item';

  $(el).css({opacity: 0});

  return Promise.all([
    animate(this.oldElement, { opacity: 0 }),
    animate(this.newElement, { opacity: [ 1, 0 ] }, {
      complete: function() {
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

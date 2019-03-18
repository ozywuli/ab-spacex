import grid from './transitions/grid';

export default function() {
  this.transition(
    this.hasClass('grid'),
    this.toValue(true),
    this.use('grid', {duration: 250}),
    this.reverse('grid', {duration: 250}),
  )
}

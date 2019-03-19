import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | grid-item', function(hooks) {
  setupRenderingTest(hooks);

  test('"style" should return an inline style', async function(assert) {
    let imgUrl = 'http://placehold.it/300x300';
    this.set('model', { imgUrl });

    await render(hbs`{{grid-item data=model}}`);

    assert.equal(
      this.element.querySelector('.grid-item-img').getAttribute('style'),
      `background-image: url('${imgUrl}')`
    );
  })
});

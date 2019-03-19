import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | details-page', function(hooks) {
  setupRenderingTest(hooks);

  test('imgUrl should return a URL string', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let imgUrl = 'http://placehold.it/300x300';
    this.set('model', { imgUrl });

    await render(hbs`{{details-page data=model id="launches"}}`);

    await settled();

    assert.equal(
      this.element.querySelector('img').getAttribute('src'),
      imgUrl
    );
  });
});

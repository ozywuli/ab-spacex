import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | el-radio', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{el-radio}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#el-radio}}
        template block text
      {{/el-radio}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('isActive should return a boolean value', async function(assert) {
    await render(hbs`{{el-radio}}`);

    await click(this.element);

    assert.equal(
      this.element.querySelector('button').classList.contains('el-radio--active'),
      true
    );
  })
});

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | launches', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:launches');
    assert.ok(controller);
  });

  test('isGrid returns a correct boolean', function(assert) {
    let controller = this.owner.lookup('controller:launches');
    controller.set('layout', 'grid');
    assert.equal(controller.get('isGrid'), true);

    controller.set('layout', 'list');
    assert.equal(controller.get('isGrid'), false);

    controller.set('layout', 'random');
    assert.equal(controller.get('isGrid'), false);
  })

  test('toggleLayout action should return either "grid" or "list"', function(assert) {
    let controller = this.owner.lookup('controller:launches');

    controller.send('toggleLayout', 'grid');
    assert.equal(controller.get('layout'), 'grid');

    controller.send('toggleLayout', 'list');
    assert.equal(controller.get('layout'), 'list');

    controller.send('toggleLayout', 'random');
    assert.equal(controller.get('layout'), 'grid');
  })
});

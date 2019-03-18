import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | launches-details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:launches-details');
    assert.ok(route);
  });
});

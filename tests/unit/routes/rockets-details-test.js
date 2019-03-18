import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | rockets-details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:rockets-details');
    assert.ok(route);
  });
});

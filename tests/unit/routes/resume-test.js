import { module, test } from 'qunit';
import { setupTest } from 'vassilating-tesseract/tests/helpers';

module('Unit | Route | resume', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:resume');
    assert.ok(route);
  });
});

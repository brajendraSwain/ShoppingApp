import { moduleForModel, test } from 'ember-qunit';

moduleForModel('app-store', 'Unit | Model | app store', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('qwer Acceptance | departments', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /departments', async function(assert) {
    server.createList('department', 3);

    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('.test-department').exists({ count: 3 });
  });
});

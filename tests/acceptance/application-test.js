import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupPact } from 'ember-cli-pact';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('qwer Acceptance | departments', function(hooks) {
  setupApplicationTest(hooks);
  setupPact(hooks, {
    pactVersion: 2
  });

  test('see beds', async function(assert) {
    server.createList('beds', 3);

    await visit('/beds');

    assert.equal(currentURL(), '/beds');
  });

  test('see departments', async function(assert) {
    server.createList('department', 3);

    await visit('/departments');

    assert.equal(currentURL(), '/departments');
  });
});

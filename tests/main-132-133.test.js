import test from 'ava';
import { MockAgent, setGlobalDispatcher } from 'undici';
import { accessTokenResponse } from '../lib/main'; // Adjust the import based on your actual function

test.beforeEach(() => {
  const agent = new MockAgent();
  agent.disableNetConnect();
  setGlobalDispatcher(agent);
});

test('accessTokenResponse should handle the response correctly', async t => {
  const agent = new MockAgent();
  const mockPool = agent.get('https://api.github.com');
  
  mockPool.intercept({
    path: `/app/installations/${installationId}/access_tokens`, // Adjust the path based on your actual endpoint
    method: 'POST',
    headers: {
      authorization: `bearer ${jwt}`
    }

  }).reply(200, { /* mock response data */ });

  setGlobalDispatcher(agent);

  const result = await accessTokenResponse(); // Call the function you're testing

  // t.deepEqual(result, { /* expected result */ }); // Adjust based on expected result
});

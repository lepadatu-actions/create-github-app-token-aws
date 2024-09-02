// import test from 'ava';
// import { MockAgent, setGlobalDispatcher } from 'undici';
// import { createJWT } from '../lib/main'; // Adjust the import based on your actual function
// 
// test.beforeEach(() => {
  // const agent = new MockAgent();
  // agent.disableNetConnect();
  // setGlobalDispatcher(agent);
// });
// 
// test('createJWT should handle the response correctly', async t => {
  // const agent = new MockAgent();
  // const mockPool = agent.get('https://api.github.com');
  // 
  // mockPool.intercept({
    // path: '/your-endpoint', // Adjust the path based on your actual endpoint
    // method: 'GET',
  // }).reply(200, { /* mock response data */ });
// 
  // setGlobalDispatcher(agent);
// 
  // const result = await createJWT(); // Call the function you're testing
// 
  // t.deepEqual(result, { /* expected result */ }); // Adjust based on expected result
// });
// 
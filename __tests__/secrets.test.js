const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('secret-routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('Should return list of secrets', async () => {
    const res = await request(app).get('/secrets');
    const expected = [
      { id: '1', title: 'Sacramento', description: 'CA' },
      { id: '2', title: 'Salem', description: 'OR' },
      { id: '3', title: 'Olympia', description: 'WA' },
      { id: '4', title: 'Carson City', description: 'NV' },
    ];
    expect(res.body).toEqual(expected);
  });
    
});

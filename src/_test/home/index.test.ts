import request from 'supertest';
import { app } from "../../index_test";

describe('GET /api/v1/home', () => {
  it('responds with a message', async () => {
    const response = await request(app).get('/api/v1/home');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to AT API');
  });
});

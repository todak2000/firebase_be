import request from "supertest";
import { app } from "../../../index_test";

describe("GET /", () => {
  it("responds with a message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});

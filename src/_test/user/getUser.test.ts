jest.setTimeout(20000);
import request from "supertest";
import { app } from "../../../index_test";
import { faker } from "@faker-js/faker";

describe("GET /api/v1/user", () => {
  it("get exisiting user and responds with status 200 and a success message", async () => {
    const data = {
      id: "0de433cf-15ab-4962-a39a-34fe9234bfee", // DO NOT TOUCH
    };
    const response = await request(app).get("/api/v1/user").send(data);
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual("Data retrieved successfully!");
  });

  it("responds with status 400 and an error message if user creation fails", async () => {
    const data = {
      id: faker.string.uuid(),
    };
    const response = await request(app).get("/api/v1/user").send(data);
    expect(response.status).toBe(400);
  });
});

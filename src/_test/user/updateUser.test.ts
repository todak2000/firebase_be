jest.setTimeout(20000);
import request from "supertest";
import { app } from "../../../index_test";
import { faker } from "@faker-js/faker";

describe("UPDATE /api/v1/user", () => {
  it("update exisiting user and responds with status 200 and a success message", async () => {
    const data = {
      id: "0de433cf-15ab-4962-a39a-34fe9234bfee", // DO NOT TOUCH
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      authType: "gmail",
      role: "traveler",
    };
    const response = await request(app).put("/api/v1/user").send(data);
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual("User updated successfully");
  });
});

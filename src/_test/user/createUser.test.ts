jest.setTimeout(30000);
import request from "supertest";
import { app } from "../../../index_test";
import { db } from "../../firebase";
import { doc, deleteDoc } from "@firebase/firestore";
import { faker } from "@faker-js/faker";

describe("POST /api/v1/user", () => {
  it("creates a new user and responds with status 200 and a success message", async () => {
    const data = {
      id: faker.string.uuid(),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      authType: "gmail",
      role: "traveler",
    };
    const response = await request(app).post("/api/v1/user").send(data);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "New user created successfully",
    });
    // Clean up: delete the user created for the test
    const userDoc = doc(db, "Users", data.id);
    await deleteDoc(userDoc);
  });

  // Add more tests for other edge cases, such as:
  // - The request body is missing required fields
  // - A user with the same ID already exists
});

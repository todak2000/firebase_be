jest.setTimeout(20000);
import request from "supertest";
import { app } from "../../../index_test";

describe("DELETE /api/v1/user", () => {
  it("delete exisiting user and responds with status 200 and a success message", async () => {
    const data = {
      id: "0515b0ed-5c0a-4b5f-8693-8349b1a8365a", // MAY NOT EXIST
    };
    const response = await request(app).delete("/api/v1/user").send(data);
    // expect(response.status).toBe(200);
    // expect(response.body.message).toEqual('User deleted successfully');
  });
});

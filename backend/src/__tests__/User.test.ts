import request from "supertest";
import { app } from "../app";

import createConnection from "../database/index";

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("shoud be able to create a new user", async () => {
    const response = await request(app).post("/user").send({
      email: "user@example.com",
      name: "User Example",
    });

    expect(response.status).toBe(201);
  });

  it("shoudn`t be able to create a user with the same email", async () => {
    const response = await request(app).post("/user").send({
      email: "user@example.com",
      name: "User Example",
    });

    expect(response.status).toBe(400);
  });
});

import request from "supertest";
import { app } from "../app";

import createConnection from "../database/index";

describe("Survey", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("shoud be able to create a new survey", async () => {
    const response = await request(app).post("/survey").send({
      title: "Title Example",
      description: "Description Example",
    });

    expect(response.status).toBe(201);
  });

  it("shoud be able to get all surveys", async () => {
    await request(app).post("/survey").send({
      title: "Title Example 2",
      description: "Description Example",
    });

    const response = await request(app).get("/surveys");

    expect(response.body.length).toBe(2);
  });
});

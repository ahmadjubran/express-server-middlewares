"use strict";

const supertest = require("supertest");
const server = require("../server.js");
const request = supertest(server.app);

describe("Server", () => {
  it("should respond with a 200", async () => {
    const response = await request.get("/");
    expect(response.status).toEqual(200);
  });
  it("should respond with a 200", async () => {
    const response = await request.get("/square?num=5");
    expect(response.status).toEqual(200);
  });
  it("should respond with a 500", async () => {
    const response = await request.get("/square?num=hello");
    expect(response.status).toEqual(500);
  });

  it("should respond with 25", async () => {
    const response = await request.get("/square?num=5");
    expect(response.body.num).toEqual(25);
  });
  it("should respond with Something broke!", async () => {
    const response = await request.get("/square?num=hello");
    expect(response.text).toEqual("Something broke!");
  });
});

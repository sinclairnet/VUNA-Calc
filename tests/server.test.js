const http = require("http");

describe("Server", () => {
  let server;

  beforeAll((done) => {
    process.env.PORT = 3001;
    server = require("../server");
    setTimeout(done, 500);
  });

  afterAll((done) => {
    if (server && server.close) {
      server.close(done);
    } else {
      done();
    }
  });

  it("should respond with 200 on GET /", (done) => {
    http.get("http://localhost:3001/", (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});

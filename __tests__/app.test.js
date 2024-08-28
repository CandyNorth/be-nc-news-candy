const app = require("../app");
const request = require("supertest");
const req = request(app);
const db = require("../db/connection");
const seed = require("../db/seeds/seed");
const {
  topicData,
  userData,
  articleData,
  commentData,
} = require("../db/data/test-data/index");

beforeEach(() => seed({ topicData, userData, articleData, commentData }));
afterAll(() => db.end());

describe("/api/topics", () => {
  test("GET:200 sends an array of topics to the client", () => {
    return req
      .get("/api/topics")
      .expect(200)
      .then(({ body }) => {
        expect(Array.isArray(body.topics)).toBe(true);
        expect(body.topics).toHaveLength(3);
      });
  });
  test("GET:200 each topic has the correct properties", () => {
    return req
      .get("/api/topics")
      .expect(200)
      .then(({ body }) => {
        body.topics.forEach((topic) => {
          expect(topic).toHaveProperty("slug");
          expect(topic).toHaveProperty("description");
          expect(typeof topic.slug).toBe("string");
          expect(typeof topic.description).toBe("string");
        });
      });
  });
  test("GET:404 responds with an error for a non-existent path", () => {
    return req
      .get("/api/topcsx")
      .expect(404)
      .then((response) => {
        //console.log(response);
        // console.log(response.request.res.statusMessage);
        expect(response.request.res.statusMessage).toBe("Not Found");
        expect(response.status).toBe(404);
      });
  });
});

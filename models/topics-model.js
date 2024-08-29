const db = require("../db/connection");
const format = require("pg-format");

exports.selectTopics = () => {
  return db
    .query(format("SELECT * FROM %I", "topics"))
    .then((result) => result.rows);
};

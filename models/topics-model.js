const db = require("../db/connection");
const format = require('pg-format');

exports.selectTopics = () => {
  // db.query(format('SELECT * FROM %I', "topics")).then((result) => console.log(result.rows))
  return db.query(format('SELECT * FROM %I', "topics"))
    .then((result) => result.rows);
};
// exports.selectTopics = (topic) => {
//     return readFile(`data/topic/${catId}.json`, "utf8").then((catString, err) => {
//         const parsedCat = JSON.parse(catString);
//         return parsedCat;
//       }).catch((err) => {
//         return err;
//       });
//     };
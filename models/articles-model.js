const db = require("../db/connection");
//const format = require("pg-format");

exports.selectArticleById = (article_id) => {
    return db
      .query('SELECT * FROM articles WHERE article_id = $1;', [article_id])
      .then((result) => {
        return result.rows[0];
      });
  };
  
  exports.removeArticleById = (article_id) => {
    return db.query('DELETE FROM articles WHERE article_id = $1;', [article_id]);
  };
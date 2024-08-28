const { selectTopics } = require("../models/topics-model");

exports.getTopics = (request, response, next) => {
  selectTopics()
    .then((topics) => {
      response.status(200).send({ topics });
      console.log(request.body);
    })
    .catch((err) => {
      console.log(err);
      if (err) {
        next(err);
      }
    });
};

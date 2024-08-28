const express = require("express");
const app = express();
const { getTopics } = require("./controllers/topics-controller");

app.use(express.json());

// set endpoint
app.get("/api/topics", getTopics);

app.use((err, req, res, next) => {
	console.error(err.stack);
	next(err);
})

// Error Handling
// app.use('/api/topics', (request, response, next) => {
//   if (request.method !== 'GET') {
//     response.status(405).send({ msg: 'Method Not Allowed' });
//   } else {
//     next();
//   }
// });
// app.use((err, request, response, next) => {
//   console.log(`error code: ${err.code} `);
//   if (err.code === "23502") {
//     response.status(400).send({ msg: "Bad request" });
//   } else {
//     next(err);
//   }
// });
app.use((err, request, response, next) => {
  if (err.message === "NOT FOUND") {
    console.log(err);
    response.status(404).send(err);
  } else {
    next(err);
  }
});
// app.use((err, request, response, next) => {
//   console.log(err);
//   response.status(404).send({ msg: "Endpoint does not exist" });
//   if ("404") {
//     console.log("help meeeee");
//     response.status(404).send({ msg: "Endpoint does not exist" });
//   } else {
//  next(err);
// });

module.exports = app;

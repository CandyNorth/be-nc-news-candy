const { selectArticleById, removeArticleById } = require("../models/articles-model");


exports.getArticleById = (request, response, next) => {
    const { article_id } = request.params;
    if (isNaN(article_id)) {
        response.status(400).send({ msg: 'Bad Request' })
    } else {
        selectArticleById(article_id).then((article) => {
            if (article) {
                console.log(article)
                response.status(200).send({ article })
            } else {
                response.status(404).send({ msg: 'Not Found' })
            }
        })
            .catch((err) => {
                if (err) {
                    next(err)
                }
            })
    }
}


exports.deleteArticleById = (request, response, next) => {
    const { article_id } = request.params;
    removeArticleById(article_id).then(() => {
        response.status(204).send();
    });
};  
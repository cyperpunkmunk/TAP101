const router = require("express").Router();
const postController = require("../../controllers/postController");

router
  .route("/")
//   .get(postsController.findAll)
  .post(postController.create);

router
  .route("/:id")
  .post(postController.reply) 
  .get(postController.getOne); 

module.exports = router;


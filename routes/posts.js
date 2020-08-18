const { Router } = require("express");
const controllers = require("../controllers/posts");

const router = Router();

router.get("/posts", controllers.getPosts);
router.get("/posts/:postId", controllers.getPost);
router.post("/posts", controllers.createPost);
router.put("/posts/:postId", controllers.updatePost);
router.delete("/posts/:postId", controllers.deletePost);

// router.get("/users/:id/posts/");
// router.get("/users/:id/posts/:postId");

module.exports = router;

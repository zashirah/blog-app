const { Router } = require("express");
const controllers = require("../controllers/users");

const router = Router();

// router.get("/posts", controllers.getPosts);
// router.get("/posts/:id", controllers.getPost);
// router.post("/posts", controllers.createPost);
// router.put("/posts/:id", controllers.updatePost);
// router.delete("/posts/:id", controllers.deletePost);

router.get("/users/:id/posts/", controllers.getUserPosts);
router.get("/users/:id/posts/:postId", controllers.getUserPost);
router.get("/users", controllers.getUser);

module.exports = router;

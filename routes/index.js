const router = require("express").Router();

router.use("/api", require("./api/author.api"));
router.use("/api", require("./api/dashboard.api"));
module.exports = router;

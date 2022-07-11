const express = require("express");
const router = express.Router();
const DashboardRepository = require("../../controller/api/dashboard.controller");

router.route("/dashboard/all-item").get(DashboardRepository.GetAllItem);

module.exports = router;

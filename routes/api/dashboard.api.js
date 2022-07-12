const express = require("express");
const router = express.Router();
const DashboardRepository = require("../../controller/api/dashboard.controller");

router.route("/dashboard/all-item").get(DashboardRepository.GetAllItem);
router.route("/dashboard/item-by-id").get(DashboardRepository.GetItemByID);

module.exports = router;

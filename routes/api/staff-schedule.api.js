const express = require("express");
const router = express.Router();
const StaffScheduleController = require("../../controller/api-v2/staff-schedule.controller");

router.route("/staff-schedule").get(StaffScheduleController.FetchStaffSchedule);

module.exports = router;

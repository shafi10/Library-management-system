const express = require("express");
const router = express.Router();
const { check } = require("express-validator/check");
const {
  postLoan,
  getLoan,
  getSingleLoan,
  updateLoan,
  deleteLoan,
} = require("../controllers/loanCtrl");
const auth = require("../middleware/auth");

router.post("/", auth, postLoan);
router.get("/", auth, getLoan);
router.get("/single/:id", auth, getSingleLoan);
router.put("/update/:id", auth, updateLoan);
router.post("/delete/:id", auth, deleteLoan);

module.exports = router;

const express = require("express");
const {
    getProfile,
    createProfile,
} = require("../controllers/profileController");

const router = express.Router();

const app = express();

app.use(function (req, res, next) {
    console.log("THIS IS ROUTER LEVEL MIDDLEWARE");
    next();
});

router.post("/getProfile", getProfile);
router.post("/createProfile", createProfile);

module.exports = router;

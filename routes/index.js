const express = require("express")
const router = express.Router()
const { ensureAuth, ensureGuest} = require("../middleware/auth")

// @desc Login/Landing page
// @route GET /
router.get("/", (req, res) => {
    res.render("login", {layout: "login"})
})

// @desc Dashboard
// @route GET /
router.get("/dashboard", (req, res) => {
    res.render("dashboard")
})

module.exports = router
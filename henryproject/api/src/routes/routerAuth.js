const router = require('express').Router()
const passport = require('passport')
const { Users } = require('../db')
const {
    DB_USER, DB_PASSWORD, DB_HOST,API_KEY, DB_NAME,KEY_CHECK
  } = process.env;
  


router.get("/google", passport.authenticate("google", {scope:["profile", "email"]}))
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: `${DB_HOST}/profile`,
    failureRedirect: `${DB_HOST}`
}))

router.get("/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: 'failed'
    })
})
router.get("/success", (req, res) => {
    if(req.user) {
            res.status(200).json({
            success: true,
            message: 'success',
            user: req.user
            // cookies: req.cookies
        })
    }
})

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(`${DB_HOST}`)
})



module.exports = router;
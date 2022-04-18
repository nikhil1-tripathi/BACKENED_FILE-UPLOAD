const express = require("express");

const User = require("../models/user.model");

const {uploadSingle} = require("../middlewares/upload")

const router = express.Router();


router.get("", async(req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send(error.message)
    }
})


router.post("", uploadSingle("profile_pic"), async(req, res) => {
    try {
        const user = await User.create({
            first_name:req.body.first_name,
            last_name: req.body.last_name,
            profile_pic:req.file.path
        });
        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})


module.exports = router;
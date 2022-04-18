const express = require("express");

const Gallery = require("../models/pic.model");

const { uploadMultiple} = require("../middlewares/upload")

const router = express.Router();


router.get("", async(req, res)=>{
    try {
        const gallery = await Gallery.find().lean().exec();
        return res.status(200).send(gallery);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

router.post("", uploadMultiple(5, "pictures"), async(req, res) => {
    try {
        const filePaths = req.files.map((file) => file.path);

        const gallery = await Gallery.create({
            pictures:filePaths,
            user_id:req.body.user_id,
        });
        return res.status(201).send(gallery);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

module.exports = router;
const router = require("express").Router();
import { Request, Response } from "express";
const user = require("../../models/user");
const bcrypt = require("bcrypt");

router.post("/register", async (req: Request, res: Response) => {
    const saltRounds = 10;
    const newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hash(req.body.password, saltRounds, (err: unknown, hash: string) => {
            if (hash) {
                return hash;
            } else {
                console.log(err);
            }
        }),
    });
    try {
        const savedUser = await newUser.save();
        const { password, ...rest } = savedUser._doc;
        res.status(201).json(rest);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

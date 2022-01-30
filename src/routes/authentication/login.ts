const router = require("express").Router();
import { Request, Response } from "express";
const user = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", async (req: Request, res: Response) => {
    try {
        const userLogin = await user.findOne({ username: req.body.username });
        if (!userLogin) {
            res.status(401).json("wrong username");
        } else {
            const hashedStoredPassword = userLogin.password;
            const rightPassword = bcrypt.compare(
                req.body.password,
                hashedStoredPassword,
                (err: unknown, result: boolean) => {
                    if (result) {
                        return result;
                    } else {
                        console.log(err);
                    }
                }
            );
            if (rightPassword) {
                const accessToken = jwt.sign(
                    {
                        id: userLogin.id,
                        isAdmin: userLogin.isAdmin,
                    },
                    process.env.JWT_KEY,
                    { expiresIn: "7d" }
                );
                const { password, ...rest } = userLogin._doc;
                res.status(200).json({ ...rest, accessToken });
            } else if (userLogin) {
                res.status(401).json("wrong credentials, password not matching that user");
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

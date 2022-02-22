import express from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import user from "../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

router.post("/login", async (req: Request, res: Response) => {
    try {
        const userLogin = await user.findOne({ username: req.body.username });
        if (!userLogin) {
            res.status(401).json("wrong username");
        } else {
            const hashedStoredPassword = userLogin.password;
            const passwordMatch = await bcrypt.compare(req.body.password, hashedStoredPassword);
            if (passwordMatch) {
                if (process.env.JWT_KEY !== undefined) {
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
                } else {
                    console.log("jwt key missing");
                    res.status(400);
                }
            } else if (userLogin) {
                res.status(401).json("wrong credentials, password not matching that user");
            } else {
                console.log("wrong user");
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;

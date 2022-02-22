import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import user from "../../models/user";
import bcrypt from "bcrypt";

router.post("/register", async (req: Request, res: Response) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = await new user({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });
    try {
        const savedUser = await newUser.save();
        const { password, ...rest } = savedUser._doc;
        res.status(201).json(rest);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;

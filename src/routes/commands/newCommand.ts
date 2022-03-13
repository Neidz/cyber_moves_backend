import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import command from "../../models/commandModel";
import { verifyToken } from "../authentication/verifyToken";

router.post("/", verifyToken, async (req: Request, res: Response) => {
    const newCommand = new command(req.body);
    newCommand.username = req.user.username;
    newCommand.name = `${req.user.username}_${newCommand.name}`;
    try {
        const savedCommand = await newCommand.save();
        res.status(200).json(savedCommand);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;

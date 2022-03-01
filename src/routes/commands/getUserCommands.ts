import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import command from "../../models/commandModel";
import { verifyToken } from "../authentication/verifyToken";

router.get("/", verifyToken, async (req: Request, res: Response) => {
    const userId = req.user.id;
    try {
        const commandList = await command.find({
            "_id: {}": `${userId}`,
        });
        res.status(200).json(commandList);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;

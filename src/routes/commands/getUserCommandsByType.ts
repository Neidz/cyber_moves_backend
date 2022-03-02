import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import command from "../../models/commandModel";
import { verifyToken } from "../authentication/verifyToken";

router.get("/", verifyToken, async (req: Request, res: Response) => {
    const userId = req.user.id;
    const robotType = req.query.robotType;
    try {
        const requestedCommand = await command.find({
            "_id: {}": `${userId}`,
            robotType: `${robotType}`,
        });
        res.status(200).json(requestedCommand);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;

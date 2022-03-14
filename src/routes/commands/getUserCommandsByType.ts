import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import command from "../../models/commandModel";
import { verifyToken } from "../authentication/verifyToken";

router.get("/", verifyToken, async (req: Request, res: Response) => {
    const username = req.user.username;
    const robotType = req.query.robotType;
    try {
        const requestedCommand = await command.find(
            {
                username: username,
                robotType: robotType,
            },
            { _id: 0, "commands._id": 0 }
        );
        res.status(200).json(requestedCommand);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;

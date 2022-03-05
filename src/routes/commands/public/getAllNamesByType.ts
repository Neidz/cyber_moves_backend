import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import command from "../../../models/commandModel";

router.get("/", async (req: Request, res: Response) => {
    const robotType = req.query.robotType;
    try {
        const requestedCommand = await command.find(
            {
                robotType: `${robotType}`,
            },
            { name: 1, _id: 0 }
        );
        res.status(200).json(requestedCommand);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;

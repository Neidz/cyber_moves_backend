import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import command from "../../../models/commandModel";

router.get("/", async (req: Request, res: Response) => {
    const commandName = req.query.name;
    try {
        const requestedCommand = await command.find({
            name: commandName,
        });
        res.status(200).json(requestedCommand);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;

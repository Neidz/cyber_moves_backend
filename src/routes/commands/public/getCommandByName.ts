import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import command from "../../../models/commandModel";

router.get("/", async (req: Request, res: Response) => {
    const commandName = req.query.name;
    try {
        const requestedCommand = await command.findOne(
            {
                name: commandName,
            },
            { _id: 0, "commands._id": 0 }
        );
        res.status(200).json(requestedCommand);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;

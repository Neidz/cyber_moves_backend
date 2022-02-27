import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import { verifyToken } from "../authentication/verifyToken";

router.post("/", verifyToken, async (req: Request, res: Response) => {});

export default router;

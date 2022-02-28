import express, { NextFunction } from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.token;
        if (authHeader && typeof authHeader === "string") {
            const token = authHeader.split(" ")[1];
            if (process.env.JWT_KEY) {
                jwt.verify(token, process.env.JWT_KEY, (err, user) => {
                    if (err) {
                        return res.status(403).json("token not valid");
                    } else {
                        req.user = user;
                        next();
                    }
                });
            }
        } else {
            return res.status(401).json("token not provided");
        }
    } catch (err) {
        console.log(err);
    }
};

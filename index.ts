import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";

import registerRoute from "./src/routes/authentication/register";
import loginRoute from "./src/routes/authentication/login";

if (process.env.MONGODB_URL !== undefined) {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("db connection up");
        })
        .catch((err: string) => {
            console.log(err);
        });
} else {
    console.log("mongodb key missing");
}
app.use(express.json());
app.use(cors());

// endpoints
app.use("/api/auth", registerRoute);
app.use("/api/auth", loginRoute);

app.listen(process.env.PORT || 8080, () => {
    console.log("running");
});

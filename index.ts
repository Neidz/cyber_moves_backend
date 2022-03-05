import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import registerRoute from "./src/routes/authentication/register";
import loginRoute from "./src/routes/authentication/login";
import newCommand from "./src/routes/commands/newCommand";
import getUserCommands from "./src/routes/commands/getUserCommands";
import getCommandByName from "./src/routes/commands/public/getCommandByName";
import getUserCommandsByType from "./src/routes/commands/getUserCommandsByType";
import getAllNamesByType from "./src/routes/commands/public/getAllNamesByType";

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

// public
app.use("/api/public/allNamesByType", getAllNamesByType);
app.use("/api/public/commandByName", getCommandByName);

// with token
app.use("/api/newCommand", newCommand);
app.use("/api/userCommands", getUserCommands);
app.use("/api/userCommandsByType", getUserCommandsByType);

app.listen(process.env.PORT || 8080, () => {
    console.log("running");
});

import mongoose from "mongoose";

const CommandsSchema = new mongoose.Schema(
    {
        name: { type: String, require: true, unique: true },
        username: { type: String, required: true },
        commands: { type: [Object], required: true, unique: false },
        category: { type: [String], required: true },
        likes: { type: Number, required: false, unique: false },
    },
    { timestamps: true }
);

export default mongoose.model("commands", CommandsSchema);

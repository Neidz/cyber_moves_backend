import mongoose from "mongoose";

const CommandsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true, dropDups: true },
        username: { type: String, required: true, unique: false },
        commands: { type: [Object], required: true, unique: false },
        category: { type: [String], required: true, unique: false },
        robotType: { type: String, required: true, unique: false },
        public: { type: Boolean, required: true, unique: false, default: true },
        likes: { type: Number, required: false, unique: false },
    },
    { timestamps: true }
);

export default mongoose.model("commands", CommandsSchema);

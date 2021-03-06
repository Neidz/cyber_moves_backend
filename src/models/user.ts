import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true, dropDups: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, required: false, default: false },
        isHacker: { type: Boolean, required: false, default: false },
    },
    { timestamps: true }
);

export default mongoose.model("user", UserSchema);

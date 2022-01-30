const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, required: false, default: false },
    },
    { timestamp: true }
);

// for typescript lint on require
export {};
module.exports = mongoose.model("user", UserSchema);

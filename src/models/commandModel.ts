const mongoose = require("mongoose");

const SingleCommandSchema = new mongoose.Schema({
    speed: { type: Number, require: false, unique: false },
    angle1: { type: Number, require: false, unique: false },
    angle2: { type: Number, require: false, unique: false },
    angle3: { type: Number, require: false, unique: false },
    angle4: { type: Number, require: false, unique: false },
    angle5: { type: Number, require: false, unique: false },
    angle6: { type: Number, require: false, unique: false },
    angle7: { type: Number, require: false, unique: false },
    angle8: { type: Number, require: false, unique: false },
    angle9: { type: Number, require: false, unique: false },
    angle10: { type: Number, require: false, unique: false },
    angle11: { type: Number, require: false, unique: false },
    angle12: { type: Number, require: false, unique: false },
    angle13: { type: Number, require: false, unique: false },
    angle14: { type: Number, require: false, unique: false },
    angle15: { type: Number, require: false, unique: false },
    angle16: { type: Number, require: false, unique: false },
    angle17: { type: Number, require: false, unique: false },
    angle18: { type: Number, require: false, unique: false },
    angle19: { type: Number, require: false, unique: false },
    angle20: { type: Number, require: false, unique: false },
});

const CommandsSchema = new mongoose.Schema(
    {
        name: { type: String, require: true, unique: true },
        username: { type: String, required: true },
        commands: [{ type: Object, required: true, unique: false }],
        category: [SingleCommandSchema],
        likes: { type: Number, require: false, unique: false },
    },
    { timestamp: true }
);

// for typescript lint on require
export {};
module.exports = mongoose.model("commands", CommandsSchema);

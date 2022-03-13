import mongoose from "mongoose";

const CommandsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true, dropDups: true },
        username: { type: String, required: true, unique: false },
        commands: {
            type: [
                {
                    speed: { type: Number, required: false, unique: false },
                    angle1: { type: Number, required: false, unique: false },
                    angle2: { type: Number, required: false, unique: false },
                    angle3: { type: Number, required: false, unique: false },
                    angle4: { type: Number, required: false, unique: false },
                    angle5: { type: Number, required: false, unique: false },
                    angle6: { type: Number, required: false, unique: false },
                    angle7: { type: Number, required: false, unique: false },
                    angle8: { type: Number, required: false, unique: false },
                    angle9: { type: Number, required: false, unique: false },
                    angle10: { type: Number, required: false, unique: false },
                    angle11: { type: Number, required: false, unique: false },
                    angle12: { type: Number, required: false, unique: false },
                    angle13: { type: Number, required: false, unique: false },
                    angle14: { type: Number, required: false, unique: false },
                    angle15: { type: Number, required: false, unique: false },
                    angle16: { type: Number, required: false, unique: false },
                    angle17: { type: Number, required: false, unique: false },
                    angle18: { type: Number, required: false, unique: false },
                    angle19: { type: Number, required: false, unique: false },
                    angle20: { type: Number, required: false, unique: false },
                },
            ],
            required: true,
            unique: false,
        },
        category: { type: [String], required: true, unique: false },
        robotType: { type: String, required: true, unique: false },
        public: { type: Boolean, required: true, unique: false, default: true },
        likes: { type: Number, required: false, unique: false },
    },
    { timestamps: true }
);

export default mongoose.model("commands", CommandsSchema);

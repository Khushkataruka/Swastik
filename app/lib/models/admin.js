import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
});

export default mongoose.models.Admin || mongoose.model("Admin", adminSchema);

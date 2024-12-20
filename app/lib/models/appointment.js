import mongoose, { Schema } from "mongoose";
import { type } from "os";

const appointmentSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "completed", "cancelled"],
        default: "pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    location: {
        type: String,
        enum: ["clinic", "homeVisit"],
        default: "clinic",
    },
    Address: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
    token: {
        type: String,
    },
    expireTime: {
        type: Number,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    },
    confirmed: {
        type: Boolean,
        required: true,
    }
});

// Fixing the issue by checking if the model is already compiled
const Appointment = mongoose.models.Appointments || mongoose.model("Appointments", appointmentSchema, "Appointments");

export default Appointment;

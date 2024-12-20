import mongoose from 'mongoose';

const Connect = async () => {
    try {
        // If mongoose is already connected, return
        if (mongoose.connection.readyState >= 1) {
            console.log("Already connected to MongoDB");
            return;
        }

        if (!process.env.MONGOBURI) {
            throw new Error("MONGOBURI environment variable is not defined");
        }

        await mongoose.connect(process.env.MONGOBURI);
        console.log("Connected to MongoDB successfully");
    } catch (e) {
        console.error("Error occurred while connecting to MongoDB:", e);
        throw new Error("Failed to connect to MongoDB");
    }
};

export default Connect;

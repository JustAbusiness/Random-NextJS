import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(`${process.env.MONGO_DB}`)

        console.log("Connect DB success")
    } catch (error) {
        console.log("Connect DB failed", error)
    }
}

export default connectDB;
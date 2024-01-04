import mongoose from "mongoose";

export function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection();
        connection.on("connected",()=>{
            console.log("MongoDB connected successfully");
        })

        connection.on("error",(err)=>{
            console.log("Mongo not connected" + err);
        })

        process.exit();

    } catch (error) {
        console.log('db Connection mei error hai bro', error)
    }
}
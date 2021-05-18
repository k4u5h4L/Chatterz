import mongoose from "mongoose";

const dbConnect = async () => {
    // check if we have a connection to the database or if it's currently
    // connecting or disconnecting (readyState 1, 2 and 3)
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    const connection = mongoose.connection;
    connection.once("open", () => {
        console.log("MongoDB database connection established successfully");
    });

    return mongoose.connect(
        process.env.DATABASE_URL || "mongodb://localhost:27017/chatterzDB",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        }
    );
};

export default dbConnect;

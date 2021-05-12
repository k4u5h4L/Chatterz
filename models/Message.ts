import mongoose from "mongoose";

/* MessageSchema will correspond to a collection in your MongoDB database. */
const MessageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export { MessageSchema };

export default mongoose.models.Message ||
    mongoose.model("Message", MessageSchema);

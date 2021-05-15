import mongoose from "mongoose";

/* ChatSchema will correspond to a collection in your MongoDB database. */
const ChatSchema = new mongoose.Schema({
    chatId: {
        type: String,
        required: true,
    },
    members: {
        type: Array,
    },
});

export { ChatSchema };

export default mongoose.models.Chat || mongoose.model("Chat", ChatSchema);

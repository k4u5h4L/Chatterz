import mongoose from "mongoose";

/* TodoSchema will correspond to a collection in your MongoDB database. */
const TodoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    list: {
        type: Array,
    },
});

export { TodoSchema };

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

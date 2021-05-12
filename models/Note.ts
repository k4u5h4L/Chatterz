import mongoose from "mongoose";

/* NoteSchema will correspond to a collection in your MongoDB database. */
const NoteSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    list: {
        type: Array,
    },
});

export { NoteSchema };

export default mongoose.models.Note || mongoose.model("Note", NoteSchema);

import mongoose from "mongoose";

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    location: {
        type: String,
    },
    github: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    facebook: {
        type: String,
    },
    instagram: {
        type: String,
    },
    bio: {
        type: String,
    },
});

export { UserSchema };

export default mongoose.models.User || mongoose.model("User", UserSchema);

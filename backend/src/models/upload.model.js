import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    uploadImage: {
        type: String,
        required: true,
        default:""
    },
    location: {
        lat: {
            type: Number,
            default:"",
            required: true
        },
        long: {
            type: Number,
            default:"",
            required: true
        }
    }
});

const Upload = mongoose.model("Upload", uploadSchema);

export default Upload;
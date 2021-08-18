import { Schema } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },
    timestamps: true,
});

const User = mongoose.mode('User', userSchema);

module.exports = User;
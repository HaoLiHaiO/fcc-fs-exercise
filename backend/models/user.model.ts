import { Schema } from "mongoose";

interface IUser {
    userName: {
        type: string
        unique: boolean
        trim: boolean
        minLength: number
    }
    timestamps: boolean
}

const userSchema = new Schema<IUser>({
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
import { Schema } from "mongoose";

interface IUser {
    userName: string
}

const userSchema = new Schema<IUser>({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },
  }, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
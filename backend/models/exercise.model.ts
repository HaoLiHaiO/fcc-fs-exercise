import { Schema } from "mongoose";

interface IExercise {
    username: string
    description: string
    duration: number
    date: Date
}

const exerciseSchema = new Schema<IExercise>({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  }, {
    timestamps: true,
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
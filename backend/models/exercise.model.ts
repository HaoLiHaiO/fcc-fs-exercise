import { Schema } from "mongoose";

interface IExercise {
    username: { type: string }
    description: { type: string }
    duration: { type: number }
    date: { type: Date }
}

const exerciseSchema = new Schema<IExercise>({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  }, {
    timestamps: true,
})
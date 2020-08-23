import mongoose, { Schema } from 'mongoose';

//Database

export const habitSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

export default mongoose.models.habits || mongoose.model('Habits', habitSchema);

import mongoose, { Schema } from 'mongoose';

//Database
const EventSchema = new Schema({
  date: {
    type: Date,
    required: true,
    unique: true,
  },
});
export const habitSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  events:[EventSchema]
});

export default mongoose.models.habits || mongoose.model('habits', habitSchema);

import mongoose from 'mongoose';
import { delBasePath } from 'next/dist/next-server/lib/router/router';

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState !== 1) {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
  }
  return handler(req, res);
};

const db = mongoose.connection;
db.once('open', () => {
  console.log('connected to mongoos ');
});

export default connectDB;

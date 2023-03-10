import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);

  mongoose.connect(url)
    .then(() => console.lo('MongoDB connected'))
    .catch((err) => console.log(err))
}

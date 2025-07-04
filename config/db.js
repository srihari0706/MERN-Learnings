import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/AttendanceLearn', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    // console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1); // stop the app if DB fails
  }
};

export default connectDB;

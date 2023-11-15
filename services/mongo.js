import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection is ready');
});

mongoose.connection.on('error', (e) => {
  console.log(e);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default mongoConnect;

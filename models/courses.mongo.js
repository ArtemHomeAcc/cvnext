import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    en: {
      language: {
        type: String,
        require: true,
      },
      descr: {
        type: String,
        require: true,
      },
    },
    ua: {
      language: {
        type: String,
        require: true,
      },
      descr: {
        type: String,
        require: true,
      },
    },
  },
});

export default mongoose.models.Course || mongoose.model('Course', courseSchema);

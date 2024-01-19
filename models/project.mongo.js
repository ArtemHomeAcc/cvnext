import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
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
    uk: {
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
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  gDiskLink: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Project || mongoose.model('Project', projectSchema);

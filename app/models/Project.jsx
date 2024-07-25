import mongoose from "mongoose";

const projectScheema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
  github: {
    type: String,
  },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectScheema);

export default Project;

import mongoose from "mongoose";
const aboutSchema = new mongoose.Schema(
  {
    title: { type: String, enum: ["education", "experience"] },
    data: [
      {
        institute: { type: String },
        designation: { type: String },
        years: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const About = mongoose.models.About || mongoose.model("About", aboutSchema);
export default About;

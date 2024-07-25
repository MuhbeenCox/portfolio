import mongoose from "mongoose";

const headerScheema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    animatedText: { type: String, required: true },
    description: { type: String },
    subHeading: { type: String },
    github: { type: String },
    linkedIn: { type: String },
    instagram: { type: String },
    facebook: { type: String },
    image: { type: String },
    cv: { type: String },
  },
  { timestamps: true }
);

const Header =
  mongoose.models.Header || mongoose.model("Header", headerScheema);
export default Header;

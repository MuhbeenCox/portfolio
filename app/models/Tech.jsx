import mongoose from "mongoose";

const techScheema = new mongoose.Schema(
  {
    data: [{ url: { type: String } }],
  },
  { timestamps: true }
);

const Tech = mongoose.models.Tech || mongoose.model("Tech", techScheema);
export default Tech;

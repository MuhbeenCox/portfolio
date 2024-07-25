import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  address: { type: String },
  phone: { type: String },
  dob: { type: String },
  twitter: { type: String },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;

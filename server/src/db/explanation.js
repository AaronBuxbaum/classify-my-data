import mongoose from "mongoose";

const ExplanationSchema = new mongoose.Schema({
  itemId: {
    type: String,
    required: true
  },
  explanation: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Explanation", ExplanationSchema);

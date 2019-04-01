import mongoose from "mongoose";

const ClassificationItemSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("ClassificationItem", ClassificationItemSchema);

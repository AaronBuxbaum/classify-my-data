import mongoose from "mongoose";

const CategorizationSchema = new mongoose.Schema({
  itemId: {
    type: Number,
    required: true
  },
  category: {
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

export default mongoose.model("Categorization", CategorizationSchema);

import mongoose from "mongoose";

const VoteSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Vote", VoteSchema);

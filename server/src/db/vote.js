import mongoose from "mongoose";

const VoteSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  vote: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Vote", VoteSchema);

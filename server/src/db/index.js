import mongoose from "mongoose";
import Categorization from "./categorization";
import ClassificationItem from "./classificationItem";
import Explanation from "./explanation";
import Vote from "./vote";

mongoose.Promise = global.Promise;

export const startDB = ({ url, db }) =>
  mongoose.connect(`mongodb://${url}/${db}`);

export const models = {
  Categorization,
  ClassificationItem,
  Explanation,
  Vote
};

import mongoose from "mongoose";
import Categorization from "./categorization";
import Explanation from "./explanation";
import Vote from "./vote";

mongoose.Promise = global.Promise;

export const startDB = ({ user, pwd, url, db }) =>
  mongoose.connect(`mongodb://${url}/${db}`);

export const models = {
  Categorization,
  Explanation,
  Vote
};

import mongoose from "mongoose";
import Vote from "./vote";

mongoose.Promise = global.Promise;

export const startDB = ({ user, pwd, url, db }) =>
  mongoose.connect(`mongodb://${url}/${db}`);

export const models = {
  Vote
};

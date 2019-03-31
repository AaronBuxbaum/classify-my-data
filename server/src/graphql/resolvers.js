export default {
  Query: {
    votes: async (parent, args, { models }) => {
      const Posts = await models.Vote.find({});
      console.log(Posts);
      return Posts;
    }
  },
  Mutation: {
    createVote: async (parent, { title }, { models }) => {
      const Vote = await models.Vote.findOne({ title });

      if (Vote) {
        throw new Error("Please provide a unique title.");
      }

      // create a new post
      const newVote = new models.Vote({
        value: "testing"
      });

      // save the post
      try {
        await newVote.save();
      } catch (e) {
        throw new Error("Cannot Save Post!!!");
      }

      return true;
    }
  }
};

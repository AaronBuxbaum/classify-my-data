export default {
  Query: {
    votes: async (parent, args, { models }) => {
      const Votes = await models.Vote.find({});
      console.log(Votes);
      return Votes;
    }
  },
  Mutation: {
    createVotes: async (parent, { votes }, { models }) => {
      try {
        await models.Vote.collection.insertMany(votes, { ordered: false });
      } catch (e) {
        throw new Error("Cannot save vote");
      }

      return true;
    }
  }
};

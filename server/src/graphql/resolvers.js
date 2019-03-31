export default {
  Query: {
    votes: async (parent, args, { models }) => {
      // await models.Vote.deleteMany({});
      return await models.Vote.find({});
    },
    explanations: async (parent, args, { models }) => {
      return await models.Explanation.find({});
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
    },
    createExplanations: async (parent, { explanations }, { models }) => {
      try {
        await models.Explanation.collection.insertMany(explanations, {
          ordered: false
        });
      } catch (e) {
        throw new Error("Cannot save explanation");
      }

      return true;
    },
    createCategorizations: async (parent, { categorizations }, { models }) => {
      try {
        await models.Categorization.collection.insertMany(categorizations, {
          ordered: false
        });
      } catch (e) {
        throw new Error("Cannot save categorization");
      }

      return true;
    }
  }
};

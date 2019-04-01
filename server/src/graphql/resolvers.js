export default {
  Query: {
    votes: async (parent, args, { models }) => {
      // await models.Vote.deleteMany({});
      return await models.Vote.find({});
    },
    explanations: async (parent, args, { models }) => {
      return await models.Explanation.find({});
    },
    userVotesThatNeedExplanations: async (parent, args, { models }) => {
      const votes = await models.Vote.find({});
      const differingVotes = {};
      votes.forEach(vote => {
        if (!differingVotes[vote.itemId]) {
          differingVotes[vote.itemId] = {
            itemId: vote.itemId,
            vote: vote.vote,
            differingVotes: 0
          };
        } else if (differingVotes[vote.itemId].vote !== vote.vote) {
          differingVotes[vote.itemId].differingVotes++;
        }
      });
      const differingIds = Object.values(differingVotes)
        .filter(vote => vote.differingVotes > 1)
        .map(({ itemId }) => itemId);
      return votes.filter(vote => differingIds.includes(vote.itemId));
    },
    categorizations: async (parent, args, { models }) => {
      return await models.Categorization.find({});
    },
    classificationItems: async (parent, args, { models }) => {
      return await models.ClassificationItem.find({});
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
    },
    createClassificationItem: async (parent, { text }, { models }) => {
      try {
        await models.ClassificationItem.collection.insertOne({
          text
        });
      } catch (e) {
        throw new Error("Cannot save classification item");
      }

      return true;
    }
  }
};

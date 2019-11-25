exports.resolvers = {
  Query: {
    hello: (obj, args, context) => {
      return "Hello, file-seperated world!";
    },
    allCharacter: (obj, args, context) => {
      const { client, query: q } = context;

      return client
        .query(
          q.Map(
            q.Paginate(q.Match(q.Index("allCharacters"))),
            q.Lambda("ref", q.Select(["data"], q.Get(q.Var("ref"))))
          )
        )
        .then(result => result.data);
    }
  }
};

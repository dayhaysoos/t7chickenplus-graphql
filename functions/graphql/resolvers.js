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
    },
    characterMoves: (obj, args, context) => {
      const { client, query: q } = context;

      return client
        .query(
          q.Map(
            q.Paginate(q.Match(q.Index("allCharacters"))),
            q.Lambda("ref", q.Select(["data"], q.Get(q.Var("ref"))))
          )
        )
        .then(result =>
          result.data.find(character => character.label === args.filter)
        );
    },
    characterMove: (obj, args, context) => {
      const { client, query: q } = context;

      return client
        .query(
          q.Map(
            q.Paginate(q.Match(q.Index("allCharacters"))),
            q.Lambda("ref", q.Select(["data"], q.Get(q.Var("ref"))))
          )
        )
        .then(result => {
          const characterMoves = result.data.find(
            character => character.label === args.filter
          ).movelist;
          return characterMoves.find(move => move.id === args.move_id);
        });
    }
  },

  Mutation: {
    updateCharacterMove: (obj, args, context) => {
      const { client, query: q } = context;

      return client
        .query(
          q.Map(
            q.Paginate(q.Match(q.Index("allCharacters"))),
            q.Lambda("ref", q.Select(["data"], q.Get(q.Var("ref"))))
          )
        )
        .then(result => {
          const character = result.data.find(
            character => character.label === args.label
          );

          const moveIndex = character.movelist.findIndex(
            move => move.id === args.moveId
          );

          character.movelist[moveIndex][args.property] = args.value;

          const updatedMovelist = character.movelist;

          return {
            ...character,
            movelist: updatedMovelist
          };
        })
        .then(updatedCharacter => {
          const { label, movelist } = updatedCharacter;

          client
            .query(q.Paginate(q.Match(q.Index("characterByLabel"), label)))
            .then(characterRef => {
              client.query(
                q.Update(characterRef.data[0], {
                  data: {
                    movelist
                  }
                })
              );
            });
        });
    }
  }
};

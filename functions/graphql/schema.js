const { gql } = require("apollo-server-lambda");

exports.typeDefs = gql`
  type Query {
    hello: String!
    allCharacter: [Character]!
  }

  type MoveList {
    preview_url: String
    move_name: String
    notation: String
    hit_level: String
    range: String
    pushback: String
    tracking: String
    crush: String
    jail: String
    natural: String
    environmental: String
    cancelable: String
    meter_gain: String
    damage: String
    speed: String
    on_block: String
    on_hit: String
    on_ch: String
    in_air: String
    on_whiff: String
    active_frames: String
    notes: String
    id: String
  }

  type Character {
    fullName: String!
    displayName: String!
    label: String!
    movelist: [MoveList]
  }
`;

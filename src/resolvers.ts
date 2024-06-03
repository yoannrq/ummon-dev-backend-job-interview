import { VoidResolver, JSONResolver } from "graphql-scalars";
import { ColorResolver } from "./resolvers/color";

import { colors } from "./queries/colors";

export const resolvers = {
  Void: VoidResolver,
  JSON: JSONResolver,
  Color: ColorResolver,
  Query: {
    colors,
  },
  // Mutation: {},
};

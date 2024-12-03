import { VoidResolver, JSONResolver } from "graphql-scalars";
import { ColorResolver } from "./resolvers/color";

import { colors } from "./queries/colors";
import { elements } from "./queries/elements";
import { parts } from "./queries/parts";
import { partCategories } from "./queries/partCategories";

export const resolvers = {
  Void: VoidResolver,
  JSON: JSONResolver,
  Color: ColorResolver,
  Query: {
    colors,
    elements,
    parts,
    partCategories,
  },
  // Mutation: {},
};

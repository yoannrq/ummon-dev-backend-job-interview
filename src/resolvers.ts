import { VoidResolver, JSONResolver } from "graphql-scalars";
import { ColorResolver } from "./resolvers/color";
import { ElementResolver } from "./resolvers/element";

import { colors, color } from "./queries/colors";
import { elements } from "./queries/elements";
import { parts } from "./queries/parts";
import { partCategories } from "./queries/partCategories";

export const resolvers = {
  Void: VoidResolver,
  JSON: JSONResolver,
  Color: ColorResolver,
  Element: ElementResolver,
  Query: {
    colors,
    color,
    elements,
    parts,
    partCategories,
  },
  // Mutation: {},
};

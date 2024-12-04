import { VoidResolver, JSONResolver } from "graphql-scalars";
import { ColorResolver } from "./resolvers/color";
import { ElementResolver } from "./resolvers/element";

import { colors, color } from "./queries/colors";
import { elements } from "./queries/elements";
import { parts } from "./queries/parts";
import { partCategories } from "./queries/partCategories";
import { PartResolver } from "./resolvers/part";

export const resolvers = {
  Void: VoidResolver,
  JSON: JSONResolver,
  Color: ColorResolver,
  Element: ElementResolver,
  Part: PartResolver,
  Query: {
    colors,
    color,
    elements,
    parts,
    partCategories,
  },
  // Mutation: {},
};

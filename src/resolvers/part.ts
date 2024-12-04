import { AppDataSource } from "../data-source";
import { Part } from "../entities/Part";
import { PartCategory } from "../entities/PartCategory";
import { Element } from "../entities/Element";

export const PartResolver = {
  category: async (part: Part, _variables: {}) => {
    return await AppDataSource.manager.findOneBy(PartCategory, {
      id: part.categoryId,
    });
  },

  elements: async (part: Part, _variables: {}) => {
    return await AppDataSource.manager.find(Element, {
      where: {
        partNum: part.partNum,
      },
    });
  },
};

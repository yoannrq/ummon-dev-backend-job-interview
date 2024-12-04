import { AppDataSource } from "../data-source";
import { Element } from "../entities/Element";
import { Color } from "../entities/Color";

export const ElementResolver = {
  color: async (element: Element, _variables: {}) => {
    return await AppDataSource.manager.findOneBy(Color, {
      id: element.colorId,
    });
  },
};

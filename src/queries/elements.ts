import { AppDataSource } from "../data-source";
import { Element } from "../entities/Element";

export async function elements(
  _parent: undefined,
  variables: { limit?: number }
) {
  return await AppDataSource.manager.find(Element, {
    take: variables.limit,
  });
}

import { AppDataSource } from "../data-source";
import { Element } from "../entities/Element";

export async function elements(_parent: undefined, _variables: {}) {
  return await AppDataSource.manager.find(Element);
}

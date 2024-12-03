import { AppDataSource } from "../data-source";
import { PartCategory } from "../entities/PartCategory";

export async function partCategories(_parent: undefined, _variables: {}) {
  return await AppDataSource.manager.find(PartCategory);
}

import { AppDataSource } from "../data-source";
import { Color } from "../entities/Color";

export async function colors(_parent: undefined, _variables: {}) {
  return await AppDataSource.manager.find(Color);
}

export async function color(_parent: undefined, variables: { id: string }) {
  return await AppDataSource.manager.findOneBy(Color, { id: variables.id });
}

import { AppDataSource } from "../data-source";
import { Color } from "../entities/Color";

export async function colors(
  _parent: undefined,
  variables: { limit?: number }
) {
  return await AppDataSource.manager.find(Color, {
    take: variables.limit,
  });
}

export async function color(_parent: undefined, variables: { id: string }) {
  return await AppDataSource.manager.findOneBy(Color, { id: variables.id });
}

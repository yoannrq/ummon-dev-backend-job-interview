import { AppDataSource } from "../data-source";
import { Part } from "../entities/Part";

export async function parts(_parent: undefined, variables: { limit?: number }) {
  return await AppDataSource.manager.find(Part, {
    take: variables.limit,
  });
}

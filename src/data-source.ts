import "reflect-metadata";
import { DataSource } from "typeorm";
import { Color } from "./entities/Color";
import { Element } from "./entities/Element";
import { PartCategory } from "./entities/PartCategory";
import { Part } from "./entities/Part";
import { config } from "./config";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: config.DATABASE_PATH,
  synchronize: true,
  logging: false,
  entities: [Color, Element, Part, PartCategory],
  migrations: [],
  subscribers: [],
});

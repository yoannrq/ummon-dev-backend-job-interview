import "reflect-metadata";
import { DataSource } from "typeorm";
import { Color } from "./entities/Color";
import { config } from "./config";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: config.DATABASE_PATH,
  synchronize: true,
  logging: false,
  entities: [
    Color,
  ],
  migrations: [],
  subscribers: [],
});
